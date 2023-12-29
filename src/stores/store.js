import { reactive } from 'vue';
import itTranslations from '@/translations/it.json';
import enTranslations from '@/translations/en.json';
import esTranslations from '@/translations/es.json';

export default reactive({
    elencoPartecipanti: [],
    currentLanguage: "it",
    availableLanguages: [{ // Lingue disponibili
        code: "it",
        name: "Italiano"
    }, {
        code: "en",
        name: "English"
    }, {
        code: "es",
        name: "Español"
    }],
    translations: { // File traduzioni
        it: itTranslations,
        en: enTranslations,
        es: esTranslations
    },
    successModal: { // Dialog di success
        message: "",
        list: []
    }
});