import { useState } from "react";
import { db } from "./db";
import { rules } from "./rules";
import axios from "axios";

const LANGS = [
  { code: "en", label: "English" },
  { code: "hi", label: "हिन्दी" },
  { code: "mr", label: "मराठी" },
];

const LABELS = {
  en: {
    crop: "Select Crop",
    issue: "Select Problem",
    soil: "Select Soil",
    stage: "Select Stage",
    getAdvice: "Get Advice",
    sync: "Sync",
    reset: "Reset",
    advisory: "Crop Advisory",
    advice: "Advice:",
    rice: "Rice",
    wheat: "Wheat",
    yellowLeaves: "Yellow Leaves",
    brownSpots: "Brown Spots",
    wet: "Wet",
    dry: "Dry",
    growing: "Growing",
    early: "Early",
    noData: "No data. Contact expert.",
    syncing: "Syncing...",
    synced: "Synced!",
    syncFailed: "Sync failed",
  },
  hi: {
    crop: "फसल चुनें",
    issue: "समस्या चुनें",
    soil: "मिट्टी चुनें",
    stage: "अवस्था चुनें",
    getAdvice: "सलाह लें",
    sync: "सिंक करें",
    reset: "रीसेट",
    advisory: "फसल सलाह",
    advice: "सलाह:",
    rice: "धान",
    wheat: "गेहूं",
    yellowLeaves: "पीले पत्ते",
    brownSpots: "भूरे धब्बे",
    wet: "गीली",
    dry: "सूखी",
    growing: "वृद्धि",
    early: "प्रारंभिक",
    noData: "कोई डेटा नहीं। विशेषज्ञ से संपर्क करें।",
    syncing: "सिंक हो रहा है...",
    synced: "सिंक हो गया!",
    syncFailed: "सिंक विफल",
  },
  mr: {
    crop: "पिक निवडा",
    issue: "समस्या निवडा",
    soil: "माती निवडा",
    stage: "पायरी निवडा",
    getAdvice: "सल्ला घ्या",
    sync: "सिंक करा",
    reset: "रीसेट",
    advisory: "पिक सल्ला",
    advice: "सल्ला:",
    rice: "तांदूळ",
    wheat: "गहू",
    yellowLeaves: "पिवळी पाने",
    brownSpots: "तपकिरी डाग",
    wet: "ओलसर",
    dry: "कोरडी",
    growing: "वाढ",
    early: "लवकर",
    noData: "डेटा नाही. तज्ञाशी संपर्क साधा.",
    syncing: "सिंक होत आहे...",
    synced: "सिंक पूर्ण!",
    syncFailed: "सिंक अयशस्वी",
  },
};

