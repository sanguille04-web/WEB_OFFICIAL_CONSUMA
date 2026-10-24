
const PROMOS=[{"id":"promo1","n":1,"name":"2 pizzas de muzzarella a la piedra","price":22000,"img":"./assets/generated/2c86e5406bf83c5c.webp"},{"id":"promo2","n":2,"name":"1 pizza de muzzarella a la piedra + 1 pizza especial","price":25000,"img":"./assets/generated/b0242a8e465fbcfb.webp"},{"id":"promo3","n":3,"name":"1 pizza de muzzarella a la piedra + 1 docena de empanadas","price":27000,"img":"./assets/generated/72d4083d7a3ecb24.webp","desc":"Docena a elección: jamón y queso, carne o pollo"},{"id":"promo4","n":4,"name":"4 hamburguesas completas + fritas","price":36900,"img":"./assets/generated/promo4-burgers-completas-20260909.webp"},{"id":"promo5","n":5,"name":"2 lomos completos + fritas","price":29900,"img":"./assets/generated/fa49ae670f632e45.webp"},{"id":"promo6","n":6,"name":"2 sándwiches de bondiola + fritas","price":25900,"img":"./assets/generated/1e5d7e41cda95910.webp"},{"id":"promo7","n":7,"name":"2 hamburguesas completas XL + fritas","price":23000,"img":"./assets/generated/342abe21e4e319b4.webp"},{"id":"promo8","n":8,"name":"2 pizzas de muzzarella al molde","price":20000,"img":"./assets/generated/a64437401731e458.webp"},{"id":"promo9","n":9,"name":"Nuggets caseros + papas chicas + mayonesa y kétchup","price":10000,"img":"./assets/generated/file_0000000095d8820e9a1f553af6dd8a67.png"}];
const PRODUCTS=[{"cat":"Hamburguesas","name":"Cheeseburger + fritas","price":8500,"desc":"Pan de papa · Medallón 80 g · Cheddar, mayonesa y mostaza"},{"cat":"Hamburguesas","name":"Cheeseburger XL + fritas","price":9900,"desc":"Pan de papa · Medallón 120 g · Cheddar, mayonesa y mostaza"},{"cat":"Hamburguesas","name":"Completa + fritas","price":10500,"desc":"Pan de papa · Medallón 80 g · Jamón, muzzarella, tomate, lechuga, huevo y mayonesa"},{"cat":"Hamburguesas","name":"Completa XL + fritas","price":12500,"desc":"Pan de papa · Medallón 120 g · Jamón, muzzarella, tomate, lechuga, huevo y mayonesa"},{"cat":"Hamburguesas","name":"Americana Doble + fritas","price":13500,"desc":"Pan de papa · 2 medallones de 80 g · Cheddar, bacon, cebolla caramelizada y salsa americana de la casa"},{"cat":"Hamburguesas","name":"Americana Doble XL + fritas","price":15500,"desc":"Pan de papa · 2 medallones de 120 g · Cheddar, bacon, cebolla caramelizada y salsa americana de la casa"},{"cat":"Hamburguesas","name":"Hamburguesa Gigante para Compartir + fritas","price":28000,"desc":"Rinde 8 porciones · Pan de la casa · 600 g de carne, jamón, muzzarella, huevo, lechuga y tomate"},{"cat":"Hamburguesas","name":"Pizza Burger para Compartir + fritas","price":34000,"desc":"Rinde 8 porciones · Pan de la casa · 600 g de carne, jamón, muzzarella, huevo, lechuga, tomate, muzzarella derretida y aceitunas verdes"},{"cat":"Pizzas","name":"Pizza muzzarella al molde","price":12000,"desc":""},{"cat":"Pizzas","name":"Pizza muzzarella a la piedra","price":14000,"desc":""},{"cat":"Pizzas","name":"Pizza doble muzzarella","price":16000,"desc":""},{"cat":"Pizzas","name":"Pizza napolitana","price":16000,"desc":""},{"cat":"Pizzas","name":"Pizza roquefort","price":16000,"desc":""},{"cat":"Pizzas","name":"Pizza fugazza","price":16000,"desc":""},{"cat":"Pizzas","name":"Pizza huevo y morrón","price":16000,"desc":""},{"cat":"Pizzas","name":"Pizza especial","price":17000,"desc":""},{"cat":"Pizzas","name":"Pizza especial con huevo y morrón","price":18000,"desc":""},{"cat":"Pizzas","name":"Pizza pepperoni","price":17000,"desc":""},{"cat":"Pizzas","name":"Pizza champiñones","price":16000,"desc":""},{"cat":"Pizzas","name":"Pizza champiñones premium","price":18000,"desc":"Champiñones salteados con ajo y perejil, panceta ahumada y parmesano"},{"cat":"Pizzas","name":"Pizza cuatro quesos","price":18000,"desc":"Muzzarella, queso Holanda, roquefort y parmesano"},{"cat":"Pizzas","name":"Pizza jamón crudo y rúcula","price":19000,"desc":""},{"cat":"Papas","name":"Papas chicas","price":4000,"desc":""},{"cat":"Papas","name":"Papas medianas","price":6000,"desc":""},{"cat":"Papas","name":"Papas grandes","price":8000,"desc":""},{"cat":"Papas","name":"Papas chicas con cheddar y bacon","price":6000,"desc":""},{"cat":"Papas","name":"Papas medianas con cheddar y bacon","price":8000,"desc":""},{"cat":"Papas","name":"Papas grandes con cheddar y bacon","price":10000,"desc":""},{"cat":"Nuggets","name":"Nuggets caseros","price":7000,"desc":"9 unidades · Kétchup o mayonesa a elección"},{"cat":"Sándwiches","name":"Pollo mechado · sin fritas","price":10000,"desc":"Pan de la casa · Pollo desmenuzado, lechuga, tomate, queso de barra y mayonesa"},{"cat":"Sándwiches","name":"Carne mechada + fritas","price":15000,"desc":"Pan de la casa · Tapa de nalga desmechada con vegetales, reducción de vino tinto, lechuga, tomate y mayonesa"},{"cat":"Sándwiches","name":"Choripán tradicional","price":6000,"desc":"Pan francés · Chorizo puro de cerdo, tomate, lechuga, salsa criolla o chimichurri y mayonesa · Sin fritas"},{"cat":"Sándwiches","name":"Chori Doble + fritas","price":11000,"desc":"Pan de la casa · Dos chorizos de cerdo, tomate, lechuga, salsa criolla o chimichurri y mayonesa"},{"cat":"Sándwiches","name":"Chorilomo + fritas","price":13000,"desc":"Pan de la casa · Medallón de chorizo de cerdo 160 g, lechuga, tomate, huevo y muzzarella"},{"cat":"Sándwiches","name":"Chorilomo XL + fritas","price":16000,"desc":"Pan de la casa · Medallón de chorizo de cerdo 200 g, lechuga, tomate, huevo y muzzarella"},{"cat":"Sándwiches","name":"Milanesa de pollo + fritas","price":13000,"desc":"Pan de la casa · Milanesa de pollo 300 g, lechuga, tomate, huevo, jamón y mayonesa"},{"cat":"Sándwiches","name":"Milanesa de carne + fritas","price":16000,"desc":"Pan de la casa · Milanesa de nalga 250 g, lechuga, tomate, huevo, jamón, muzzarella y mayonesa"},{"cat":"Sándwiches","name":"Bondiola + fritas","price":15000,"desc":"Pan de la casa · Bondiola desmechada a la cerveza negra con vegetales, lechuga, tomate y mayonesa"},{"cat":"Sándwiches","name":"Matambre de cerdo + fritas","price":15000,"desc":"Pan de la casa · Matambre de cerdo, lechuga, tomate y mayonesa"},{"cat":"Sándwiches","name":"Vacío + fritas","price":21900,"desc":"Pan de la casa · 300 g de vacío cocinado en sus jugos, salsa criolla y mayonesa"},{"cat":"Lomos","name":"Lomo completo + fritas","price":16000,"desc":"Pan de la casa · 130 g de lomo, muzzarella, jamón, huevo, lechuga, tomate y mayonesa"},{"cat":"Lomos","name":"Lomo completo XL + fritas","price":22000,"desc":"Pan de la casa · 200 g de lomo, muzzarella, jamón, huevo, lechuga, tomate y mayonesa"},{"cat":"Lomos","name":"Lomo XL a la pizza + fritas","price":24000,"desc":"200 g de lomo · Completo, cubierto con muzzarella derretida, aceitunas verdes y morrón"},{"cat":"Lomos","name":"Lomo gigante para compartir + fritas","price":36000,"desc":"Rinde 8 porciones · Pan de la casa · 400 g de lomo, muzzarella, jamón, huevo, lechuga, tomate y mayonesa"},{"cat":"Lomos","name":"Pizza lomo para compartir + fritas","price":40000,"desc":"Rinde 8 porciones · 400 g de lomo · Completo, cubierto con muzzarella derretida, aceitunas verdes y morrón"},{"cat":"Pastas caseras","name":"Sorrentinos de jamón y queso","price":10000,"desc":"Salsa boloñesa, fileto o blanca"},{"cat":"Pastas caseras","name":"Sorrentinos de calabaza y muzzarella","price":10000,"desc":"Salsa boloñesa, fileto o blanca"},{"cat":"Platos","name":"Matambre de cerdo al limón","price":10000,"desc":"Papas fritas o ensalada"},{"cat":"Platos","name":"Matambre de cerdo a la pizza","price":12000,"desc":"Papas fritas o ensalada"},{"cat":"Platos","name":"Filet de pollo al limón","price":9000,"desc":"Papas fritas o ensalada"},{"cat":"Platos","name":"Filet de pollo a la pizza","price":11000,"desc":"Papas fritas o ensalada"},{"cat":"Platos","name":"Vacío al plato","price":17000,"desc":"300 g de vacío cocinado lentamente en sus jugos · Papas fritas o ensalada"},{"cat":"Milanesas","name":"Milanesa de pollo a caballo","price":14000,"desc":"350 g · Dos huevos fritos · Papas fritas o ensalada"},{"cat":"Milanesas","name":"Milanesa de pollo a la napolitana","price":16000,"desc":"350 g · Muzzarella, tomate y jamón cocido · Papas fritas o ensalada"},{"cat":"Milanesas","name":"Milanesa de pollo a la suiza","price":16000,"desc":"350 g · Muzzarella y morrón rojo · Papas fritas o ensalada"},{"cat":"Milanesas","name":"Milanesa de carne a caballo","price":16000,"desc":"350 g de nalga · Dos huevos fritos · Papas fritas o ensalada"},{"cat":"Milanesas","name":"Milanesa de carne a la napolitana","price":18000,"desc":"350 g de nalga · Muzzarella, tomate y jamón cocido · Papas fritas o ensalada"},{"cat":"Milanesas","name":"Milanesa de carne a la suiza","price":18000,"desc":"350 g de nalga · Muzzarella y morrón rojo · Papas fritas o ensalada"},{"cat":"Empanadas","name":"Jamón y queso · Unidad","price":1800,"desc":"1 unidades"},{"cat":"Empanadas","name":"Jamón y queso · Media docena","price":7500,"desc":"6 unidades"},{"cat":"Empanadas","name":"Jamón y queso · Docena","price":15000,"desc":"12 unidades"},{"cat":"Empanadas","name":"Carne · Unidad","price":1800,"desc":"1 unidades"},{"cat":"Empanadas","name":"Carne · Media docena","price":7500,"desc":"6 unidades"},{"cat":"Empanadas","name":"Carne · Docena","price":15000,"desc":"12 unidades"},{"cat":"Empanadas","name":"Pollo · Unidad","price":1800,"desc":"1 unidades"},{"cat":"Empanadas","name":"Pollo · Media docena","price":7500,"desc":"6 unidades"},{"cat":"Empanadas","name":"Pollo · Docena","price":15000,"desc":"12 unidades"},{"cat":"Empanadas","name":"Árabe · Unidad","price":1800,"desc":"1 unidades"},{"cat":"Empanadas","name":"Árabe · Media docena","price":8500,"desc":"6 unidades"},{"cat":"Empanadas","name":"Árabe · Docena","price":17000,"desc":"12 unidades"},{"cat":"Empanadas","name":"Bondiola a la cerveza · Unidad","price":2200,"desc":"1 unidades"},{"cat":"Empanadas","name":"Bondiola a la cerveza · Media docena","price":8500,"desc":"6 unidades"},{"cat":"Empanadas","name":"Bondiola a la cerveza · Docena","price":17000,"desc":"12 unidades"},{"cat":"Ensaladas","name":"Ensalada César","price":8000,"desc":"Pollo, lechuga, parmesano, croutones y aderezo César"},{"cat":"Ensaladas","name":"Ensalada mixta","price":6000,"desc":"Lechuga, tomate y zanahoria"},{"cat":"Ensaladas","name":"Ensalada de zanahoria, tomate y huevo duro","price":6000,"desc":""},{"cat":"Focaccia y pan","name":"Pan casero","price":3000,"desc":""},{"cat":"Focaccia y pan","name":"Focaccia de jamón y muzzarella","price":6500,"desc":""},{"cat":"Focaccia y pan","name":"Focaccia de salame y muzzarella","price":6500,"desc":""},{"cat":"Focaccia y pan","name":"Focaccia vegetariana","price":6500,"desc":"Muzzarella, tomates deshidratados y cebolla"},{"cat":"Postres","name":"Bombón escocés","price":4000,"desc":"Postre helado con cobertura de chocolate"},
{"cat":"Postres","name":"Flan casero con dulce de leche","price":4000,"desc":"Flan tradicional acompañado con dulce de leche"},
{"cat":"Postres","name":"Postre Oreo","price":4000,"desc":"Postre cremoso con galletitas Oreo"},
{"cat":"Postres","name":"Tiramisú","price":4000,"desc":"Postre en capas con café, crema y cacao"},
{"cat":"Postres","name":"Chocotorta","price":4000,"desc":"Capas de galletitas de chocolate y crema de dulce de leche"},
{"cat":"Postres","name":"Mousse de dulce de leche con crema","price":4000,"desc":"Mousse de dulce de leche acompañado con crema"},
{"cat":"Postres","name":"Mousse de chocolate con crema","price":4000,"desc":"Mousse de chocolate acompañado con crema"},
{"cat":"Bebidas","name":"Lata de Coca-Cola","desc":"","price":2000},{"cat":"Bebidas","name":"Lata de Sprite","desc":"","price":2000},{"cat":"Bebidas","name":"Lata de Fanta","desc":"","price":2000},{"cat":"Bebidas","name":"Coca-Cola de 1,5 Lt","desc":"","price":4700},{"cat":"Bebidas","name":"Fanta de 1,5 Lt","desc":"","price":4700},{"cat":"Bebidas","name":"Sprite de 1,5 Lt","desc":"","price":4700},{"cat":"Bebidas","name":"Lata Quilmes 473 cc","desc":"","price":2300},{"cat":"Bebidas","name":"Latón Quilmes 710 cc","desc":"","price":3600},{"cat":"Bebidas","name":"Latón Schneider 710 cc","desc":"","price":3100},{"cat":"Bebidas","name":"Cerveza Quilmes botella 1 L","desc":"","price":4200},{"cat":"Bebidas","name":"Cerveza Andes botella 1 L","desc":"","price":4000}];
const CATS=["Promos","Hamburguesas","Pizzas","Papas","Nuggets","Sándwiches","Lomos","Pastas caseras","Platos","Milanesas","Empanadas","Ensaladas","Focaccia y pan","Postres","Bebidas"];
let active="Promos", cart=[];
try{const stored=JSON.parse(localStorage.getItem("consumaCart")||"[]");cart=Array.isArray(stored)?stored:[]}catch(e){cart=[];try{localStorage.removeItem("consumaCart")}catch(_){}}
const ADDONS=[
 {name:"Sin aderezo",price:0},
 {name:"Mayonesa",price:0},
 {name:"Mostaza",price:0},
 {name:"Ketchup",price:0},
 {name:"Salsa golf",price:0},
 
 
 {name:"Cheddar extra",price:1000},
 {name:"Bacon extra",price:1000},

 {name:"Cebolla caramelizada",price:800}
];
const CEBOLLA_CARAMELIZADA_EXTRA={name:"Chimichurri",price:800};
const CRIOLLA_EXTRA={name:"Salsa criolla",price:800};
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
const QUICK_WHATSAPP="542664576554";
function quickWhatsAppLink(category){
 const message=["Hola! Quiero pedir 👇","","Pedido : ","Dirección o retiro:","Forma de pago:","Observacion:"].join("\n");
 return `https://wa.me/${QUICK_WHATSAPP}?text=${encodeURIComponent(message)}`;
}
function quickWhatsAppButton(category){
 return `<a class="quickOrder" href="${quickWhatsAppLink(category)}" target="_blank" rel="noopener noreferrer" aria-label="Enviar pedido de ${category} por WhatsApp"><svg viewBox="0 0 32 32" aria-hidden="true"><path fill="currentColor" d="M16 3a12.6 12.6 0 0 0-10.8 19.1L3.5 28.5l6.6-1.7A12.7 12.7 0 1 0 16 3Zm0 22.9c-2 0-4-.6-5.7-1.6l-.4-.2-3.9 1 1.1-3.8-.3-.4A10.3 10.3 0 1 1 16 25.9Zm5.7-7.7c-.3-.2-1.9-.9-2.2-1-.3-.1-.5-.2-.7.2-.2.3-.8 1-.9 1.2-.2.2-.3.2-.7.1-1.8-.9-3-1.6-4.2-3.7-.3-.6.3-.5.9-1.8.1-.2 0-.4 0-.6l-1-2.5c-.3-.6-.6-.5-.9-.5h-.7c-.2 0-.6.1-1 .5-1.1 1.2-1.5 2.7-1.1 4.3.5 2.4 2.2 4.6 4.3 6.1 2.4 1.8 5.7 2.8 7.6 2 .8-.3 1.7-1.3 1.9-2.2.2-.8.2-1.5.1-1.7-.2-.2-.5-.3-.8-.5Z"/></svg><span>Enviar pedido por WhatsApp</span></a>`;
}
function nav(){
 document.getElementById("nav").innerHTML=CATS.map(c=>`<button data-cat="${c}" onclick="scrollToCat('${c.replaceAll("'","\\'")}')">${c}</button>`).join("");
}
function slug(x){return x.normalize("NFD").replace(/[\u0300-\u036f]/g,"").replace(/[^a-zA-Z0-9]+/g,"-").toLowerCase();}
function setViewMode(mode){
 const safe=mode==="book"?"book":"scroll";
 document.body.classList.toggle("bookMode",safe==="book");
 document.getElementById("viewScroll")?.classList.toggle("active",safe==="scroll");
 document.getElementById("viewBook")?.classList.toggle("active",safe==="book");
 document.getElementById("viewScroll")?.setAttribute("aria-pressed",String(safe==="scroll"));
 document.getElementById("viewBook")?.setAttribute("aria-pressed",String(safe==="book"));
 document.getElementById("bookPager")?.classList.toggle("show",safe==="book");
 try{localStorage.setItem("consumaViewMode",safe)}catch(e){}
 if(safe==="book") requestAnimationFrame(()=>goBookPage(0));
}
function restoreViewMode(){
 let mode="scroll";try{mode=localStorage.getItem("consumaViewMode")||"scroll"}catch(e){}
 setViewMode(mode);
}
function scrollToCat(cat){
 const el=document.getElementById("sec-"+slug(cat));
 if(!el)return;
 if(document.body.classList.contains("bookMode")){
   const pages=[...document.querySelectorAll("#content>.menuSection")];
   const i=pages.indexOf(el); if(i>=0)goBookPage(i);
 }else el.scrollIntoView({behavior:"smooth",block:"start"});
}

