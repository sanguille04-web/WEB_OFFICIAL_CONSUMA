
const PROMOS=[{"id":"promo1","n":1,"name":"2 muzzas al molde","price":20000,"img":"./assets/generated/a64437401731e458.webp"},{"id":"promo2","n":2,"name":"2 muzzas a la piedra","price":24000,"img":"./assets/generated/2c86e5406bf83c5c.webp"},{"id":"promo3","n":3,"name":"1 muzza + 1 especial","price":27000,"img":"./assets/generated/b0242a8e465fbcfb.webp"},{"id":"promo4","n":4,"name":"1 muzza + 1 docena de empanadas (carne, pollo, jamón y queso o árabe)","price":27000,"img":"./assets/generated/72d4083d7a3ecb24.webp"},{"id":"promo5","n":5,"name":"4 hamburguesas completas + fritas","price":32000,"img":"./assets/generated/586db5d2a0266ca4.webp","label":"Promo 5 · Familiar"},{"id":"promo6","n":6,"name":"2 hamburguesas completas XL + fritas","price":28000,"img":"./assets/generated/342abe21e4e319b4.webp","label":"Promo 6 · XL doble"},{"id":"promo7","n":7,"name":"2 lomos completos + fritas","price":32000,"img":"./assets/generated/fa49ae670f632e45.webp"},{"id":"promo8","n":8,"name":"2 sándwiches de bondiola + fritas","price":26000,"img":"./assets/generated/1e5d7e41cda95910.webp"},{"id":"combo-consuma","n":"combo","label":"Combo del día","name":"Combo Consuma","desc":"1 Smash Consuma + fritas + gaseosa de 500 ml línea Coca-Cola","note":"Consultá combos del día","price":13000,"img":"./assets/generated/d6634bc2acb4185f.webp","fit":"contain"}];
const PRODUCTS=[{"cat":"Pizzas","name":"Pizza al molde · Muzzarella","desc":"","price":12000},{"cat":"Pizzas","name":"Pizza Muzzarella","desc":"A la piedra","price":14000},{"cat":"Pizzas","name":"Pizza napolitana","desc":"A la piedra","price":16000},{"cat":"Pizzas","name":"Pizza fugazza","desc":"A la piedra","price":16000},{"cat":"Pizzas","name":"Pizza pepperoni","desc":"A la piedra","price":17000},{"cat":"Pizzas","name":"Pizza champiñones clásica","desc":"Champiñones salteados con ajo picado y perejil · A la piedra","price":17000},{"cat":"Pizzas","name":"Pizza de palmitos","desc":"Palmitos y salsa golf · A la piedra","price":17000},{"cat":"Pizzas","name":"Pizza especial","desc":"Jamón cocido y morrones rojos · A la piedra","price":18000},{"cat":"Pizzas","name":"Pizza 4 quesos","desc":"Queso tybo, roquefort, muzzarella y parmesano · A la piedra","price":19000},{"cat":"Pizzas","name":"Pizza roquefort con nuez","desc":"Muzzarella, roquefort y nueces · A la piedra","price":19000},{"cat":"Pizzas","name":"Pizza jamón crudo y rúcula","desc":"Jamón crudo, rúcula y parmesano · A la piedra","price":20000},{"cat":"Pizzas","name":"Pizza champiñones premium","desc":"Muzzarella, champiñones, panceta crocante y parmesano rallado · A la piedra","price":20000},{"cat":"Pizzas","name":"Pizza especial huevo y morrón","desc":"A la piedra","price":19500},{"cat":"Pizzas","name":"Pizza Consuma","desc":"Jamón cocido, cebollita de verdeo, papas y huevos fritos · A la piedra","price":20000},{"cat":"Pizzas","name":"Pizza doble muzzarella","desc":"A la piedra","price":16000},{"cat":"Pizzas","name":"Pizza huevo y morrón","desc":"A la piedra","price":16000},{"cat":"Pizzas","name":"Pizza de pollo","desc":"Cebolla caramelizada, pollo y barbacoa · A la piedra","price":17000},{"cat":"Papas","name":"Papas individual","desc":"","price":4000},{"cat":"Papas","name":"Papas porción chica","desc":"","price":7500},{"cat":"Papas","name":"Papas porción grande","desc":"","price":12000},{"cat":"Papas","name":"Papas porción chica cheddar y bacon","desc":"","price":10000},{"cat":"Papas","name":"Papas porción grande cheddar & bacon","desc":"","price":15000},{"cat":"Comidas al plato","name":"Vacío al plato","desc":"Con fritas o ensalada","price":16000},{"cat":"Comidas al plato","name":"Costeleta de cerdo","desc":"Con fritas o ensalada","price":11000},{"cat":"Comidas al plato","name":"Costeleta de novillo","desc":"Con fritas o ensalada","price":13000},{"cat":"Comidas al plato","name":"Matambre de cerdo al limón","desc":"Con fritas o ensalada","price":11000},{"cat":"Comidas al plato","name":"Matambre de cerdo a la pizza","desc":"Con fritas o ensalada","price":13000},{"cat":"Comidas al plato","name":"Filet de pollo al limón","desc":"Con fritas o ensalada","price":12000},{"cat":"Comidas al plato","name":"Filet de pollo a la pizza","desc":"Con fritas o ensalada","price":14000},{"cat":"Comidas al plato","name":"Sorrentinos de jamón y muzzarella","desc":"Con salsa boloñesa, blanca o mixta","price":11000},{"cat":"Comidas al plato","name":"Sorrentinos de bondiola","desc":"Con salsa boloñesa, blanca o mixta","price":13000},{"cat":"Comidas al plato","name":"Canelones de verdura","desc":"Con salsa boloñesa, blanca o mixta","price":9000},{"cat":"Comidas al plato","name":"Milanesa de carne a la napolitana","desc":"Con fritas","price":15000},{"cat":"Comidas al plato","name":"Milanesa de pollo a la napolitana","desc":"Con fritas","price":12000},{"cat":"Empanadas","name":"Carne · Docena","desc":"12 unidades","price":17000},{"cat":"Empanadas","name":"Carne · Media docena","desc":"6 unidades","price":8500},{"cat":"Empanadas","name":"Carne · Unidad","desc":"1 unidad","price":1800},{"cat":"Empanadas","name":"Jamón y queso · Docena","desc":"12 unidades","price":17000},{"cat":"Empanadas","name":"Jamón y queso · Media docena","desc":"6 unidades","price":8500},{"cat":"Empanadas","name":"Jamón y queso · Unidad","desc":"1 unidad","price":1800},{"cat":"Empanadas","name":"Árabes · Docena","desc":"12 unidades","price":17000},{"cat":"Empanadas","name":"Árabes · Media docena","desc":"6 unidades","price":8500},{"cat":"Empanadas","name":"Árabes · Unidad","desc":"1 unidad","price":1800},{"cat":"Empanadas","name":"Pollo · Docena","desc":"12 unidades","price":17000},{"cat":"Empanadas","name":"Pollo · Media docena","desc":"6 unidades","price":8500},{"cat":"Empanadas","name":"Pollo · Unidad","desc":"1 unidad","price":1800},{"cat":"Empanadas","name":"Bondiola a la cerveza · Docena","desc":"12 unidades","price":19000},{"cat":"Empanadas","name":"Bondiola a la cerveza · Media docena","desc":"6 unidades","price":9500},{"cat":"Empanadas","name":"Bondiola a la cerveza · Unidad","desc":"1 unidad","price":2200},{"cat":"Hamburguesas","name":"Smash Consuma","desc":"Medallón de carne smash, cheddar, cebolla caramelizada y salsa burger · Incluye fritas","price":8500},{"cat":"Hamburguesas","name":"Clásica Consuma","desc":"Medallón de carne, lechuga, tomate y mayonesa · Incluye fritas","price":8500},{"cat":"Hamburguesas","name":"Completa Consuma","desc":"Medallón de carne, lechuga, tomate, jamón, huevo, muzzarella y mayonesa · Incluye fritas","price":9000},{"cat":"Hamburguesas","name":"Completa Consuma XL","desc":"Medallón de carne, lechuga, tomate, jamón, huevo, muzzarella y mayonesa · Incluye fritas","price":15000},{"cat":"Hamburguesas","name":"Doble cheddar & bacon Consuma","desc":"2 medallones de carne, doble cheddar, doble bacon y barbacoa · Incluye fritas","price":13500},{"cat":"Hamburguesas","name":"Doble cheddar & bacon Consuma XL","desc":"2 medallones de carne, doble cheddar, doble bacon y barbacoa · Incluye fritas","price":16500},{"cat":"Hamburguesas","name":"Hamburguesa gigante","desc":"Rinde 8 porciones · Incluye fritas","price":28000},{"cat":"Hamburguesas","name":"Pizza Burger","desc":"Rinde 8 porciones · Incluye fritas","price":34000,"medallonExtra":2500},{"cat":"Lomos","name":"Lomo completo","desc":"Incluye fritas","price":17000},{"cat":"Lomos","name":"Lomo completo XL","desc":"Incluye fritas","price":22000},{"cat":"Lomos","name":"Lomo completo XL a la pizza","desc":"Incluye fritas","price":24000},{"cat":"Lomos","name":"Lomo gigante","desc":"Rinde 8 porciones · Incluye fritas","price":40000},{"cat":"Lomos","name":"Pizza lomo","desc":"Rinde 8 porciones · Incluye fritas","price":44000},{"cat":"Focaccia y pan","name":"Pan casero","desc":"","price":3500},{"cat":"Focaccia y pan","name":"Focaccia jamón y queso","desc":"","price":7500},{"cat":"Focaccia y pan","name":"Focaccia salame y queso","desc":"","price":7500},{"cat":"Focaccia y pan","name":"Focaccia vegetariana","desc":"","price":8000},{"cat":"Sándwiches","name":"Sándwich de pollo mechado + fritas","desc":"","price":13000},{"cat":"Sándwiches","name":"Sándwich de milanesa de pollo + fritas","desc":"","price":13000},{"cat":"Sándwiches","name":"Sándwich de bondiola + fritas","desc":"","price":15000},{"cat":"Sándwiches","name":"Sándwich de matambre de cerdo + fritas","desc":"","price":15000},{"cat":"Sándwiches","name":"Sándwich de carne mechada + fritas","desc":"","price":16000},{"cat":"Sándwiches","name":"Sándwich de milanesa de carne + fritas","desc":"","price":16000},{"cat":"Sándwiches","name":"Sándwich de vacío + fritas","desc":"","price":17000},{"cat":"Bebidas","name":"Coca-Cola lata","desc":"","price":2000},{"cat":"Bebidas","name":"Fanta lata","desc":"","price":2000},{"cat":"Bebidas","name":"Sprite lata","desc":"","price":2000},{"cat":"Bebidas","name":"Coca-Cola 1,5 L","desc":"","price":4700},{"cat":"Bebidas","name":"Fanta 1,5 L","desc":"","price":4700},{"cat":"Bebidas","name":"Sprite 1,5 L","desc":"","price":4700}];

