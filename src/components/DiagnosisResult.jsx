import React from "react";
import {
  ArrowLeft,
  CheckCircle2,
  ShieldCheck,
  Volume2,
  Scissors,
  SprayCan as Spray,
} from "lucide-react";

import { useState } from "react";
const DiagnosisResult = ({ crop, symptoms, onBack, onConfirm }) => {
  // Mock result mapping based on crop
  const results = {
    rice: {
      disease: "Rice Blast",
      image:
        "https://images.unsplash.com/photo-1536633310197-080f5d729863?q=80&w=800&auto=format&fit=crop",
      treatment: "Apply Organic Neem Spray",
      frequency: "Spray twice a day until clear",
      steps: [
        {
          id: 1,
          name: "SPRAY EVENLY",
          image:
            "https://images.unsplash.com/photo-1592982537447-7440770cbfc9?q=80&w=400&auto=format&fit=crop",
          icon: <Spray size={16} />,
        },
        {
          id: 2,
          name: "PRUNE LEAVES",
          image:
            "https://images.unsplash.com/photo-1558449028-b53a39d100fc?q=80&w=400&auto=format&fit=crop",
          icon: <Scissors size={16} />,
        },
      ],
    },
    wheat: {
      disease: "Powdery Mildew",
      image:
        "https://images.unsplash.com/photo-1574323347407-f5e1ad6d020b?q=80&w=800&auto=format&fit=crop",
      treatment: "Sulfur Dusting",
      frequency: "Apply weekly in dry conditions",
      steps: [
        {
          id: 1,
          name: "DUST EVENLY",
          image:
            "https://images.unsplash.com/photo-1591901140938-f9b87df8ebf2?q=80&w=400&auto=format&fit=crop",
        },
        {
          id: 2,
          name: "REMOVE DEBRIS",
          image:
            "https://images.unsplash.com/photo-1444858291040-5897ea3997e7?q=80&w=400&auto=format&fit=crop",
        },
      ],
    },
    // Fallback for others
    default: {
      disease: "General Nutrient Deficiency",
      image:
        "https://images.unsplash.com/photo-1625246333195-78d9c38ad449?q=80&w=800&auto=format&fit=crop",
      treatment: "Balanced Organic Fertilizer",
      frequency: "Apply once immediately",
      steps: [
        {
          id: 1,
          name: "MIX PROPERLY",
          image:
            "https://images.unsplash.com/photo-1628172901320-c24095493019?q=80&w=400&auto=format&fit=crop",
        },
        {
          id: 2,
          name: "WATER WELL",
          image:
            "https://images.unsplash.com/photo-1551754655-cd27e38d2076?q=80&w=400&auto=format&fit=crop",
        },
      ],
    },
  };

  const [lang, setLang] = useState("en");
  const data = results[crop.toLowerCase()] || results.default;

  // For demo: advisory_action fields for the first 5 entries from AG1_advisory_full.json
  const advisoryActions = {
    "Increase irrigation": {
      en: "Increase irrigation",
      hi: "सिंचाई बढ़ाएं",
      mr: "पाणी वाढवा",
    },
    "Improve drainage": {
      en: "Improve drainage",
      hi: "जल निकासी सुधारें",
      mr: "निचरा सुधारावा",
    },
    "No action needed": {
      en: "No action needed",
      hi: "कोई कार्रवाई आवश्यक नहीं",
      mr: "काही कृती आवश्यक नाही",
    },
    "Monitor crop condition": {
      en: "Monitor crop condition",
      hi: "फसल की स्थिति की निगरानी करें",
      mr: "पिकाची स्थिती तपासा",
    },
    "Reduce irrigation": {
      en: "Reduce irrigation",
      hi: "सिंचाई कम करें",
      mr: "पाणी कमी करा",
    },
  };

  // Example: pick an advisory_action for demo
  let advisoryText = advisoryActions[data.treatment]?.[lang] || data.treatment;

  return (
    <div className="app-container diagnosis-result-step" style={{ padding: 0 }}>
      {/* Language Selection */}
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          gap: 8,
          margin: "16px 0",
        }}
      >
        <button
          onClick={() => setLang("en")}
          style={{ fontWeight: lang === "en" ? "bold" : "normal" }}
        >
          English
        </button>
        <button
          onClick={() => setLang("hi")}
          style={{ fontWeight: lang === "hi" ? "bold" : "normal" }}
        >
          हिन्दी
        </button>
        <button
          onClick={() => setLang("mr")}
          style={{ fontWeight: lang === "mr" ? "bold" : "normal" }}
        >
          मराठी
        </button>
      </div>
      <div
        style={{
          position: "absolute",
          top: "16px",
          left: "50%",
          transform: "translateX(-50%)",
          zindex: 10,
        }}
      >
        <div
          className="offline-banner"
          style={{
            background: "#E8F5E9",
            color: "#2E7D32",
            width: "fit-content",
          }}
        >
          <ShieldCheck size={16} />
          <span>OFFLINE-READY</span>
        </div>
      </div>

      <div
        className="result-hero"
        style={{ height: "320px", position: "relative" }}
      >
        <img
          src={data.image}
          alt={data.disease}
          style={{ width: "100%", height: "100%", objectFit: "cover" }}
        />
        <button
          className="back-btn-overlay"
          onClick={onBack}
          style={{
            position: "absolute",
            top: "24px",
            left: "24px",
            background: "white",
            borderRadius: "50%",
            padding: "8px",
            border: "none",
            boxShadow: "0 4px 6px rgba(0,0,0,0.1)",
          }}
        >
          <ArrowLeft size={24} color="#1a202c" />
        </button>
      </div>

      <div
        style={{
          padding: "24px",
          position: "relative",
          marginTop: "-40px",
          background: "var(--bg-color)",
          borderTopLeftRadius: "40px",
          borderTopRightRadius: "40px",
        }}
      >
        <div
          className="result-header-card"
          style={{
            background: "white",
            padding: "24px",
            borderRadius: "24px",
            boxShadow: "0 10px 15px -3px rgba(0,0,0,0.1)",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <div>
            <span
              style={{
                fontSize: "14px",
                fontWeight: "800",
                color: "#00E676",
                letterSpacing: "1px",
              }}
            >
              DETECTED RESULT
            </span>
            <h1
              style={{
                fontSize: "32px",
                fontWeight: "900",
                color: "#1a202c",
                margin: "4px 0 0 0",
              }}
            >
              {data.disease}
            </h1>
          </div>
          <button
            style={{
              backgroundColor: "#00E676",
              border: "none",
              borderRadius: "50%",
              width: "56px",
              height: "56px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              color: "white",
              boxShadow: "0 4px 12px rgba(0,230,118,0.3)",
            }}
            onClick={() => {
              const synth = window.speechSynthesis;
              const problemText = `Detected result: ${data.disease}`;
              const solutionText = `Treatment: ${advisoryText}`;
              const fullText = `${problemText}. ${solutionText}`;
              const utter = new window.SpeechSynthesisUtterance(fullText);
              if (lang === "hi") utter.lang = "hi-IN";
              if (lang === "mr") utter.lang = "mr-IN";
              synth.cancel();
              synth.speak(utter);
            }}
          >
            <Volume2 size={24} fill="currentColor" />
          </button>
        </div>

        <div className="treatment-section" style={{ marginTop: "32px" }}>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "8px",
              marginBottom: "20px",
            }}
          >
            <div
              style={{
                background: "#00E676",
                width: "32px",
                height: "32px",
                borderRadius: "8px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <CheckCircle2 size={18} color="white" />
            </div>
            <h2
              style={{ fontSize: "24px", fontWeight: "800", color: "#1a202c" }}
            >
              Treatment
            </h2>
          </div>

          <div
            className="treatment-overview"
            style={{
              background: "white",
              padding: "24px",
              borderRadius: "24px",
              boxShadow: "0 4px 6px -1px rgba(0,0,0,0.05)",
            }}
          >
            <h3
              style={{ fontSize: "18px", fontWeight: "800", color: "#1a202c" }}
            >
              {advisoryText}
            </h3>
            <p
              style={{
                color: "#718096",
                fontWeight: "600",
                fontSize: "14px",
                marginTop: "4px",
              }}
            >
              {data.frequency}
            </p>

            <div
              className="steps-row"
              style={{ display: "flex", gap: "16px", marginTop: "20px" }}
            >
              {data.steps.map((step) => (
                <div key={step.id} style={{ flex: 1 }}>
                  <div
                    style={{
                      position: "relative",
                      height: "100px",
                      borderRadius: "16px",
                      overflow: "hidden",
                    }}
                  >
                    <img
                      src={step.image}
                      alt={step.name}
                      style={{
                        width: "100%",
                        height: "100%",
                        objectFit: "cover",
                      }}
                    />
                  </div>
                  <span
                    style={{
                      fontSize: "10px",
                      fontWeight: "800",
                      color: "#1a202c",
                      marginTop: "8px",
                      display: "block",
                    }}
                  >
                    {step.id}. {step.name}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="button-container" style={{ margin: "32px 0 16px 0" }}>
          <button className="confirm-btn primary" onClick={onConfirm}>
            <CheckCircle2 size={24} style={{ marginRight: "12px" }} />
            DONE
          </button>
        </div>
      </div>
    </div>
  );
};

export default DiagnosisResult;
