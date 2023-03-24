// ==UserScript==
// @name         2Sucres AutoRefresh V2
// @namespace    http://tabbygarf.club
// @version      1
// @description  Clicks buttons with specific innerTexts every set interval (default 10s)
// @updateURL    https://github.com/sucresware/2sucres-auto-refresh/raw/master/2sucres-auto-refresh.user.js
// @downloadURL  https://github.com/sucresware/2sucres-auto-refresh/raw/master/2sucres-auto-refresh.user.js
// @match        https://2sucres.org/*
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    // Definition des innerText de rafraichissement
    const targetInnerText1 = "refresh";
    const targetInnerText2 = "Actualiser";


    // Intervale entre chaque auto refresh en millisecondes (defaut = 10 seconds)
    const timeInterval = 10000;

    // Recherche du bouton dans la page d'accueil.
    setInterval(function() {
        const buttons = document.querySelectorAll('button.btn.jaune.waves-effect.waves-light i.large.material-icons');
        for (let i = 0; i < buttons.length; i++) {
            const buttonText = buttons[i].innerText.trim();
            if (buttonText === targetInnerText1 || buttonText === targetInnerText2) {
                buttons[i].parentNode.click();
            }
        }
    }, timeInterval);

    // Recherche du bouton sur le topic si vue mobile
    setInterval(function() {
        const button = document.querySelectorAll('button.btn.waves-effect.waves-ligh.jaune i.large.material-icons');
        if (button && button.innerText.trim() === targetInnerText1) {
            button.click();
        }
    }, timeInterval);

    setInterval(function() {
        const button = document.querySelectorAll('button.btn.waves-effect.waves-light.jaune i.large.material-icons');
        if (button && button.innerText.trim() === targetInnerText1) {
            button.click();
        }
    }, timeInterval);

    // Recherche du bouton sur le topic si vue large
    setInterval(function() {
        const button = document.querySelectorAll('button.btn.waves-effect.waves-ligh.jaune');
        if (button && button.innerText.trim() === targetInnerText2) {
            button.click();
        }
    }, timeInterval);

    setInterval(function() {
        const button = document.querySelectorAll('button.btn.waves-effect.waves-light.jaune');
        if (button && button.innerText.trim() === targetInnerText2) {
            button.click();
        }
    }, timeInterval);
})();
