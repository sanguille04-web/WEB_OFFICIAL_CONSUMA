
const PROMOS=[{"id":"promo1","n":1,"name":"2 muzzas a la piedra","price":24000,"img":"./assets/generated/2c86e5406bf83c5c.webp"},{"id":"promo2","n":2,"name":"1 muzza + 1 especial","price":27000,"img":"./assets/generated/b0242a8e465fbcfb.webp"},{"id":"promo3","n":3,"name":"1 muzza + 1 docena de empanadas","price":26000,"img":"./assets/generated/72d4083d7a3ecb24.webp"},{"id":"promo4","n":4,"name":"4 hamburguesas clásicas","price":25000,"img":"./assets/generated/586db5d2a0266ca4.webp"},{"id":"promo5","n":5,"name":"2 lomos completos","price":30000,"img":"./assets/generated/fa49ae670f632e45.webp"},{"id":"promo6","n":6,"name":"2 bondiolas","price":20000,"img":"./assets/generated/1e5d7e41cda95910.webp"},{"id":"promo7","n":7,"name":"2 hamburguesas XL con fritas","price":20000,"img":"./assets/generated/342abe21e4e319b4.webp"},{"id":"promo8","n":8,"name":"2 muzzarellas al molde","price":20000,"img":"./assets/generated/a64437401731e458.webp"}];
const PRODUCTS=[{"cat":"Pizzas","name":"Pizza al molde · Muzzarella","desc":"","price":12000},{"cat":"Pizzas","name":"Pizza Muzzarella","desc":"A la piedra","price":14000},{"cat":"Pizzas","name":"Pizza doble muzzarella","desc":"A la piedra","price":16000},{"cat":"Pizzas","name":"Pizza napolitana","desc":"A la piedra","price":16000},{"cat":"Pizzas","name":"Pizza especial","desc":"Jamón cocido y morrones rojos · A la piedra","price":17000},{"cat":"Pizzas","name":"Pizza huevo y morrón","desc":"A la piedra","price":16000},{"cat":"Pizzas","name":"Pizza especial huevo y morrón","desc":"A la piedra","price":18000},{"cat":"Pizzas","name":"Pizza 4 quesos","desc":"Queso tybo, roquefort, muzzarella y parmesano · A la piedra","price":18000},{"cat":"Pizzas","name":"Pizza calabresa","desc":"A la piedra","price":16000},{"cat":"Pizzas","name":"Pizza jamón crudo y rúcula","desc":"Jamón crudo, rúcula y parmesano · A la piedra","price":19000},{"cat":"Pizzas","name":"Pizza fugazza","desc":"A la piedra","price":16000},{"cat":"Pizzas","name":"Pizza hawaiana","desc":"Jamón y ananá · A la piedra","price":18000},{"cat":"Pizzas","name":"Pizza de palmitos","desc":"Palmitos y salsa golf · A la piedra","price":18000},{"cat":"Pizzas","name":"Pizza de champiñones","desc":"A la piedra","price":19000},{"cat":"Pizzas","name":"Pizza mediterránea","desc":"Mozzarella, tomates secos, albahaca, ajo y aceitunas negras","price":19000},{"cat":"Pizzas","name":"Pizza brava","desc":"Mozzarella, jalapeño y salsa picante","price":18000},{"cat":"Pizzas","name":"Pizza roquefort con nuez","desc":"Mozzarella, roquefort y nueces","price":18000},{"cat":"Pizzas","name":"Pizza Consuma","desc":"Papas fritas, cheddar, bacon y huevo","price":22000},{"cat":"Papas","name":"Papas individual","desc":"","price":4000},{"cat":"Papas","name":"Papas porción chica","desc":"","price":6000},{"cat":"Papas","name":"Papas porción grande","desc":"","price":9000},{"cat":"Papas","name":"Papas porción chica cheddar y bacon","desc":"","price":9000},{"cat":"Papas","name":"Papas porción grande cheddar & bacon","desc":"","price":14000},{"cat":"Empanadas","name":"Carne · Docena","desc":"12 unidades","price":16000},{"cat":"Empanadas","name":"Carne · Media docena","desc":"6 unidades","price":8000},{"cat":"Empanadas","name":"Carne · Unidad","desc":"1 unidad","price":1500},{"cat":"Empanadas","name":"Jamón y queso · Docena","desc":"12 unidades","price":16000},{"cat":"Empanadas","name":"Jamón y queso · Media docena","desc":"6 unidades","price":8000},{"cat":"Empanadas","name":"Jamón y queso · Unidad","desc":"1 unidad","price":1500},{"cat":"Empanadas","name":"Árabes · Docena","desc":"12 unidades","price":16000},{"cat":"Empanadas","name":"Árabes · Media docena","desc":"6 unidades","price":8000},{"cat":"Empanadas","name":"Árabes · Unidad","desc":"1 unidad","price":1500},{"cat":"Hamburguesas","name":"Consuma clásica","desc":"Medallón de carne, lechuga, tomate, paleta jamonada y huevo","price":8000},{"cat":"Hamburguesas","name":"Consuma clásica XL","desc":"Medallón de carne, lechuga, tomate, paleta jamonada y huevo","price":12000},{"cat":"Hamburguesas","name":"Consuma doble cheddar & bacon","desc":"Medallón de carne, cheddar y bacon","price":12000},{"cat":"Hamburguesas","name":"Consuma doble cheddar & bacon XL","desc":"Medallón de carne, cheddar y bacon","price":15000},{"cat":"Hamburguesas","name":"Cheese Burger","desc":"Medallón de carne, muzzarella, queso tybo, cheddar y huevo","price":12000},{"cat":"Hamburguesas","name":"Simple cheddar","desc":"Medallón y una feta de queso cheddar","price":6000},{"cat":"Hamburguesas","name":"Hamburguesa gigante","desc":"Rinde 8 porciones","price":28000},{"cat":"Hamburguesas","name":"Pizza Burger","desc":"Rinde 8 porciones","price":34000},{"cat":"Lomos","name":"Lomo completo","desc":"","price":16000},{"cat":"Lomos","name":"Lomo completo XL","desc":"","price":22000},{"cat":"Lomos","name":"Lomo completo XL a la pizza","desc":"","price":25000},{"cat":"Lomos","name":"Lomo gigante","desc":"Rinde 8 porciones","price":38000},{"cat":"Lomos","name":"Pizza lomo","desc":"Rinde 8 porciones","price":42000},{"cat":"Focaccia y pan","name":"Focaccia vegetariana","desc":"","price":8000},{"cat":"Focaccia y pan","name":"Focaccia jamón y queso","desc":"","price":8000},{"cat":"Focaccia y pan","name":"Focaccia salame y queso","desc":"","price":8000},{"cat":"Focaccia y pan","name":"Pan casero","desc":"","price":3000},{"cat":"Milanesas","name":"Milanesa de carne a la napolitana + fritas","desc":"","price":14000},{"cat":"Milanesas","name":"Milanesa de pollo a la napolitana + fritas","desc":"","price":12000},{"cat":"Sándwiches","name":"SW de bondiola mechada + fritas","desc":"","price":12000},{"cat":"Sándwiches","name":"SW de matambre de cerdo + fritas","desc":"","price":13000},{"cat":"Sándwiches","name":"SW de carne mechada + fritas","desc":"","price":14000},{"cat":"Sándwiches","name":"SW de pollo mechado + fritas","desc":"","price":11000},{"cat":"Sándwiches","name":"SW Mila pollo + fritas","desc":"","price":12000},{"cat":"Sándwiches","name":"SW Mila carne + fritas","desc":"","price":14000},];
const CATS=["Promos", "Pizzas", "Papas", "Milanesas", "Empanadas", "Hamburguesas", "Lomos", "Focaccia y pan", "Sándwiches"];
let active="Promos", cart=[];
try{const stored=JSON.parse(localStorage.getItem("consumaCart")||"[]");cart=Array.isArray(stored)?stored:[]}catch(e){cart=[];try{localStorage.removeItem("consumaCart")}catch(_){}}
const SAUCES=["Mayonesa","Salsa golf","Ketchup","Mostaza","Picante","Sin aderezo"];
let deliveryMode="delivery",shippingCost=1500,shippingZone="Dentro de las 4 avenidas",gpsLink="";
let pending=null;
const money=n=>"$"+Number(n||0).toLocaleString("es-AR");
function nav(){
 const el=document.getElementById("nav");
 if(!el)return;
 el.innerHTML=CATS.map(c=>`<button type="button" data-cat="${c}" class="${c===active?'active':''}" onclick="selectCategory('${c.replaceAll("'","\\'")}')">${c}</button>`).join("");
}
function slug(x){return x.normalize("NFD").replace(/[\u0300-\u036f]/g,"").replace(/[^a-zA-Z0-9]+/g,"-").toLowerCase();}
function selectCategory(cat){
 active=cat;
 const search=document.getElementById("search"); if(search)search.value="";
 nav();render();
 const content=document.getElementById("content"); if(content)content.scrollIntoView({behavior:"smooth",block:"start"});
}
function scrollToCat(cat){selectCategory(cat)}