const CATS=["Promos", "Hamburguesas", "Pizzas", "Papas", "Sándwiches", "Lomos", "Comidas al plato", "Empanadas", "Focaccia y pan", "Bebidas"];
let active="Promos", cart=[];
try{const stored=JSON.parse(localStorage.getItem("consumaCart")||"[]");cart=Array.isArray(stored)?stored:[]}catch(e){cart=[];try{localStorage.removeItem("consumaCart")}catch(_){}}
const ADDONS=[
 {name:"Sin aderezo",price:0},
 {name:"Mayonesa",price:0},
 {name:"Mostaza",price:0},
 {name:"Ketchup",price:0},
 {name:"Salsa golf",price:0},
 {name:"Picante",price:700},
 {name:"Barbacoa",price:700},
 {name:"Cheddar",price:900,detail:"1 feta o ½ pote de cheddar líquido"},
 {name:"Bacon",price:1200,detail:"1 feta"},
 {name:"Full Bacon",price:1800,detail:"Doble bacon, bien cargado"},
 {name:"Cheddar Lover",price:1500,detail:"2 fetas o cheddar líquido completo"}
];
const CEBOLLA_CARAMELIZADA_EXTRA={name:"Cebolla caramelizada",price:800};
const CRIOLLA_EXTRA={name:"Salsa criolla",price:1000};
const STANDARD_SAUCES=ADDONS;
const BURGER_SAUCES=ADDONS;
const PROMO_DRINKS=[
 {name:"Sin bebida",price:0},
 {name:"Coca-Cola lata",price:2000},
 {name:"Fanta lata",price:2000},
 {name:"Sprite lata",price:2000},
 {name:"Coca-Cola 1,5 L",price:4700},
 {name:"Fanta 1,5 L",price:4700},
 {name:"Sprite 1,5 L",price:4700}
];
const COMBO_DRINKS=[
 {name:"Coca-Cola 500 ml incluida",price:0},
 {name:"Fanta 500 ml incluida",price:0},
 {name:"Sprite 500 ml incluida",price:0}
];
let deliveryMode="delivery",shippingCost=1500,shippingZone="Dentro de las 4 avenidas",gpsLink="";
let pending=null;
const money=n=>"$"+Number(n||0).toLocaleString("es-AR");
function nav(){
 document.getElementById("nav").innerHTML=CATS.map(c=>`<button data-cat="${c}" onclick="scrollToCat('${c.replaceAll("'","\\'")}')">${c}</button>`).join("");
}
function slug(x){return x.normalize("NFD").replace(/[\u0300-\u036f]/g,"").replace(/[^a-zA-Z0-9]+/g,"-").toLowerCase();}
function scrollToCat(cat){
 const el=document.getElementById("sec-"+slug(cat));
 if(el)el.scrollIntoView({behavior:"smooth",block:"start"});
}