export default function App() {
  const [lang, setLang] = useState("en");
  const [crop, setCrop] = useState("");
  const [issue, setIssue] = useState("");
  const [soil, setSoil] = useState("");
  const [stage, setStage] = useState("");
  const [advice, setAdvice] = useState("");

  const getAdvice = () => {
    const found = rules.find(
      (r) =>
        r.crop === crop &&
        r.issue === issue &&
        r.soil === soil &&
        r.stage === stage,
    );

    if (found) {
      setAdvice(found.advice[lang]);
      speak(found.advice[lang]);
      saveReport(found.advice[lang]);
    } else {
      setAdvice(LABELS[lang].noData);
    }
  };

  const speak = (text) => {
    const msg = new SpeechSynthesisUtterance(text);
    let voice = null;
    if (lang === "hi") {
      msg.lang = "hi-IN";
      
      const voices = window.speechSynthesis.getVoices();
      voice = voices.find(
        (v) => v.lang && v.lang.toLowerCase().startsWith("hi"),
      );
    } else if (lang === "mr") {
      msg.lang = "mr-IN";
      const voices = window.speechSynthesis.getVoices();
      voice = voices.find(
        (v) => v.lang && v.lang.toLowerCase().startsWith("mr"),
      );
    } else {
      msg.lang = "en-IN";
      const voices = window.speechSynthesis.getVoices();
      voice = voices.find(
        (v) => v.lang && v.lang.toLowerCase().startsWith("en"),
      );
    }
    if (voice) msg.voice = voice;
    window.speechSynthesis.speak(msg);
  };

  const saveReport = async (adv) => {
    await db.reports.add({
      crop,
      issue,
      soil,
      stage,
      advice: adv,
      synced: 0,
    });
  };

  const syncData = async () => {
    const unsynced = await db.reports.where("synced").equals(0).toArray();
    if (!unsynced.length) return alert("Nothing to sync");

    await axios.post("http://localhost:5000/sync", unsynced);
    unsynced.forEach((r) => db.reports.update(r.id, { synced: 1 }));
    alert("Synced successfully!");
  };

  window.addEventListener("online", syncData);

  const [step, setStep] = useState(0);
  const [syncMsg, setSyncMsg] = useState("");
  const steps = [
    {
      label: LABELS[lang].crop,
      options: [
        { value: "Rice", icon: "🌾", label: LABELS[lang].rice },
        { value: "Wheat", icon: "🌾", label: LABELS[lang].wheat },
      ],
      setter: setCrop,
    },
    {
      label: LABELS[lang].issue,
      options: [
        {
          value: "Yellow Leaves",
          icon: "🍂",
          label: LABELS[lang].yellowLeaves,
        },
        { value: "Brown Spots", icon: "🟤", label: LABELS[lang].brownSpots },
      ],
      setter: setIssue,
    },
    {
      label: LABELS[lang].soil,
      options: [
        { value: "Wet", icon: "💧", label: LABELS[lang].wet },
        { value: "Dry", icon: "🌵", label: LABELS[lang].dry },
      ],
      setter: setSoil,
    },
    {
      label: LABELS[lang].stage,
      options: [
        { value: "Growing", icon: "🌱", label: LABELS[lang].growing },
        { value: "Early", icon: "🌿", label: LABELS[lang].early },
      ],
      setter: setStage,
    },
  ];

  const resetAll = () => {
    setCrop("");
    setIssue("");
    setSoil("");
    setStage("");
    setAdvice("");
    setStep(0);
    setSyncMsg("");
  };

  const handleTap = (stepIdx, value) => {
    steps[stepIdx].setter(value);
    if (stepIdx < steps.length - 1) setStep(stepIdx + 1);
  };

  const showAdvice = () => {
    getAdvice();
    setStep(steps.length);
  };

  const syncDataWithMsg = async () => {
    setSyncMsg("Syncing...");
    try {
      await syncData();
      setSyncMsg("Synced!");
      setTimeout(() => setSyncMsg(""), 1500);
    } catch {
      setSyncMsg("Sync failed");
      setTimeout(() => setSyncMsg(""), 2000);
    }
  };

  return (
    <div className="advisory-app">
      <div
        style={{
          display: "flex",
          gap: 8,
          justifyContent: "flex-end",
          marginBottom: 8,
        }}
      >
        {LANGS.map((l) => (
          <button
            key={l.code}
            onClick={() => setLang(l.code)}
            style={{
              fontWeight: lang === l.code ? "bold" : "normal",
              borderBottom: lang === l.code ? "2px solid #4caf50" : "none",
              background: "none",
              color: "#fff",
              fontSize: "1em",
              cursor: "pointer",
            }}
          >
            {l.label}
          </button>
        ))}
      </div>
      <h1 className="main-title">🌾 {LABELS[lang].advisory}</h1>
      <div className="stepper">
        {steps.map((s, idx) => (
          <div
            key={s.label}
            className={`step-card${step === idx ? " active" : step > idx ? " done" : ""}`}
            style={{ display: step === idx ? "block" : "none" }}
          >
            <div className="step-label">{s.label}</div>
            <div className="step-options">
              {s.options.map((opt) => (
                <button
                  key={opt.value}
                  className="step-btn"
                  onClick={() => handleTap(idx, opt.value)}
                  aria-label={opt.value}
                >
                  <span className="step-icon">{opt.icon}</span>
                  <span className="step-text">{opt.label}</span>
                </button>
              ))}
            </div>
          </div>
        ))}
        {step === steps.length && (
          <div className="advice-card">
            <div className="advice-icon">💡</div>
            <div className="advice-text">{advice}</div>
            <button className="step-btn" onClick={resetAll}>
              🔄 {LABELS[lang].reset}
            </button>
          </div>
        )}
      </div>
      {step === steps.length - 1 && (
        <button className="main-action" onClick={showAdvice}>
          {LABELS[lang].getAdvice}
        </button>
      )}
      <button className="main-action sync-btn" onClick={syncDataWithMsg}>
        🔄 {LABELS[lang].sync}
      </button>
      {syncMsg && <div className="sync-msg">{syncMsg}</div>}
    </div>
  );
}
