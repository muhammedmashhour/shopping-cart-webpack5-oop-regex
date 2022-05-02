(()=>{"use strict";const t=class{static getData(t){return JSON.parse(localStorage.getItem(t))}static setData(t,e){localStorage.setItem(t,e)}},e=document.querySelector("nav span.items-count"),r=class{items=t.getData("cartItems")??[];displayCartItems(){const t=document.querySelector(".shopping-cart-items");t.innerHTML="",this.items.forEach((e=>{t.innerHTML+=this.createCartItem(e)})),this.displayItemsCount(),document.querySelectorAll(".shopping-cart-item button").forEach((t=>{t.onclick=t=>{this.removeCartITem(t.target.dataset.productId)}}))}insertCartItem(e){let r=t.getData("cartItems")??[];r.push(e),t.setData("cartItems",JSON.stringify(r)),this.items=r,this.displayCartItems(),this.displayItemsCount()}removeCartITem(e){let r=t.getData("cartItems")??[];r=r.filter((t=>t.id!=e)),t.setData("cartItems",JSON.stringify(r)),this.items=r,this.displayCartItems(),this.displayItemsCount()}createCartItem(t){return`<div class="shopping-cart-item">\n      <img src="https://via.placeholder.com/150x200" alt="item">\n      <h1>${t.name}</h1>\n      <span>${t.price} $</span>\n      <button data-product-id="${t.id}" type="button">\n        remove\n      </button>\n    </div>`}displayItemsCount(){e.textContent=this.items.length}};var a,s=new Uint8Array(16);function n(){if(!a&&!(a="undefined"!=typeof crypto&&crypto.getRandomValues&&crypto.getRandomValues.bind(crypto)||"undefined"!=typeof msCrypto&&"function"==typeof msCrypto.getRandomValues&&msCrypto.getRandomValues.bind(msCrypto)))throw new Error("crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported");return a(s)}const o=/^(?:[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}|00000000-0000-0000-0000-000000000000)$/i,i=function(t){return"string"==typeof t&&o.test(t)};for(var m=[],c=0;c<256;++c)m.push((c+256).toString(16).substr(1));const u=function(t,e,r){var a=(t=t||{}).random||(t.rng||n)();if(a[6]=15&a[6]|64,a[8]=63&a[8]|128,e){r=r||0;for(var s=0;s<16;++s)e[r+s]=a[s];return e}return function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0,r=(m[t[e+0]]+m[t[e+1]]+m[t[e+2]]+m[t[e+3]]+"-"+m[t[e+4]]+m[t[e+5]]+"-"+m[t[e+6]]+m[t[e+7]]+"-"+m[t[e+8]]+m[t[e+9]]+"-"+m[t[e+10]]+m[t[e+11]]+m[t[e+12]]+m[t[e+13]]+m[t[e+14]]+m[t[e+15]]).toLowerCase();if(!i(r))throw TypeError("Stringified UUID is invalid");return r}(a)},l=new r,d=document.querySelector("form"),p=d.name,h=d.price;let y=new class{handleForm(){d.onsubmit=t=>{t.preventDefault();const e=/\w/gi.test(p.value),r=/^\d{1,}(.\d+)?$/gi.test(h.value);return e?(p.classList.remove("error"),r?(h.classList.remove("error"),l.insertCartItem({id:u(),name:p.value,price:h.value}),void this.clearForm()):(h.classList.add("error"),!1)):(p.classList.add("error"),!1)}}clearForm(){p.value="",h.value=""}},f=new r;y.handleForm(),f.displayCartItems()})();