function halfPrice(price){return Math.round(price/2)+(price>=19000?2000:1000)}
function addHalfPizza(name,price){
 const hp=halfPrice(price);
 cart.push({name:"½ "+name,price:hp,mods:["Media pizza"],qty:1});
 saveCart();
}

const ADDON_CATEGORIES=new Set(["Hamburguesas","Papas","Sándwiches","Lomos"]);
const MEDALLON_CATEGORIES=new Set(["Hamburguesas"]);
const CRIOLLA_CATEGORIES=new Set(["Hamburguesas","Sándwiches","Lomos"]);
function add(name,price,cat=""){
 const customizable=cat==="Promos"||ADDON_CATEGORIES.has(cat);
 if(customizable){openModifier(name,price,cat);return}
 cart.push({name,price,mods:[],qty:1});saveCart();
}
function saveCart(){try{localStorage.setItem("consumaCart",JSON.stringify(cart))}catch(e){}count()}
function openModifier(name,price,cat){
 pending={name,price,cat};
 document.getElementById("modTitle").textContent=name;
 const comboMode=name==="Combo Consuma";
 const promoMode=cat==="Promos"&&!comboMode;
 const baseSauces=cat==="Hamburguesas"?BURGER_SAUCES:STANDARD_SAUCES;
 const sauces=comboMode?COMBO_DRINKS:(promoMode?PROMO_DRINKS:(CRIOLLA_CATEGORIES.has(cat)?[...baseSauces,CEBOLLA_CARAMELIZADA_EXTRA,CRIOLLA_EXTRA]:baseSauces));
 const hint=document.querySelector("#modifierModal .modHint");
 if(hint)hint.textContent=comboMode?"Elegí la gaseosa de 500 ml incluida":(promoMode?"Agregá una bebida a la promo (opcional)":"Elegí aderezos, extras y potenciadores");
 const inputType=comboMode?"radio":"checkbox";
 const inputGroup=comboMode?' name="comboDrink"':"";
 document.getElementById("sauceGrid").innerHTML=sauces.map((x,i)=>`<label class="sauceOpt"><input type="${inputType}"${inputGroup} value="${x.name}" data-price="${x.price}" onchange="toggleSauce(this)" ${i===0?"checked":""}><span>${x.name}${x.price?` · +${money(x.price)}`:""}${x.detail?`<small style="display:block;margin-top:4px;opacity:.75;font-size:.78rem">${x.detail}</small>`:""}</span></label>`).join("");
 document.getElementById("medallonRow").style.display=MEDALLON_CATEGORIES.has(cat)?"flex":"none";
 if(MEDALLON_CATEGORIES.has(cat)){
   const extra=/(?:\bXL\b|\bgigante\b|Pizza Burger|Pizza lomo|Pizzaburger)/i.test(name)?2500:2000;
   const mp=document.getElementById("medallonPrice");if(mp)mp.textContent="+"+money(extra);
 }
 document.getElementById("extraMedallon").checked=false;
 document.getElementById("modifierModal").classList.add("open");
}
function toggleSauce(input){
 const inputs=[...document.querySelectorAll("#sauceGrid input")];
 const noneValues=["Sin aderezo","Sin bebida"];
 if(noneValues.includes(input.value)&&input.checked){
   inputs.forEach(item=>{if(item!==input)item.checked=false});
 }else if(input.checked){
   const none=inputs.find(item=>noneValues.includes(item.value));
   if(none)none.checked=false;
 }
}
function closeModifier(){document.getElementById("modifierModal").classList.remove("open");pending=null}
function confirmModifier(){
 if(!pending)return;
 const selected=[...document.querySelectorAll("#sauceGrid input:checked")].map(input=>({
   name:input.value,
   price:Number(input.dataset.price||0)
 }));
 let mods=selected.map(item=>item.price?`${item.name} +${money(item.price)}`:item.name);
 let price=pending.price+selected.reduce((total,item)=>total+item.price,0);
 if(MEDALLON_CATEGORIES.has(pending.cat)&&document.getElementById("extraMedallon").checked){
 const extra=/(?:\bXL\b|\bgigante\b|Pizza Burger|Pizza lomo|Pizzaburger)/i.test(pending.name)?2500:2000;
 price+=extra;mods.push("Medallón extra +"+money(extra));
}
 cart.push({name:pending.name,price,mods,qty:1});saveCart();closeModifier();
}
function count(){document.getElementById("count").textContent=cart.length}
function render(){
 const q=document.getElementById("search").value.toLowerCase().trim();
 let blocks=[];
 const pp=PROMOS.filter(x=>(x.name+" "+(x.desc||"")+" "+(x.label||"")+" "+(x.note||"")).toLowerCase().includes(q));
 if(pp.length){
   blocks.push(`<section id="sec-${slug("Promos")}" class="menuSection"><h2>Promociones y combos</h2><div class="goldline"></div><p class="desc">Las promociones no incluyen bebidas. El Combo Consuma sí incluye una gaseosa de 500 ml.</p><div class="grid">${pp.map(x=>`<article class="card promo"><div class="pbg promo-bg-${x.n}"${x.img?` style="background-image:url('${x.img}');${x.fit==="contain"?"background-size:contain;background-repeat:no-repeat;background-position:center;":""}"`:""}></div><div class="pcontent"><span class="pill">${x.label||`Promo ${x.n}`}</span><h3>${x.name}</h3>${x.desc?`<div class="desc">${x.desc}</div>`:""}${x.note?`<div class="desc">${x.note}</div>`:""}<div class="row"><span class="price">${money(x.price)}</span><button class="add" aria-label="Agregar al pedido" onclick="add('${x.name.replaceAll("'","\\'")}',${x.price},'Promos')">+</button></div></div></article>`).join("")}</div></section>`);
 }
 for(const cat of CATS.filter(c=>c!=="Promos")){
   let a=PRODUCTS.filter(x=>x.cat===cat && (x.name+" "+x.desc).toLowerCase().includes(q));
   a.sort((a,b)=>(a.price===null)-(b.price===null));
   if(!a.length)continue;
   blocks.push(`<section id="sec-${slug(cat)}" class="menuSection"><h2>${cat}</h2><div class="goldline"></div><div class="grid">${a.map(x=>`<article class="card product"><h3>${x.name}</h3><div class="desc">${x.desc||""}</div><div class="row">${x.price!==null?`<span class="price">${money(x.price)}</span>${x.cat==="Pizzas"&&x.name!=="Pizza al molde · Muzzarella"?`<button class="halfBtn" onclick="addHalfPizza('${x.name.replaceAll("'","\\'")}',${x.price})">½ · ${money(halfPrice(x.price))}</button>`:""}<button class="add" aria-label="Agregar al pedido" onclick="add('${x.name.replaceAll("'","\\'")}',${x.price},'${x.cat.replaceAll("'","\\'")}')">+</button>`:`<span class="soon">CONSULTAR</span>`}</div></article>`).join("")}</div></section>`);
 }
 document.getElementById("content").innerHTML=blocks.join("");
 bindAddButtons();
}
function openCart(){
 const saucesNote=document.querySelector("#modal .sauces");
 if(saucesNote)saucesNote.textContent="Los aderezos y extras elegidos se detallan debajo de cada producto.";
 document.getElementById("modal").classList.add("open");renderCart();
}
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
function tick(){let d=new Date();document.getElementById("time").textContent=d.toLocaleTimeString("es-AR",{hour12:false});let h=d.getHours();document.getElementById("status").textContent=(h>=9)?"ABIERTO":"CERRADO"}