function halfPrice(price){return Math.round(price/2)+(price>=19000?2000:1000)}
function addHalfPizza(name,price){
 const hp=halfPrice(price);
 cart.push({name:"½ "+name,price:hp,mods:["Media pizza"],qty:1});
 saveCart();
}

function add(name,price,cat=""){
 const customizable=["Hamburguesas","Lomos","Sándwiches"].includes(cat);
 if(customizable){openModifier(name,price,cat);return}
 cart.push({name,price,mods:[],qty:1});saveCart();
}
function saveCart(){try{localStorage.setItem("consumaCart",JSON.stringify(cart))}catch(e){}count()}
function extraMedallonPrice(name,cat){
 if(cat!=="Hamburguesas")return 0;
 const n=name.toLowerCase();
 if(n.includes("gigante")||n.includes("pizza burger")||n.includes("xl"))return 2500;
 return 2000;
}
function openModifier(name,price,cat){
 pending={name,price,cat};
 const title=document.getElementById("modTitle"),grid=document.getElementById("sauceGrid"),modal=document.getElementById("modifierModal");
 if(!title||!grid||!modal){cart.push({name,price,mods:[],qty:1});saveCart();return;}
 title.textContent=name;
 let html=SAUCES.map(x=>`<label class="sauceOpt"><input type="checkbox" value="${x}"><span>${x}</span></label>`).join("");
 const extraPrice=extraMedallonPrice(name,cat);
 if(extraPrice)html+=`<label class="sauceOpt extraMed"><input type="checkbox" id="extraMedallon" value="Medallón extra"><span>Agregar 1 medallón <b>+${money(extraPrice)}</b></span></label>`;
 grid.innerHTML=html;
 grid.querySelectorAll('input[type="checkbox"]').forEach(el=>el.addEventListener("change",function(){
   const all=[...grid.querySelectorAll('input[type="checkbox"]')];
   if(this.value==="Sin aderezo"&&this.checked)all.forEach(x=>{if(x!==this&&x.id!=="extraMedallon")x.checked=false});
   else if(this.checked&&this.id!=="extraMedallon"){const none=all.find(x=>x.value==="Sin aderezo");if(none)none.checked=false;}
 }));
 modal.classList.add("open");
 modal.setAttribute("aria-hidden","false");
 document.body.classList.add("modal-open");
}

