
/**
 * CONSUMA — actualización segura de menú
 * Versión: 2026-08-21
 *
 * Objetivo: modificar SOLAMENTE datos de menú, aderezos, extras y promo bondiola.
 * No toca CSS, imágenes, GPS, checkout, carrito, cabecera ni recursos multimedia.
 *
 * Integración:
 *   <script src="/js/consuma-menu-update-2026-08-21.js" defer></script>
 *
 * Colocarlo DESPUÉS del script principal de la web.
 */
(function () {
  "use strict";

  const CFG = {"version":"2026-08-21","brand":"CONSUMA","sauces":["Mayonesa","Ketchup","Mostaza","Salsa golf","Picante","Alioli","Mayonesa de ajo","Sin aderezo"],"products":[{"cat":"Pizzas","name":"Pizza al molde · Muzzarella","price":12000,"desc":"Pizza muzzarella al molde."},{"cat":"Pizzas","name":"Pizza Muzzarella","price":14000,"desc":"Muzzarella, salsa y aceitunas."},{"cat":"Pizzas","name":"Pizza doble muzzarella","price":16000,"desc":"Doble muzzarella, salsa y aceitunas."},{"cat":"Pizzas","name":"Pizza napolitana","price":16000,"desc":"Muzzarella, tomate y ajo."},{"cat":"Pizzas","name":"Pizza especial","price":17000,"desc":""},{"cat":"Pizzas","name":"Pizza huevo y morrón","price":16000,"desc":""},{"cat":"Pizzas","name":"Pizza especial huevo y morrón","price":18000,"desc":""},{"cat":"Pizzas","name":"Pizza 4 quesos","price":17000,"desc":""},{"cat":"Pizzas","name":"Pizza calabresa","price":17000,"desc":""},{"cat":"Pizzas","name":"Pizza jamón crudo y rúcula","price":18000,"desc":""},{"cat":"Pizzas","name":"Pizza fugazza","price":16000,"desc":""},{"cat":"Pizzas","name":"Pizza palmitos y salsa golf","price":16000,"desc":""},{"cat":"Pizzas","name":"Pizza de champiñones","price":16000,"desc":""},{"cat":"Pizzas","name":"Pizza mediterránea","price":16000,"desc":"Muzzarella, tomates secos, albahaca, ajo y aceitunas negras."},{"cat":"Pizzas","name":"Pizza brava","price":16000,"desc":"Muzzarella, jalapeño y salsa picante."},{"cat":"Pizzas","name":"Pizza roquefort con nuez","price":17000,"desc":"Muzzarella, roquefort y nueces."},{"cat":"Pizzas","name":"Pizza Consuma","price":20000,"desc":"Papas fritas, jamón cocido, huevos fritos y verdeo."},{"cat":"Papas","name":"Papas individual","price":3500,"desc":""},{"cat":"Papas","name":"Papas porción chica","price":7000,"desc":""},{"cat":"Papas","name":"Papas porción grande","price":11000,"desc":""},{"cat":"Papas","name":"Papas porción chica cheddar y bacon","price":9000,"desc":""},{"cat":"Papas","name":"Papas porción grande cheddar & bacon","price":14000,"desc":""},{"cat":"Empanadas","name":"Carne · Docena","price":15000,"desc":"12 unidades."},{"cat":"Empanadas","name":"Jamón y queso · Docena","price":15000,"desc":"12 unidades."},{"cat":"Empanadas","name":"Árabes · Docena","price":15000,"desc":"12 unidades."},{"cat":"Hamburguesas","name":"Consuma clásica","price":8000,"desc":"Medallón de carne, lechuga, tomate, paleta jamonada y huevo."},{"cat":"Hamburguesas","name":"Consuma clásica XL","price":12000,"desc":"Medallón de carne, lechuga, tomate, paleta jamonada y huevo."},{"cat":"Hamburguesas","name":"Consuma cheddar & bacon","price":10000,"desc":"2 medallones de carne, cheddar y bacon."},{"cat":"Hamburguesas","name":"Consuma cheddar & bacon XL","price":15000,"desc":"2 medallones de carne, cheddar y bacon."},{"cat":"Hamburguesas","name":"Cheese Burger","price":10000,"desc":"Medallón de carne, muzzarella, queso tybo, cheddar y huevo."},{"cat":"Hamburguesas","name":"Simple cheddar","price":6000,"desc":"Medallón de carne y una feta de queso cheddar."},{"cat":"Hamburguesas","name":"Hamburguesa gigante","price":28000,"desc":"Rinde 8 porciones · Para 3 a 4 personas."},{"cat":"Hamburguesas","name":"Pizza Burger","price":34000,"desc":"Rinde 8 porciones · Para 3 a 4 personas."},{"cat":"Lomos","name":"Lomo completo","price":16000,"desc":""},{"cat":"Lomos","name":"Lomo completo XL","price":22000,"desc":""},{"cat":"Lomos","name":"Lomo completo XL a la pizza","price":25000,"desc":""},{"cat":"Lomos","name":"Lomo gigante","price":38000,"desc":"Rinde 8 porciones · Para 3 a 4 personas."},{"cat":"Lomos","name":"Pizza lomo","price":42000,"desc":"Rinde 8 porciones · Para 3 a 4 personas."},{"cat":"Focaccia y pan","name":"Focaccia vegetariana","price":8000,"desc":""},{"cat":"Focaccia y pan","name":"Focaccia jamón y queso","price":8000,"desc":""},{"cat":"Focaccia y pan","name":"Focaccia salame y queso","price":8000,"desc":""},{"cat":"Focaccia y pan","name":"Pan casero","price":3000,"desc":""},{"cat":"Milanesas","name":"Milanesa de carne a la napolitana + fritas","price":14000,"desc":""},{"cat":"Milanesas","name":"Milanesa de pollo a la napolitana + fritas","price":12000,"desc":""},{"cat":"Sándwiches","name":"SW de bondiola mechada + fritas","price":12000,"desc":""},{"cat":"Sándwiches","name":"SW de matambre de cerdo + fritas","price":13000,"desc":""},{"cat":"Sándwiches","name":"SW de carne mechada + fritas","price":14000,"desc":""},{"cat":"Sándwiches","name":"SW de pollo mechado + fritas","price":11000,"desc":""},{"cat":"Sándwiches","name":"SW Mila pollo + fritas","price":12000,"desc":""},{"cat":"Sándwiches","name":"SW Mila carne + fritas","price":13000,"desc":""}],"extras":{"medallon_simple":1500,"medallon_xl":2000},"promo_updates":[{"match":["bondiola"],"price":22000}]};

  const norm = (s) => String(s || "")
    .normalize("NFD").replace(/[\u0300-\u036f]/g, "")
    .toLowerCase().replace(/[·&+]/g, " ")
    .replace(/\s+/g, " ").trim();

  const aliases = {
    "consuma cheddar bacon": ["consuma doble cheddar bacon","consuma cheddar bacon"],
    "simple cheddar": ["cheddar simple","simple cheddar"],
    "pizza lomo": ["pizza lomo","pizzalomo"],
    "sw mila pollo fritas": ["sw mila pollo fritas","sandwich de milanesa de pollo fritas","sandwich mila pollo fritas"],
    "sw mila carne fritas": ["sw mila carne fritas","sandwich de milanesa de carne fritas","sandwich mila carne fritas"]
  };

  const targetKeys = (p) => {
    const k = norm(p.name);
    return [k, ...(aliases[k] || [])];
  };

  function matches(name, p) {
    const n = norm(name);
    return targetKeys(p).some(k => n === k || n.includes(k) || k.includes(n));
  }

  function updateProductsArray(arr) {
    if (!Array.isArray(arr)) return false;
    let changed = 0;

    // Remove old empanada half/unit rows: new master menu defines docenas only.
    for (let i = arr.length - 1; i >= 0; i--) {
      const n = norm(arr[i]?.name ?? arr[i]?.n);
      if (n.includes("empanada") || norm(arr[i]?.cat ?? arr[i]?.c) === "empanadas") {
        if (n.includes("media docena") || n.includes("unidad")) {
          arr.splice(i, 1);
          changed++;
        }
      }
    }

    CFG.products.forEach(p => {
      const found = arr.find(x => matches(x?.name ?? x?.n, p));
      if (found) {
        if ("name" in found) found.name = p.name;
        if ("n" in found) found.n = p.name;
        if ("price" in found) found.price = p.price;
        if ("p" in found) found.p = p.price;
        if ("desc" in found) found.desc = p.desc;
        if ("d" in found) found.d = p.desc;
        if ("cat" in found) found.cat = p.cat;
        if ("c" in found) found.c = p.cat;
        changed++;
      }
    });
    return changed > 0;
  }

  function updateMenuObject(obj) {
    if (!obj || Array.isArray(obj) || typeof obj !== "object") return false;
    let changed = false;
    CFG.products.forEach(p => {
      const cat = Object.keys(obj).find(k => norm(k) === norm(p.cat));
      if (!cat || !Array.isArray(obj[cat])) return;
      const row = obj[cat].find(r => Array.isArray(r) && matches(r[0], p));
      if (row) {
        row[0] = p.name; row[1] = p.price; row[2] = p.desc;
        changed = true;
      }
    });
    return changed;
  }

  function updateSauces(arr) {
    if (!Array.isArray(arr)) return false;
    arr.splice(0, arr.length, ...CFG.sauces);
    return true;
  }

  function updatePromos(arr) {
    if (!Array.isArray(arr)) return false;
    let changed = false;
    for (const p of arr) {
      const nm = norm(p?.name ?? p?.n);
      if (CFG.promo_updates.some(u => u.match.some(m => nm.includes(norm(m))))) {
        if ("price" in p) p.price = 22000;
        if ("p" in p) p.p = 22000;
        changed = true;
      }
    }
    return changed;
  }

  function updateRenderedText() {
    // Safe fallback only for already-rendered known labels.
    document.querySelectorAll(".product-card,.card,.product").forEach(card => {
      const title = card.querySelector("h3")?.textContent || "";
      const p = CFG.products.find(x => matches(title, x));
      if (!p) return;
      const h = card.querySelector("h3");
      if (h) h.textContent = p.name;
      const d = card.querySelector(".desc,p");
      if (d && p.desc) d.textContent = p.desc;
      const pr = card.querySelector(".price");
      if (pr) pr.textContent = new Intl.NumberFormat("es-AR", {
        style:"currency", currency:"ARS", maximumFractionDigits:0
      }).format(p.price);
    });
  }

  function apply() {
    let touched = false;

    try { if (typeof products !== "undefined") touched = updateProductsArray(products) || touched; } catch (_) {}
    try { if (typeof PRODUCTS !== "undefined") touched = updateProductsArray(PRODUCTS) || touched; } catch (_) {}
    try { if (typeof menu !== "undefined") touched = updateMenuObject(menu) || touched; } catch (_) {}
    try { if (typeof MENU !== "undefined") touched = updateMenuObject(MENU) || touched; } catch (_) {}

    try { if (typeof sauces !== "undefined") touched = updateSauces(sauces) || touched; } catch (_) {}
    try { if (typeof aderezos !== "undefined") touched = updateSauces(aderezos) || touched; } catch (_) {}
    try { if (typeof SAUCES !== "undefined") touched = updateSauces(SAUCES) || touched; } catch (_) {}

    try { if (typeof promos !== "undefined") touched = updatePromos(promos) || touched; } catch (_) {}
    try { if (typeof PROMOS !== "undefined") touched = updatePromos(PROMOS) || touched; } catch (_) {}

    // Extra-medallón: expose values without changing existing checkout logic.
    window.CONSUMA_EXTRAS_2026 = Object.freeze({
      medallonSimple: CFG.extras.medallon_simple,
      medallonXL: CFG.extras.medallon_xl
    });

    // Re-render only if the current implementation exposes its own renderer.
    try { if (typeof buildMenu === "function") buildMenu(); } catch (_) {}
    try { if (typeof renderProducts === "function") renderProducts(); } catch (_) {}
    try { if (typeof renderChips === "function") renderChips(); } catch (_) {}
    try { if (typeof buildPromos === "function") buildPromos(); } catch (_) {}

    if (!touched) updateRenderedText();

    document.documentElement.dataset.consumaMenuVersion = CFG.version;
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", apply, { once:true });
  } else {
    apply();
  }
})();
