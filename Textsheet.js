// ==UserScript==
// @name         Textsheet Bypass
// @namespace    http://tampermonkey.net/
// @version      420.69
// @description  Binghamton University Sucks
// @author       Stanley The Seawolf
// @match        https://textsheet.com/*
// @grant        GM_addStyle
// ==/UserScript==

(function() {
    'use strict';

    var loaded = document.createElement('div');
    loaded.innerHTML = '<button id="myButton" type="button">Open Images!</button>';
    loaded.setAttribute ('id', 'myContainer');
    document.body.appendChild(loaded);
    document.getElementById("myButton").addEventListener ("click", doit, false);

    function doit() {
        var imageSources = document.getElementsByClassName('medium-zoom-image');
        for (var i = 0; i < imageSources.length; ++i) {
            openImage(imageSources[i].src);
        }
    }

    function openImage(item, index) {
        window.open(item, '_blank');
    }

    GM_addStyle(`
        #myContainer {
            position: fixed;
            top: 0;
            right: 0;
            font-size: 20px;
            background: orange;
            border: 3px outset black;
            margin: 5px;
            opacity: 0.9;
            z-index: 1100;
            padding: 5px 20px;
        }

        #myButton {
            cursor: pointer;
        }

        #myContainer p {
            color: red;
            background: white;
        }
    `);
})();