function bindAddButtons(){
 document.querySelectorAll("button.add").forEach(button=>{
   button.removeAttribute("onclick");
   button.onclick=()=>{
     const card=button.closest("article.card");
     const itemName=card?.querySelector("h3")?.textContent?.trim()||"";
     const isPromo=Boolean(card?.classList.contains("promo"));
     const item=(isPromo?PROMOS:PRODUCTS).find(x=>x.name===itemName);
     if(item)add(item.name,item.price,isPromo?"Promos":item.cat);
   };
 });
}
function bindModifierControls(){
 const closeButton=document.querySelector("#modifierModal .xclose");
 if(closeButton){
   closeButton.removeAttribute("onclick");
   closeButton.onclick=closeModifier;
 }
 const confirmButton=document.querySelector("#modifierModal .checkout");
 if(confirmButton){
   confirmButton.removeAttribute("onclick");
   confirmButton.onclick=confirmModifier;
 }
 const sauceGrid=document.getElementById("sauceGrid");
 if(sauceGrid){
   sauceGrid.onchange=event=>{
     const input=event.target;
     if(input instanceof HTMLInputElement)toggleSauce(input);
   };
 }
}

cart=cart.map(x=>({...x,qty:x.qty||1,mods:x.mods||[]}));
nav();render();bindModifierControls();count();tick();setInterval(tick,1000);


