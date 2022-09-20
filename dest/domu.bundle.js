!function(e,n){"object"==typeof exports&&"undefined"!=typeof module?module.exports=n():"function"==typeof define&&define.amd?define(n):(e="undefined"!=typeof globalThis?globalThis:e||self).domu=n()}(this,(function(){"use strict";function e(e,n,t){const o=document.createElement(e);if(t)for(const e in t)o.setAttribute(e,t[e]);return n&&(o.innerHTML=n),o}function n({node:n,content:t,params:o,...i}){const c=e(n,t,o);return function n(t,o){if(!o)return;const i=t;o.map((t=>{const{node:o,content:c,params:r,child:s}=t,f=e(o,c,r);s&&n(f,s),i.appendChild(f)}))}(c,i.child),c}function t(e,n){e.appendChild(n)}function o(e){e.remove()}
/*!
  * domujs -  v0.1.0
  * Copyright 2022 © Karasu themes
  * Developed by Marcelo (github.com/MarceloTLD)
  * MIT License (//github.com/Karasu-themes/domu/blob/master/LICENSE)
  */return class{constructor(){this.create=e,this.createTree=n,this.insert=t,this.remove=o}}}));
