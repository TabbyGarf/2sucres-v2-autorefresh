# Auto-refresh pour 2Sucres

Ré-écriture du userscript de [4Sucres](https://github.com/sucresware/2sucres-auto-refresh)

L'auto-refresh permet de charger automatiquement les nouveaux messages que des membres postent sur la page d'accueil et sur un topic, sans avoir à recharger la page.

# Installation

## Étape 1

Ajoutez l'extension [TamperMonkey](https://tampermonkey.com/) à votre navigateur. Cette extension permet d'exécuter des scripts Javascript personnalisés.

| Navigateur | Extension |
| ---------- | ---- |
| Chromium | [Lien](https://chrome.google.com/webstore/detail/tampermonkey/dhdgffkkebhmkfjojejmpbldmpobfkfo)
| Mozilla Firefox | [Lien](https://addons.mozilla.org/fr/firefox/addon/greasemonkey/)
| Opera | [Lien](https://addons.opera.com/fr/extensions/details/tampermonkey-beta/)
| Safari | [Lien](https://safari-extensions.apple.com/details/?id=net.tampermonkey.safari-G3XV72R5TC)

## Étape 2

Ajoutez le script à votre navigateur. Le script est téléchargeable [ici](https://github.com/TabbyGarf/2sucres-v2-autorefresh/raw/main/autorefreshV2.user.js).

Vous pouvez aussi installer le script en cliquant sur l'icône TamperMonkey dans votre navigateur, puis en sélectionnant **Create a new script...**. Copiez le contenu du script dans la page qui vient de s'ouvrir et enregistrez-le.

Pour en savoir plus, vous pouvez vous renseigner dans la [FÀQ de TamperMonkey](https://www.tampermonkey.net/faq.php#Q102).

# Paramétrage

L'intervalle de rechargement est réglé par défaut à 10000ms. (10s) Si besoin, pour voir apparaître encore plus rapidement les topics, vous pouvez directement la modifier dans le script, ligne 21 :

```js
// autorefreshV2.user.js#L21

const timeInterval = 10000;