function closeModifier(){const modal=document.getElementById("modifierModal");if(modal){modal.classList.remove("open");modal.setAttribute("aria-hidden","true")}document.body.classList.remove("modal-open");pending=null}
function confirmModifier(){
 if(!pending)return;
 const grid=document.getElementById("sauceGrid");
 const checked=grid?[...grid.querySelectorAll('input[type="checkbox"]:checked')]:[];
 const extra=checked.some(x=>x.id==="extraMedallon");
 let mods=checked.filter(x=>x.id!=="extraMedallon").map(x=>x.value);
 const extraPrice=extra?extraMedallonPrice(pending.name,pending.cat):0;
 if(extraPrice)mods.push(`+1 medallón (${money(extraPrice)})`);
 cart.push({name:pending.name,price:pending.price+extraPrice,mods,qty:1});saveCart();closeModifier();
}
function count(){document.getElementById("count").textContent=cart.length}
function render(){
 const search=document.getElementById("search");
 const q=(search?search.value:"").toLowerCase().trim();
 let blocks=[];
 const pp=active==="Promos"?PROMOS.filter(x=>x.name.toLowerCase().includes(q)):[];
 if(pp.length){
   blocks.push(`<section id="sec-${slug("Promos")}" class="menuSection"><h2>Promos 1 a 8</h2><div class="goldline"></div><div class="grid">${pp.map(x=>`<article class="card promo"><div class="pbg promo-bg-${x.n}" style="background-image:url('${x.img}')"></div><div class="pcontent"><span class="pill">Promo ${x.n}</span><h3>${x.name}</h3><div class="row"><span class="price">${money(x.price)}</span><button type="button" class="add js-add" data-kind="promo" data-id="${x.id}" aria-label="Agregar ${x.name} al pedido">+</button></div></div></article>`).join("")}</div></section>`);
 }
 for(const cat of CATS.filter(c=>c!=="Promos" && (active===c || (q && active==="Promos")))){
   let a=PRODUCTS.map((x,i)=>({...x,_idx:i})).filter(x=>x.cat===cat && (x.name+" "+x.desc).toLowerCase().includes(q));
   a.sort((a,b)=>(a.price===null)-(b.price===null));
   if(!a.length)continue;
   blocks.push(`<section id="sec-${slug(cat)}" class="menuSection"><h2>${cat}</h2><div class="goldline"></div><div class="grid">${a.map(x=>`<article class="card product"><h3>${x.name}</h3><div class="desc">${x.desc||""}</div><div class="row">${x.price!==null?`<span class="price">${money(x.price)}</span>${x.cat==="Pizzas"&&x.name!=="Pizza al molde · Muzzarella"?`<button type="button" class="halfBtn js-half" data-index="${x._idx}">½ · ${money(halfPrice(x.price))}</button>`:""}<button type="button" class="add js-add" data-kind="product" data-index="${x._idx}" aria-label="Agregar ${x.name} al pedido">+</button>`:`<span class="soon">PRÓXIMAMENTE</span>`}</div></article>`).join("")}</div></section>`);
 }
 const content=document.getElementById("content");
 if(content)content.innerHTML=blocks.join("");
}

