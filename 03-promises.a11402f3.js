function e(e){return e&&e.__esModule?e.default:e}var o="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},t={},n={},r=o.parcelRequired7c6;null==r&&((r=function(e){if(e in t)return t[e].exports;if(e in n){var o=n[e];delete n[e];var r={id:e,exports:{}};return t[e]=r,o.call(r.exports,r,r.exports),r.exports}var i=new Error("Cannot find module '"+e+"'");throw i.code="MODULE_NOT_FOUND",i}).register=function(e,o){n[e]=o},o.parcelRequired7c6=r);var i=r("7Y9D8");const l=document.querySelector('[name="delay"]'),u=document.querySelector('[name="step"]'),d=document.querySelector('[name="amount"]');function a(e,o){return new Promise(((t,n)=>{setTimeout((()=>{Math.random()>.3?t({position:e,delay:o}):n({position:e,delay:o})}),o)}))}document.querySelector("button").addEventListener("click",(o=>{o.preventDefault();const t=Number(l.value),n=Number(u.value),r=Number(d.value);for(let o=1;o<=r;o++){a(o,t+n*(o-1)).then((({position:o,delay:t})=>{e(i).Notify.success(`✅ Fulfilled promise ${o} in ${t}ms`)})).catch((({position:o,delay:t})=>{e(i).Notify.failure(`❌ Rejected promise ${o} in ${t}ms`)}))}}));
//# sourceMappingURL=03-promises.a11402f3.js.map
