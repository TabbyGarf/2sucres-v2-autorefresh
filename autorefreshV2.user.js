// ==UserScript==
// @name         2Sucres AutoRefresh V2
// @namespace    http://tabbygarf.club
// @version      1.2
// @description  Clicks buttons with specific innerTexts every set interval (default 10s)
// @updateURL    https://github.com/TabbyGarf/2sucres-v2-autorefresh/raw/master/autorefreshV2.user.js
// @downloadURL  https://github.com/TabbyGarf/2sucres-v2-autorefresh/raw/master/autorefreshV2.user.js
// @match        https://2sucres.org/*
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    // Definition des innerText de rafraichissement
    const targetInnerText1 = "refresh";
    const targetInnerText2 = "Actualiser";

    // Mise en cache des boutons, home (accueil, mobile (topic mobile) et desktop (topic bureau))
    const homeButtons = document.querySelectorAll('button.btn.jaune.waves-effect.waves-light i.large.material-icons'); 
    const mobileButton = document.querySelector('button.btn.waves-effect.waves-light.jaune i.large.material-icons') || 
                         document.querySelector('button.btn.waves-effect.waves-light.jaune');
    const desktopButton = document.querySelector('button.btn.waves-effect.waves-light.jaune') ||
                          document.querySelector('button.btn.waves-effect.waves-ligh.jaune');

    // Intervale entre chaque auto refresh en millisecondes (defaut = 10 seconds)
    const timeInterval = 10000;

    // Recherche du bouton dans la page d'accueil.
    setInterval(function() {
        for (let i = 0; i < homeButtons.length; i++) {
            const buttonText = homeButtons[i].innerText.trim();
            if (buttonText === targetInnerText1 || buttonText === targetInnerText2) {
                homeButtons[i].parentNode.click();
            }
        }
    }, timeInterval);

    // Recherche du bouton sur le topic
    setInterval(function() {
        if (mobileButton && mobileButton.innerText.trim() === targetInnerText1) {
            mobileButton.click();
        } else if (desktopButton && desktopButton.innerText.trim() === targetInnerText2) {
            desktopButton.click();
        }
    }, timeInterval);
})();