// Un único manejador delegado: evita que los botones + dependan de onclick inline.
document.addEventListener("click",function(e){
 const addBtn=e.target.closest(".js-add");
 if(addBtn){
   e.preventDefault();e.stopPropagation();
   if(addBtn.dataset.kind==="promo"){
     const x=PROMOS.find(p=>p.id===addBtn.dataset.id);
     if(x)add(x.name,x.price,"Promos");
   }else{
     const x=PRODUCTS[Number(addBtn.dataset.index)];
     if(x)add(x.name,x.price,x.cat);
   }
   return;
 }
 const halfBtn=e.target.closest(".js-half");
 if(halfBtn){
   e.preventDefault();e.stopPropagation();
   const x=PRODUCTS[Number(halfBtn.dataset.index)];
   if(x)addHalfPizza(x.name,x.price);
 }
});
function openCart(){document.getElementById("modal").classList.add("open");renderCart()}
function closeCart(){document.getElementById("modal").classList.remove("open")}
function changeQty(i,delta){
 if(!cart[i])return;
 cart[i].qty=(cart[i].qty||1)+delta;
 if(cart[i].qty<=0)cart.splice(i,1);
 saveCart();renderCart();
}
function cartTotal(){return cart.reduce((sum,x)=>sum+(x.price||0)*(x.qty||1),0)}
function renderCart(){
 const el=document.getElementById("cartItems");
 if(!cart.length){el.innerHTML="<p>Tu pedido está vacío.</p>";updateOrderTotals();return}
 el.innerHTML=cart.map((x,i)=>`<div class="ci">
 <div style="flex:1"><b>${x.name}</b>${x.mods&&x.mods.length?`<small>${x.mods.join(" · ")}</small>`:""}</div>
 <div class="qtyCtl"><button onclick="changeQty(${i},-1)">−</button><strong>${x.qty||1}</strong><button onclick="changeQty(${i},1)">+</button></div>
 <span>${money((x.price||0)*(x.qty||1))}</span>
 <button class="remove" onclick="cart.splice(${i},1);saveCart();renderCart()">Quitar</button>
 </div>`).join("");
 updateOrderTotals();
}
function setDeliveryMode(mode){
 deliveryMode=mode;
 document.getElementById("btnDelivery").classList.toggle("active",mode==="delivery");
 document.getElementById("btnPickup").classList.toggle("active",mode==="pickup");
 document.getElementById("deliveryFields").classList.toggle("hidden",mode==="pickup");
 updateOrderTotals();
}
function selectZone(btn,name,cost){
 shippingZone=name;shippingCost=cost;
 document.querySelectorAll(".zoneBtn").forEach(x=>x.classList.remove("active"));btn.classList.add("active");
 document.getElementById("shippingText").textContent=cost==null?"A confirmar":money(cost);
 updateOrderTotals();
}
function toggleChange(){document.getElementById("changeField").classList.toggle("hidden",document.getElementById("payment").value!=="Efectivo")}
function updateOrderTotals(){
 const subtotal=cartTotal(),ship=deliveryMode==="delivery"&&shippingCost!=null?shippingCost:0;
 const a=document.getElementById("orderSubtotal"),b=document.getElementById("grandTotal");
 if(a)a.textContent=money(subtotal);if(b)b.textContent=money(subtotal+ship);
}
function shareGPS(){
 const st=document.getElementById("gpsStatus");
 if(!window.isSecureContext){st.textContent="Para compartir ubicación abrí la página publicada con HTTPS.";return}
 if(!navigator.geolocation){st.textContent="Tu navegador no permite compartir ubicación.";return}
 st.textContent="Buscando ubicación…";
 navigator.geolocation.getCurrentPosition(pos=>{
  const lat=pos.coords.latitude.toFixed(6),lon=pos.coords.longitude.toFixed(6);
  gpsLink=`https://maps.google.com/?q=${lat},${lon}`;
  st.innerHTML=`✓ Ubicación lista · <a href="${gpsLink}" target="_blank">ver mapa</a>`;
 },err=>{st.textContent=err.code===1?"Permiso rechazado. Escribí dirección y referencia.":"No pudimos obtener la ubicación.";},{enableHighAccuracy:true,timeout:12000,maximumAge:60000});
}
function sendWA(){
 const err=document.getElementById("formError");err.classList.remove("show");err.textContent="";
 if(!cart.length){err.textContent="Agregá al menos un producto.";err.classList.add("show");return}
 const name=document.getElementById("customerName").value.trim(),phone=document.getElementById("customerPhone").value.trim(),address=document.getElementById("customerAddress").value.trim(),barrio=document.getElementById("customerBarrio").value.trim(),ref=document.getElementById("customerRef").value.trim(),payment=document.getElementById("payment").value,change=document.getElementById("changeFor").value.trim(),note=document.getElementById("orderNote").value.trim();
 const errors=[];if(!name)errors.push("Ingresá tu nombre.");if(!phone)errors.push("Ingresá un teléfono.");if(deliveryMode==="delivery"&&!address)errors.push("Ingresá la dirección de entrega.");if(!payment)errors.push("Elegí la forma de pago.");
 if(errors.length){err.innerHTML=errors.join("<br>");err.classList.add("show");return}
 const lines=cart.map(x=>`• ${x.qty||1} × ${x.name}${x.mods&&x.mods.length?` [${x.mods.join(", ")}]`:""} · ${money((x.price||0)*(x.qty||1))}`);
 const subtotal=cartTotal(),ship=deliveryMode==="delivery"&&shippingCost!=null?shippingCost:0;
 const parts=["🟡 *PEDIDO CONSUMA*","",...lines,"",`*Subtotal:* ${money(subtotal)}`];
 if(deliveryMode==="delivery"){parts.push(`*Envío:* ${shippingCost==null?"A confirmar":money(shippingCost)} · ${shippingZone}`,`*Total estimado:* ${money(subtotal+ship)}`)}else parts.push("*Retiro en el local*");
 parts.push("",`*Nombre:* ${name}`,`*Teléfono:* ${phone}`);
 if(deliveryMode==="delivery"){parts.push(`*Dirección:* ${address}`);if(barrio)parts.push(`*Barrio/Zona:* ${barrio}`);if(ref)parts.push(`*Referencia:* ${ref}`);if(gpsLink)parts.push(`*Ubicación:* ${gpsLink}`)}
 parts.push(`*Pago:* ${payment}${payment==="Efectivo"&&change?` · paga con ${change}`:""}`);if(note)parts.push(`*Aclaraciones:* ${note}`);
 const waUrl="https://wa.me/542664576554?text="+encodeURIComponent(parts.join("\n"));
 const waWin=window.open(waUrl,"_blank","noopener,noreferrer");
 if(!waWin){ window.location.href=waUrl; }
}
function tick(){
 const d=new Date();
 const timeEl=document.getElementById("time"),statusEl=document.getElementById("status");
 if(timeEl)timeEl.textContent=d.toLocaleTimeString("es-AR",{hour12:false});
 if(!statusEl)return;
 const day=d.getDay(),h=d.getHours(),m=d.getMinutes(),mins=h*60+m;
 // Dom–Jue 08:00–00:00; Vie–Sáb 08:00–01:00 del día siguiente.
 const openDay=mins>=480;
 const lateFromPrev=mins<60 && (day===0 || day===6); // 00:00–00:59 sábado/domingo corresponde a vie/sáb.
 const isOpen=openDay || lateFromPrev;
 statusEl.textContent=isOpen?"ABIERTO":"CERRADO";
 statusEl.dataset.state=isOpen?"open":"closed";
}
cart=cart.map(x=>({...x,qty:x.qty||1,mods:x.mods||[]}));
nav();render();count();tick();setInterval(tick,1000);
