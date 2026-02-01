import i18n from '../i18n';

// Try to play pre-generated audio from /tts/{lang}/{key}.mp3
// Fallback to Web Speech API if audio not available
export async function playTextKey(key) {
  const lang = i18n.language || 'en';
  const url = `/tts/${lang}/${key}.mp3`;
  try {
    // Check if file exists
    const res = await fetch(url, { method: 'HEAD' });
    if (res.ok) {
      const audio = new Audio(url);
      await audio.play();
      return;
    }
  } catch {
    // ignore
  }

  // Fallback to speechSynthesis
  const text = i18n.t(key);
  const utter = new SpeechSynthesisUtterance(text);
  utter.lang = lang;
  window.speechSynthesis.speak(utter);
}

export default playTextKey;