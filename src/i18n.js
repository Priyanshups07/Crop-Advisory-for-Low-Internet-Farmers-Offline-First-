import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

const resources = {
  en: {
    translation: {
      welcome: 'Welcome',
      tapCropsYouGrow: 'Tap the crops you grow',
      tapCrops: 'Tap the crops you grow',
      crops: {
        rice: 'Rice',
        wheat: 'Wheat',
        sugarcane: 'Sugarcane',
        maize: 'Maize'
      },
      symptoms: {
        brownLesions: 'Brown Lesions',
        yellowing: 'Yellowing Leaves',
        greySpots: 'Grey Spots',
        spindle: 'Spindle Shape',
        healthy: 'No Visible Symptoms',
        brownPustules: 'Reddish brown pustules',
        powdery: 'Powdery coating',
        brownPatches: 'Irregular brown patches',
        whitePowder: 'White powder spots',
        stunted: 'Stunted growth'
      },
      symptomInfo: {
        rice: {
          title: 'Rice Symptom Selection',
          subtitle: 'Select the symptoms you see',
          helpText: 'Tap the speaker for audio help'
        },
        wheat: {
          title: 'Wheat Diagnosis',
          subtitle: 'What do you see?',
          helpText: 'Select all symptoms visible on the plant.'
        }
      }
    }
  },
  hi: {
    translation: {
      welcome: 'स्वागत है',
      tapCropsYouGrow: 'आप जो फसलें उगाते हैं उन पर टैप करें',
      tapCrops: 'आप जो फसलें उगाते हैं उन पर टैप करें',
      crops: {
        rice: 'चावल',
        wheat: 'गेहूं',
        sugarcane: 'गन्ना',
        maize: 'मक्का'
      },
      symptoms: {
        brownLesions: 'भूरे धब्बे',
        yellowing: 'पीली पत्तियाँ',
        greySpots: 'धूसर धब्बे',
        spindle: 'तकुआ आकार',
        healthy: 'कोई लक्षण नहीं',
        brownPustules: 'लाल-भूरे रंग के फुंसी',
        powdery: 'पाउडर कोटिंग',
        brownPatches: 'अनियमित भूरे धब्बे',
        whitePowder: 'सफेद पाउडर धब्बे',
        stunted: 'रुकी हुई वृद्धि'
      },
      symptomInfo: {
        rice: {
          title: 'चावल लक्षण चयन',
          subtitle: 'आप जो लक्षण देखते हैं उसे चुनें',
          helpText: 'ऑडियो सहायता के लिए स्पीकर टैप करें'
        },
        wheat: {
          title: 'गेहूं निदान',
          subtitle: 'आप क्या देखते हैं?',
          helpText: 'पौधे पर दिखाई देने वाले सभी लक्षणों का चयन करें।'
        }
      }
    }
  }
};

i18n
  .use(initReactI18next)
  .init({
    resources,
    lng: 'en',
    fallbackLng: 'en',
    interpolation: {
      escapeValue: false
    }
  });

export default i18n;