/* ---- original runtime block ---- */

(function(){
  function moneyAR(n){return "$"+Number(n||0).toLocaleString("es-AR")}
  function findSearch(){
    return document.getElementById("search") ||
      document.querySelector('input[type="search"]') ||
      document.querySelector('input[placeholder*="Buscar" i]');
  }
  function sectionFor(name){
    const els=[...document.querySelectorAll("section,[id^='sec-']")];
    return els.find(el=>{
      const t=(el.id+" "+(el.querySelector("h1,h2,h3")?.textContent||"")).toLowerCase();
      return t.includes(name.toLowerCase());
    });
  }
  function go(name){
    const el=sectionFor(name);
    if(el) el.scrollIntoView({behavior:"smooth",block:"start"});
  }
  function buildQuick(){
    if(document.querySelector(".premiumQuick")) return;
    const names=["Promos","Hamburguesas","Pizzas","Papas","Sándwiches","Lomos","Comidas al plato","Empanadas","Focaccia y pan","Bebidas"];
    const nav=document.createElement("nav");
    nav.className="premiumQuick";
    nav.setAttribute("aria-label","Accesos rápidos");
    names.forEach((n,i)=>{
      const b=document.createElement("button");
      b.type="button"; b.textContent=n;
      if(i===0)b.classList.add("active");
      b.onclick=()=>{[...nav.children].forEach(x=>x.classList.remove("active"));b.classList.add("active");go(n)};
      nav.appendChild(b);
    });
    const anchor=document.querySelector("main")||document.querySelector(".wrap")||document.body.firstElementChild;
    if(anchor && anchor.parentNode) anchor.parentNode.insertBefore(nav,anchor);
  }
  function enhanceSearch(){
    const q=findSearch(); if(!q)return;
    q.setAttribute("autocomplete","off");
    q.setAttribute("enterkeyhint","search");
    q.setAttribute("aria-label","Buscar productos");
    if(!q.parentElement.querySelector(".premiumSearchInfo")){
      const info=document.createElement("div");info.className="premiumSearchInfo";info.setAttribute("aria-live","polite");
      q.parentElement.appendChild(info);
      const update=()=>{
        const term=q.value.trim();
        info.textContent=term?("Buscando: “"+term+"”"):"";
      };
      q.addEventListener("input",update,{passive:true});
    }
  }
  function backTop(){
    if(document.querySelector(".premiumTopBtn"))return;
    const b=document.createElement("button");b.className="premiumTopBtn";b.type="button";
    b.innerHTML="↑";b.title="Volver arriba";b.setAttribute("aria-label","Volver arriba");
    b.onclick=()=>window.scrollTo({top:0,behavior:"smooth"});
    document.body.appendChild(b);
    addEventListener("scroll",()=>b.classList.toggle("show",scrollY>700),{passive:true});
  }
  function cartAccessibility(){
    document.querySelectorAll("button").forEach(b=>{
      if(!b.getAttribute("aria-label") && b.textContent.trim()==="+") b.setAttribute("aria-label","Agregar");
      if(!b.getAttribute("aria-label") && b.textContent.trim()==="−") b.setAttribute("aria-label","Restar");
    });
  }
  function init(){
    buildQuick();enhanceSearch();backTop();cartAccessibility();
  }
  if(document.readyState==="loading")document.addEventListener("DOMContentLoaded",init);
  else init();
})();


