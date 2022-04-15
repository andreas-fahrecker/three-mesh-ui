(()=>{"use strict";var e,t={"./examples/tut__preloaded_font.js":(e,t,n)=>{var o=n("./node_modules/three/build/three.module.js"),r=n("./node_modules/three/examples/jsm/webxr/VRButton.js"),i=n("./node_modules/three/examples/jsm/controls/OrbitControls.js"),d=n("./node_modules/three/examples/jsm/geometries/BoxLineGeometry.js"),a=n("./node_modules/three/src/loaders/TextureLoader.js"),s=n("./src/three-mesh-ui.js"),l=n("./examples/assets/Roboto-msdf.json");const u=n.p+"5a41f46a5020bc8f41ff554d0d890ad3.png",c=window.innerWidth,p=window.innerHeight;let f,h,w,m;const b="Roboto";function _(){s.ZP.update(),m.update(),w.render(f,h)}window.addEventListener("load",(function(){(new a.d).load(u,(e=>{s.ZP.FontLibrary.addFont(b,l,e),function(){f=new o.xsS,f.background=new o.Ilk(5263440),h=new o.cPb(60,c/p,.1,100),w=new o.CP7({antialias:!0}),w.setPixelRatio(window.devicePixelRatio),w.setSize(c,p),w.xr.enabled=!0,document.body.appendChild(r.N.createButton(w)),document.body.appendChild(w.domElement),m=new i.z(h,w.domElement),h.position.set(0,1.6,0),m.target=new o.Pa4(0,1,-1.8),m.update();const e=new o.ejS(new d.d(6,6,6,10,10,10).translate(0,3,0),new o.nls({color:8421504}));f.add(e),function(){const e=new s.ZP.Block({width:1.2,height:.5,padding:.05,justifyContent:"center",textAlign:"left",fontFamily:b,fontTexture:b});e.position.set(0,1,-1.8),e.rotation.x=-.55,f.add(e),e.add(new s.ZP.Text({content:"This example shows how to use pre-loaded font files",fontSize:.08}),new s.ZP.Text({content:"\nYou can preload font or font and texture, and add it to FontLibrary !",fontSize:.05}),new s.ZP.Text({content:"\nAfter that, all added text of this font will be displayed with no loading delays !",fontSize:.05}))}(),w.setAnimationLoop(_)}()}))})),window.addEventListener("resize",(function(){h.aspect=window.innerWidth/window.innerHeight,h.updateProjectionMatrix(),w.setSize(window.innerWidth,window.innerHeight)}))}},n={};function o(e){var r=n[e];if(void 0!==r)return r.exports;var i=n[e]={exports:{}};return t[e](i,i.exports,o),i.exports}o.m=t,e=[],o.O=(t,n,r,i)=>{if(!n){var d=1/0;for(u=0;u<e.length;u++){for(var[n,r,i]=e[u],a=!0,s=0;s<n.length;s++)(!1&i||d>=i)&&Object.keys(o.O).every((e=>o.O[e](n[s])))?n.splice(s--,1):(a=!1,i<d&&(d=i));if(a){e.splice(u--,1);var l=r();void 0!==l&&(t=l)}}return t}i=i||0;for(var u=e.length;u>0&&e[u-1][2]>i;u--)e[u]=e[u-1];e[u]=[n,r,i]},o.d=(e,t)=>{for(var n in t)o.o(t,n)&&!o.o(e,n)&&Object.defineProperty(e,n,{enumerable:!0,get:t[n]})},o.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),o.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),o.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},o.j="tut__preloaded_font",(()=>{var e;o.g.importScripts&&(e=o.g.location+"");var t=o.g.document;if(!e&&t&&(t.currentScript&&(e=t.currentScript.src),!e)){var n=t.getElementsByTagName("script");n.length&&(e=n[n.length-1].src)}if(!e)throw new Error("Automatic publicPath is not supported in this browser");e=e.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),o.p=e})(),(()=>{var e={tut__preloaded_font:0};o.O.j=t=>0===e[t];var t=(t,n)=>{var r,i,[d,a,s]=n,l=0;if(d.some((t=>0!==e[t]))){for(r in a)o.o(a,r)&&(o.m[r]=a[r]);if(s)var u=s(o)}for(t&&t(n);l<d.length;l++)i=d[l],o.o(e,i)&&e[i]&&e[i][0](),e[i]=0;return o.O(u)},n=self.webpackChunkthree_mesh_ui=self.webpackChunkthree_mesh_ui||[];n.forEach(t.bind(null,0)),n.push=t.bind(null,n.push.bind(n))})();var r=o.O(void 0,["_imported-examples-assets__chunk","_three-mesh-ui__chunk","_vendors__chunk"],(()=>o("./examples/tut__preloaded_font.js")));r=o.O(r)})();