function halfPrice(price){return Math.round(price/2)+(price>=19000?2000:1000)}
function addHalfPizza(name,price){
 const hp=halfPrice(price);
 cart.push({name:"½ "+name,price:hp,mods:["Media pizza"],qty:1});
 saveCart();
}

const ADDON_CATEGORIES=new Set(["Hamburguesas","Papas","Sándwiches","Lomos"]);
const MEDALLON_CATEGORIES=new Set(["Hamburguesas"]);
const PLATE_SIDES=[{name:"Papas fritas",price:0},{name:"Ensalada",price:0}];
const CRIOLLA_CATEGORIES=new Set(["Hamburguesas","Sándwiches","Lomos"]);
function add(name,price,cat=""){
 const customizable=cat==="Promos"||["Platos","Milanesas","Pollo al horno de barro"].includes(cat)||ADDON_CATEGORIES.has(cat);
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
 const plateMode=["Platos","Milanesas","Pollo al horno de barro"].includes(cat);
 const sauces=plateMode?PLATE_SIDES:(comboMode?COMBO_DRINKS:(promoMode?PROMO_DRINKS:(CRIOLLA_CATEGORIES.has(cat)?[...baseSauces,CEBOLLA_CARAMELIZADA_EXTRA,CRIOLLA_EXTRA]:baseSauces)));
 const hint=document.querySelector("#modifierModal .modHint");
 if(hint)hint.textContent=plateMode?"Elegí una guarnición":(comboMode?"Elegí la gaseosa de 500 ml incluida":(promoMode?"Agregá una bebida a la promo (opcional)":"Elegí aderezos, extras y potenciadores"));
 const inputType=(comboMode||plateMode)?"radio":"checkbox";
 const inputGroup=comboMode?' name="comboDrink"':(plateMode?' name="plateSide"':"");
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
let renderTimer;
function scheduleRender(){
 clearTimeout(renderTimer);
 renderTimer=setTimeout(render,120);
}
function promoMedia(x){
 if(!x.img)return "";
 const eager=x.n===1;
 const priority=eager?" fetchpriority=\"high\"":"";
 const image=`<img src="${x.img}" alt="" width="${eager?720:1024}" height="${eager?1042:1536}" loading="${eager?"eager":"lazy"}" decoding="${eager?"sync":"async"}"${priority}>`;
 return eager?`<picture><source srcset="./assets/generated/promo1-720-audit.avif" type="image/avif">${image}</picture>`:image;
}
function render(){
 const q=document.getElementById("search").value.toLowerCase().trim();
 let blocks=[];
 const pp=PROMOS.filter(x=>(x.name+" "+(x.desc||"")+" "+(x.label||"")+" "+(x.note||"")).toLowerCase().includes(q));
 if(pp.length){
   blocks.push(`<section id="sec-${slug("Promos")}" class="menuSection"><div class="sectionTitle"><h2>Promociones y combos</h2>${quickWhatsAppButton("Promociones y combos")}</div><div class="goldline"></div><p class="desc">Las promociones no incluyen bebidas. </p><div class="grid">${pp.map(x=>`<article class="card promo"><div class="pbg promo-bg-${x.n}">${promoMedia(x)}</div><div class="pcontent"><span class="pill">${x.label||`Promo ${x.n}`}</span><h3>${x.name}</h3>${x.desc?`<div class="desc">${x.desc}</div>`:""}${x.note?`<div class="desc">${x.note}</div>`:""}<div class="row"><span class="price">${money(x.price)}</span><button class="add" aria-label="Agregar al pedido" onclick="add('${x.name.replaceAll("'","\\'")}',${x.price},'Promos')">+</button></div></div></article>`).join("")}</div></section>`);
 }
 for(const cat of CATS.filter(c=>c!=="Promos")){
   let a=PRODUCTS.filter(x=>x.cat===cat && (x.name+" "+x.desc).toLowerCase().includes(q));
   a.sort((a,b)=>(a.price===null)-(b.price===null));
   if(!a.length)continue;
   blocks.push(`<section id="sec-${slug(cat)}" class="menuSection"><div class="sectionTitle"><h2>${cat}</h2>${quickWhatsAppButton(cat)}</div><div class="goldline"></div><div class="grid">${a.map(x=>`<article class="card product"><h3>${x.name}</h3><div class="desc">${x.desc||""}</div><div class="row">${x.price!==null?`<span class="price">${money(x.price)}</span>${x.cat==="Pizzas"&&!/al molde/i.test(x.name)?`<button class="halfBtn" onclick="addHalfPizza('${x.name.replaceAll("'","\\'")}',${x.price})">½ · ${money(halfPrice(x.price))}</button>`:""}<button class="add" aria-label="Agregar al pedido" onclick="add('${x.name.replaceAll("'","\\'")}',${x.price},'${x.cat.replaceAll("'","\\'")}')">+</button>`:`<span class="soon">CONSULTAR</span>`}</div></article>`).join("")}</div></section>`);
 }
 document.getElementById("content").innerHTML=blocks.join("");
 buildBookPager();
 bindAddButtons();
}
function buildBookPager(){
 const pager=document.getElementById("bookPager"); if(!pager)return;
 const pages=[...document.querySelectorAll("#content>.menuSection")];
 pager.innerHTML=pages.map((p,i)=>`<button type="button" data-page="${i}" onclick="goBookPage(${i})" aria-label="Página ${i+1}">${i+1}</button>`).join("");
 pager.classList.toggle("show",document.body.classList.contains("bookMode"));
}
function goBookPage(i){
 const pages=[...document.querySelectorAll("#content>.menuSection")]; const page=pages[i]; if(!page)return;
 const content=document.getElementById("content");
 content.scrollTo({left:page.offsetLeft-content.offsetLeft,behavior:"smooth"});
 document.querySelectorAll("#bookPager button").forEach((b,n)=>b.classList.toggle("active",n===i));
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
    if(!el)return;
    if(document.body.classList.contains("bookMode")) el.scrollIntoView({behavior:"smooth",block:"nearest",inline:"start"});
    else el.scrollIntoView({behavior:"smooth",block:"start"});
  }
  function buildQuick(){
    if(document.querySelector(".premiumQuick")) return;
    const names=["Promos","Hamburguesas","Pizzas","Papas","Sándwiches","Lomos","Comidas al plato","Milanesas","Empanadas","Focaccia y pan","Bebidas"];
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


/* Auditoría 2026-09-09: se retiró el ajuste JS de viewport.
   CSS ya usa unidades dvh y los controles nativos ya son accesibles por teclado. */


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