/* ---- original runtime block ---- */

(function(){
  function setVH(){
    document.documentElement.style.setProperty("--consuma-vh",(window.innerHeight*.01)+"px");
  }
  setVH();
  window.addEventListener("resize",setVH,{passive:true});
  window.addEventListener("orientationchange",function(){setTimeout(setVH,120)},{passive:true});
  document.querySelectorAll("button,a,input,select,textarea").forEach(function(el){
    if(!el.hasAttribute("tabindex") && (el.tagName==="BUTTON"||el.tagName==="A")) el.tabIndex=0;
  });
})();


/* ---- original runtime block ---- */

(function(){
 let savedY=0;
 function lock(){
   if(document.body.classList.contains("modal-open")) return;
   savedY=window.scrollY||document.documentElement.scrollTop||0;
   document.body.style.top=(-savedY)+"px";
   document.body.classList.add("modal-open");
 }
 function unlock(){
   if(!document.body.classList.contains("modal-open")) return;
   document.body.classList.remove("modal-open");
   document.body.style.top="";
   window.scrollTo(0,savedY);
 }
 function visible(el){
   if(!el)return false;
   const cs=getComputedStyle(el);
   return cs.display!=="none" && cs.visibility!=="hidden" && !el.hidden &&
          (el.classList.contains("show")||el.classList.contains("open")||el.getAttribute("aria-hidden")==="false");
 }
 const ids=["modifierModal","cartModal"];
 function sync(){
   const any=ids.some(id=>visible(document.getElementById(id)));
   any?lock():unlock();
 }
 const obs=new MutationObserver(sync);
 ids.forEach(id=>{
   const el=document.getElementById(id);
   if(el)obs.observe(el,{attributes:true,attributeFilter:["class","style","hidden","aria-hidden"]});
 });
 document.addEventListener("click",()=>setTimeout(sync,0),true);
 document.addEventListener("keydown",e=>{
   if(e.key==="Escape")setTimeout(sync,0);
 });
 sync();
})();


