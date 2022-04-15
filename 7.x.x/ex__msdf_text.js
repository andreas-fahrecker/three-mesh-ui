(()=>{"use strict";var e,t={"./examples/ex__msdf_text.js":(e,t,n)=>{var o=n("./node_modules/three/build/three.module.js"),r=n("./node_modules/three/examples/jsm/webxr/VRButton.js"),i=n("./node_modules/three/examples/jsm/controls/OrbitControls.js"),s=n("./node_modules/three/examples/jsm/geometries/BoxLineGeometry.js"),d=n("./src/three-mesh-ui.js"),a=n("./examples/assets/Roboto-msdf.json");const l=n.p+"5a41f46a5020bc8f41ff554d0d890ad3.png",c=window.innerWidth,p=window.innerHeight;let u,h,m,f;function w(){d.ZP.update(),f.update(),m.render(u,h)}window.addEventListener("load",(function(){u=new o.xsS,u.background=new o.Ilk(5263440),h=new o.cPb(60,c/p,.02,100),m=new o.CP7({antialias:!0}),m.setPixelRatio(window.devicePixelRatio),m.setSize(c,p),m.xr.enabled=!0,document.body.appendChild(r.N.createButton(m)),document.body.appendChild(m.domElement),f=new i.z(h,m.domElement),h.position.set(0,1.6,0),f.target=new o.Pa4(0,1,-1.8),f.update();const e=new o.ejS(new s.d(6,6,6,10,10,10).translate(0,3,0),new o.nls({color:8421504}));u.add(e),function(){const e=new d.ZP.Block({padding:.05,textType:"MSDF",fontFamily:a,fontTexture:l,fontColor:new o.Ilk(11270079),fontOpacity:.9});e.position.set(0,1,-1.8),e.rotation.x=-.55,u.add(e);const t=new d.ZP.Block({padding:.03,margin:.03,width:1.5,height:1.2,justifyContent:"center",textAlign:"left",backgroundOpacity:0});t.add(new d.ZP.Text({content:"three-mesh-ui is very efficient when rendering big text because the glyphs are textures on simple planes geometries, all merged together. ".repeat(18),fontSize:.033}));const n=new d.ZP.Block({width:.9,height:.25,padding:.04,margin:.03,backgroundOpacity:0}).add(new d.ZP.Text({content:"Do you need to render a big text ?",fontSize:.07}));e.add(n,t)}(),m.setAnimationLoop(w)})),window.addEventListener("resize",(function(){h.aspect=window.innerWidth/window.innerHeight,h.updateProjectionMatrix(),m.setSize(window.innerWidth,window.innerHeight)}))}},n={};function o(e){var r=n[e];if(void 0!==r)return r.exports;var i=n[e]={exports:{}};return t[e](i,i.exports,o),i.exports}o.m=t,e=[],o.O=(t,n,r,i)=>{if(!n){var s=1/0;for(c=0;c<e.length;c++){for(var[n,r,i]=e[c],d=!0,a=0;a<n.length;a++)(!1&i||s>=i)&&Object.keys(o.O).every((e=>o.O[e](n[a])))?n.splice(a--,1):(d=!1,i<s&&(s=i));if(d){e.splice(c--,1);var l=r();void 0!==l&&(t=l)}}return t}i=i||0;for(var c=e.length;c>0&&e[c-1][2]>i;c--)e[c]=e[c-1];e[c]=[n,r,i]},o.d=(e,t)=>{for(var n in t)o.o(t,n)&&!o.o(e,n)&&Object.defineProperty(e,n,{enumerable:!0,get:t[n]})},o.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),o.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),o.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},o.j="ex__msdf_text",(()=>{var e;o.g.importScripts&&(e=o.g.location+"");var t=o.g.document;if(!e&&t&&(t.currentScript&&(e=t.currentScript.src),!e)){var n=t.getElementsByTagName("script");n.length&&(e=n[n.length-1].src)}if(!e)throw new Error("Automatic publicPath is not supported in this browser");e=e.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),o.p=e})(),(()=>{var e={ex__msdf_text:0};o.O.j=t=>0===e[t];var t=(t,n)=>{var r,i,[s,d,a]=n,l=0;if(s.some((t=>0!==e[t]))){for(r in d)o.o(d,r)&&(o.m[r]=d[r]);if(a)var c=a(o)}for(t&&t(n);l<s.length;l++)i=s[l],o.o(e,i)&&e[i]&&e[i][0](),e[i]=0;return o.O(c)},n=self.webpackChunkthree_mesh_ui=self.webpackChunkthree_mesh_ui||[];n.forEach(t.bind(null,0)),n.push=t.bind(null,n.push.bind(n))})();var r=o.O(void 0,["_imported-examples-assets__chunk","_three-mesh-ui__chunk","_vendors__chunk"],(()=>o("./examples/ex__msdf_text.js")));r=o.O(r)})();