import GlobalStore from "@/stores/store";
import $ from "jquery";

// Prendo il testo tradotto
export const getTranslation = (key) => {
    return GlobalStore.translations[GlobalStore.currentLanguage][key] || key;
}

// Imposto la lingua dell'applicazione in base alla lingua del browser
export const setAppLanguage = () => {
    let userLanguage = navigator.language || navigator.userLanguage;
    userLanguage = userLanguage.split("-")[0];
    let exist = GlobalStore.availableLanguages.find(x => x.code === userLanguage);
    GlobalStore.currentLanguage = exist ? userLanguage : "en";
}

// Formatto la lista degli esclusi
export const formatListEsclusi = (list) => {
    if (!list) return getTranslation("lbl.no.one"); // Se vuota esco
    let esclusi = list.filter(item => item.escluso).map(item => item.nome);
    return esclusi.length > 0 ? esclusi.join(", ") : getTranslation("lbl.no.one");
}

// Azione sul modal
export const actionModal = (id, action) => {
    const button = $("<button>", { // Creazione del pulsante
        style: "display: none",
        class: action === "open" ? "open-modal" : "close-modal",
        "data-modal-target": `.${id}`
    });

    // Aggiungo il pulsante al body e lo triggero
    $("body").append(button);
    button.trigger("click");
    button.remove();
}

// Setto il busy
export const busy = (busy) => {
    if (busy)
        $("#fullScreenBusy").fadeIn(150);
    else
        $("#fullScreenBusy").fadeOut(150);
}

// Salvo la lista degli utenti nei cookie
export const setListOnCookies = () => {
    let objectString = JSON.stringify(GlobalStore.elencoPartecipanti);
    document.cookie = "secretSantaParticipantsList=" + objectString + ";path=/";
}

// Prendo la lista dai cookie
export const getListFromCookie = () => {
    const myCookie = document.cookie?.split("; ")?.find(row => row.startsWith("secretSantaParticipantsList="))?.split("=")[1];
    GlobalStore.elencoPartecipanti = myCookie ? JSON.parse(decodeURIComponent(myCookie)) : [];
}

// Elimino i cookie
export const deleteCookies = () => {
    document.cookie = "secretSantaParticipantsList=; expires=Thu, 01 Jan 1970 00:00:00 GMT; path=/";
}

// Prendo l'URL per il backend
export const getBaseApiUrl = () => {
    return process.env.NODE_ENV === "development" ? "http://localhost/santa/public" : "/santa";
}