/* ---- original runtime block ---- */

(function(){
 function fixCart(){
   const modal=document.getElementById('cartModal');
   if(!modal)return;
   const nodes=modal.querySelectorAll('*');
   nodes.forEach(el=>{
     if(el.closest('button')) return;
     const cs=getComputedStyle(el);
     const c=cs.color.match(/\d+/g);
     if(!c || c.length<3) return;
     const r=+c[0],g=+c[1],b=+c[2],a=c[3]===undefined?1:+c[3];
     /* sólo corrige texto extremadamente claro dentro del carrito */
     if(a < .65 || (r>205 && g>205 && b>205)){
       el.style.setProperty('color','#111','important');
       el.style.setProperty('-webkit-text-fill-color','#111','important');
       el.style.setProperty('opacity','1','important');
     }
   });
 }
 const m=document.getElementById('cartModal');
 if(m){
   new MutationObserver(()=>requestAnimationFrame(fixCart))
     .observe(m,{subtree:true,childList:true,attributes:true,attributeFilter:['class','style']});
 }
 document.addEventListener('click',()=>setTimeout(fixCart,20),true);
 fixCart();
})();


/* ---- original runtime block ---- */

(function(){
 function forceBlack(){
   const root=document.querySelector('#cartModal #cartItems')||document.getElementById('cartModal');
   if(!root)return;
   root.querySelectorAll('*').forEach(el=>{
     if(el.matches('button') || el.closest('button')) return;
     if(el.children.length===0 && el.textContent.trim()){
       el.style.setProperty('color','#000','important');
       el.style.setProperty('-webkit-text-fill-color','#000','important');
       el.style.setProperty('opacity','1','important');
       el.style.setProperty('filter','none','important');
     }
   });
 }
 const modal=document.getElementById('cartModal');
 if(modal){
   new MutationObserver(forceBlack).observe(modal,{subtree:true,childList:true,characterData:true});
 }
 document.addEventListener('click',()=>setTimeout(forceBlack,0),true);
 setInterval(forceBlack,700);
 forceBlack();
})();


