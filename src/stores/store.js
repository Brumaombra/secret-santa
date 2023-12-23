import { reactive } from 'vue';
import itTranslations from '@/translations/it.json';
import enTranslations from '@/translations/en.json';

export default reactive({
    elencoPartecipanti: [],
    currentLanguage: "it",
    availableLanguages: [{ // Lingue disponibili
        code: "it",
        name: "Italiano"
    }, {
        code: "en",
        name: "English"
    }],
    translations: { // File traduzioni
        it: itTranslations,
        en: enTranslations
    },
    successModal: { // Dialog di success
        message: "",
        list: []
    }
});