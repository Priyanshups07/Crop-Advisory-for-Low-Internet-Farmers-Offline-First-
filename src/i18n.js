import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

const resources = {
  en: {
    translation: {
      welcome: 'Welcome',
      tapCropsYouGrow: 'Tap the crops you grow',
      tapCrops: 'Tap the crops you grow',
      offlineReady: 'OFFLINE-READY',
      continue: 'Continue',
      finish: 'FINISH',
      crops: {
        rice: 'Rice',
        wheat: 'Wheat',
        sugarcane: 'Sugarcane',
        maize: 'Maize'
      },
      steps: {
        symptom: 'Symptom Selection',
        weather: 'Weather Selection',
        soil: 'Soil Type',
        moisture: 'Soil Moisture',
        growth: 'Growth Stage'
      },
      prompts: {
        tapStage: 'Tap your crop\'s current stage',
        selectSoil: 'Select your land\'s soil',
        howWet: 'How wet is the field today?',
        selectClimate: 'Select your regional climate',
        selectedSymptoms: 'Selected Symptoms',
        detected: 'Detected Result',
        treatment: 'Treatment Advice'
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
        stunted: 'Stunted growth',
        dryingCanes: 'Drying canes',
        redStreaks: 'Red streaks',
        dryingStalks: 'Drying stalks',
        blackSmut: 'Black smut',
        whiteGrowth: 'White growth',
        grayLesions: 'Gray lesions'
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
        },
        sugarcane: {
          title: 'What do you see?',
          subtitle: 'Tap all the symptoms that apply to your crop',
          helpText: ''
        },
        maize: {
          title: 'Maize Symptoms',
          subtitle: 'What do you see on your corn?',
          helpText: 'Select all that apply to your crop.'
        }
      },
      stages: {
        sprout: 'Sprout',
        grow: 'Grow',
        flower: 'Flower',
        mature: 'Mature'
      },
      soils: {
        sandy: 'Sandy',
        loam: 'Loam',
        clay: 'Clay',
        red: 'Red'
      },
      weather: {
        hotDry: 'Hot & Dry',
        hotHumid: 'Hot & Humid',
        cold: 'Cold',
        moderate: 'Moderate',
        zones: {
          yellow: 'Yellow Zone',
          red: 'Red Zone',
          blue: 'Blue Zone',
          green: 'Green Zone'
        }
      },
      moisture: {
        dry: 'Dry Soil',
        slight: 'Slightly Moist',
        optimal: 'Optimal',
        wet: 'Wet Soil'
      },
      diagnosis: {
        rice: {
          disease: 'Rice Blast',
          treatment: 'Apply Organic Neem Spray',
          frequency: 'Spray twice a day until clear',
          steps: {
            spray: 'SPRAY EVENLY',
            prune: 'PRUNE LEAVES'
          }
        },
        wheat: {
          disease: 'Leaf Rust (Wheat Rust)',
          treatment: 'Apply Targeted Fungicide or Neem Oil',
          frequency: 'Spray every 10 days for 3 weeks',
          steps: {
            spray: 'SPRAY FOLIAGE',
            remove: 'REMOVE INFECTED PLANTS'
          }
        },
        sugarcane: {
          disease: 'Red Rot',
          treatment: 'Healthy Set Selection & Soil Drainage',
          frequency: 'Action required during planting season',
          steps: {
            treat: 'TREAT SETS',
            drain: 'IMPROVE DRAINAGE'
          }
        },
        maize: {
          disease: 'Maize Rust',
          treatment: 'Mancozeb or Copper Spray',
          frequency: 'Spray immediately upon first symptom',
          steps: {
            spray: 'SPRAY FUNGICIDE',
            check: 'CHECK COBS'
          }
        },
        default: {
          disease: 'General Nutrient Deficiency',
          treatment: 'Balanced Organic Fertilizer',
          frequency: 'Apply once immediately',
          steps: {
            mix: 'MIX PROPERLY',
            water: 'WATER WELL',
            spray: 'SPRAY EVENLY',
            check: 'CHECK CONDITIONS',
            drain: 'IMPROVE DRAINAGE',
            remove: 'REMOVE DEBRIS'
          }
        }
      }
    }
  },
  hi: {
    translation: {
      welcome: 'स्वागत है',
      tapCropsYouGrow: 'आप जो फसलें उगाते हैं उन पर टैप करें',
      tapCrops: 'आप जो फसलें उगाते हैं उन पर टैप करें',
      offlineReady: 'ऑफ़लाइन के लिए तैयार',
      continue: 'आगे बढ़ें',
      finish: 'समाप्त',
      crops: {
        rice: 'चावल',
        wheat: 'गेहूं',
        sugarcane: 'गन्ना',
        maize: 'मक्का'
      },
      steps: {
        symptom: 'लक्षण चयन',
        weather: 'मौसम चयन',
        soil: 'मिट्टी का प्रकार',
        moisture: 'मिट्टी की नमी',
        growth: 'विकास चरण'
      },
      prompts: {
        tapStage: 'अपनी फसल का वर्तमान चरण चुनें',
        selectSoil: 'अपनी जमीन की मिट्टी चुनें',
        howWet: 'खेत आज कितना गीला है?',
        selectClimate: 'अपने क्षेत्रीय जलवायु का चयन करें',
        selectedSymptoms: 'चयनित लक्षण',
        detected: 'पता चला परिणाम',
        treatment: 'उपचार सलाह'
      },
      symptoms: {
        brownLesions: 'भूरे घाव',
        yellowing: 'पत्तियां पीली पड़ना',
        greySpots: 'धूसर धब्बे',
        spindle: 'स्पिंडल आकार',
        healthy: 'कोई दृश्य लक्षण नहीं',
        brownPustules: 'लाल-भूरे दाने',
        powdery: 'पाउडर जैसी परत',
        brownPatches: 'अनियमित भूरे धब्बे',
        whitePowder: 'सफेद पाउडर के धब्बे',
        stunted: 'रुका हुआ विकास',
        dryingCanes: 'सूखते गन्ने',
        redStreaks: 'लाल धारियां',
        dryingStalks: 'सूखते डंठल',
        blackSmut: 'काला कंडुआ',
        whiteGrowth: 'सफेद वृद्धि',
        grayLesions: 'धूसर घाव'
      },
      symptomInfo: {
        rice: {
          title: 'चावल लक्षण चयन',
          subtitle: 'दिखाई देने वाले लक्षण चुनें',
          helpText: 'ऑडियो सहायता के लिए स्पीकर पर टैप करें'
        },
        wheat: {
          title: 'गेहूं निदान',
          subtitle: 'आपको क्या दिखाई दे रहा है?',
          helpText: 'पौधे पर दिखाई देने वाले सभी लक्षण चुनें।'
        },
        sugarcane: {
          title: 'आपको क्या दिखाई दे रहा है?',
          subtitle: 'उन सभी लक्षणों को चुनें जो आपकी फसल पर लागू होते हैं',
          helpText: ''
        },
        maize: {
          title: 'मक्का लक्षण',
          subtitle: 'आपको अपने मक्के पर क्या दिखाई दे रहा है?',
          helpText: 'जो लागू हो उसे चुनें।'
        }
      },
      stages: {
        sprout: 'अंकुर',
        grow: 'बढ़वार',
        flower: 'फूल',
        mature: 'परिपक्व'
      },
      soils: {
        sandy: 'रेतीली',
        loam: 'दोमट',
        clay: 'चिकनी',
        red: 'लाल'
      },
      weather: {
        hotDry: 'गर्म और शुष्क',
        hotHumid: 'गर्म और आर्द्र',
        cold: 'ठंडा',
        moderate: 'मध्यम',
        zones: {
          yellow: 'पीला क्षेत्र',
          red: 'लाल क्षेत्र',
          blue: 'नीला क्षेत्र',
          green: 'हरा क्षेत्र'
        }
      },
      moisture: {
        dry: 'सूखी मिट्टी',
        slight: 'हल्की नम',
        optimal: 'अनुकूल',
        wet: 'गीली मिट्टी'
      },
      diagnosis: {
        rice: {
          disease: 'राइस ब्लास्ट',
          treatment: 'जैविक नीम स्प्रे का प्रयोग करें',
          frequency: 'साफ होने तक दिन में दो बार स्प्रे करें',
          steps: {
            spray: 'समान रूप से स्प्रे करें',
            prune: 'पत्तियां छांटें'
          }
        },
        wheat: {
          disease: 'लीफ रस्ट (गेहूं का रस्ट)',
          treatment: 'लक्षित कवकनाशी या नीम के तेल का प्रयोग करें',
          frequency: '3 सप्ताह तक हर 10 दिन में स्प्रे करें',
          steps: {
            spray: 'पत्तियों पर स्प्रे करें',
            remove: 'संक्रमित पौधों को हटा दें'
          }
        },
        sugarcane: {
          disease: 'लाल सड़न (रेड रॉट)',
          treatment: 'स्वस्थ सेट चयन और मिट्टी की जल निकासी',
          frequency: 'रोपण के मौसम के दौरान कार्रवाई आवश्यक',
          steps: {
            treat: 'सेट्स का उपचार करें',
            drain: 'निकासी सुधारें'
          }
        },
        maize: {
          disease: 'मक्का रस्ट (Maize Rust)',
          treatment: 'मैन्कोजेब या कॉपर स्प्रे',
          frequency: 'पहला लक्षण दिखने पर तुरंत स्प्रे करें',
          steps: {
            spray: 'फंगीसाइड स्प्रे करें',
            check: 'भुट्टों की जाँच करें'
          }
        },
        default: {
          disease: 'सामान्य पोषक तत्व की कमी',
          treatment: 'संतुलित जैविक खाद',
          frequency: 'तुरंत एक बार प्रयोग करें',
          steps: {
            mix: 'ठीक से मिलाएं',
            water: 'अच्छी तरह पानी दें',
            spray: 'समान रूप से स्प्रे करें',
            check: 'स्थितियों की जाँच करें',
            drain: 'जल निकासी में सुधार करें',
            remove: 'मलबे को हटाएं'
          }
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
