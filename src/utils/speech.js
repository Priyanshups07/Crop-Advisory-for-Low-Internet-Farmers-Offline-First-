// Robust speech for English, Hindi, Marathi.
// Tries to choose a local voice that matches language; falls back gracefully.
const pickVoiceForLang = (lang) => {
  const voices = window.speechSynthesis.getVoices();
  const matchers = {
    en: [/en-/, /English/i],
    hi: [/hi-/, /Hindi/i],
    mr: [/mr-/, /Marathi/i],
  };
  const keys = matchers[lang] ? matchers[lang] : [];
  for (const v of voices) {
    if (keys.some((re) => re.test(v.lang) || re.test(v.name))) return v;
  }
  // fallback: default
  return voices[0] || null;
};

const speak = (text, lang = 'en') => {
  const utter = new SpeechSynthesisUtterance(text);
  utter.lang = lang;
  // Defer voice selection until voices are loaded
  const assignAndSpeak = () => {
    const v = pickVoiceForLang(lang);
    if (v) utter.voice = v;
    window.speechSynthesis.speak(utter);
  };
  if (window.speechSynthesis.getVoices().length === 0) {
    window.speechSynthesis.onvoiceschanged = assignAndSpeak;
  } else {
    assignAndSpeak();
  }
};

export default speak;