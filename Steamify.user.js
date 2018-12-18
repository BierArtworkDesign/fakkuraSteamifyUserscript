// ==UserScript==
// @name         Steamify
// @namespace    https://github.com/fakkura/Steamify
// @version      1.0
// @description  It opens Steam related links in the Steam client.
// @author       fakkura
// @match        http://*/*
// @match        https://*/*
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    var links = document.getElementsByTagName("a");
    for(var i = 0; i < links.length; i++)
    {
        if((links[i].href.indexOf("https://steamcommunity.com/") !== -1) || (links[i].href.indexOf("http://steamcommunity.com/") !== -1) || (links[i].href.indexOf("https://store.steampowered.com/") !== -1) || (links[i].href.indexOf("http://store.steampowered.com/") !== -1))
        {
            links[i].href = "steam://openurl/" + links[i].href;
        }
    }
})();