/* ---- original runtime block ---- */

(function(){
  function paint(){
    var modal=document.getElementById('cartModal');
    if(!modal) return;
    var root=modal.querySelector('#cartItems')||modal;
    root.querySelectorAll('*').forEach(function(el){
      if(el.closest('button')) return;
      if(el.textContent && el.textContent.trim() && el.children.length===0){
        el.style.setProperty('color','#111','important');
        el.style.setProperty('-webkit-text-fill-color','#111','important');
        el.style.setProperty('opacity','1','important');
        el.style.setProperty('filter','none','important');
      }
    });
    modal.querySelectorAll('[class*="subtotal"],[id*="subtotal"]').forEach(function(el){
      el.style.setProperty('background','#E4B72E','important');
      el.style.setProperty('color','#090909','important');
      el.style.setProperty('-webkit-text-fill-color','#090909','important');
      el.querySelectorAll('*').forEach(function(x){
        x.style.setProperty('color','#090909','important');
        x.style.setProperty('-webkit-text-fill-color','#090909','important');
        x.style.setProperty('opacity','1','important');
      });
    });
  }
  var modal=document.getElementById('cartModal');
  if(modal) new MutationObserver(function(){requestAnimationFrame(paint)}).observe(modal,{subtree:true,childList:true,attributes:true});
  document.addEventListener('click',function(){setTimeout(paint,10)},true);
  paint();
})();


/* ---- original runtime block ---- */

(function(){
 function forceCartContrast(){
   var modal=document.getElementById('modal');
   if(!modal)return;
   modal.querySelectorAll('#cartItems .ci').forEach(function(row){
     row.style.setProperty('opacity','1','important');
     var name=row.querySelector('div:first-child b');
     var price=row.querySelector(':scope > span');
     var qty=row.querySelector('.qtyCtl strong');
     [name,price,qty].forEach(function(el){
       if(el){
         el.style.setProperty('color','#050505','important');
         el.style.setProperty('-webkit-text-fill-color','#050505','important');
         el.style.setProperty('opacity','1','important');
       }
     });
     row.querySelectorAll('small').forEach(function(el){
       el.style.setProperty('color','#3E3A34','important');
       el.style.setProperty('-webkit-text-fill-color','#3E3A34','important');
       el.style.setProperty('opacity','1','important');
     });
   });
   var sub=document.getElementById('orderSubtotal');
   if(sub){
     sub.style.setProperty('color','#050505','important');
     sub.style.setProperty('-webkit-text-fill-color','#050505','important');
     sub.style.setProperty('opacity','1','important');
   }
 }
 var target=document.getElementById('modal');
 if(target)new MutationObserver(forceCartContrast).observe(target,{subtree:true,childList:true,characterData:true});
 document.addEventListener('click',function(){setTimeout(forceCartContrast,0)},true);
 forceCartContrast();
})();


/* ---- original runtime block ---- */

(function(){
  const originalOpen = window.openModifier;
  if(typeof originalOpen === "function"){
    window.openModifier = function(product){
      if(product && /(?:burger gigante|pizza ?burger)/i.test(product.name||"")){
        product.medallonExtra = 2500;
        product.extraMedallon = 2500;
      }
      return originalOpen.apply(this, arguments);
    };
  }
})();
