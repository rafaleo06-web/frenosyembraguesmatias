/* =========================================================
   BANNER DE COOKIES — Frenos y Embragues Matías
   Inserta el banner por JS para poder incluirlo con una sola
   línea <script> en todas las páginas, sin repetir el HTML.
   Guarda la elección en localStorage y actualiza Google
   Consent Mode (para AdSense) según la respuesta del usuario.
   ========================================================= */

(function () {
  var STORAGE_KEY = "fm_cookie_consent"; // "accepted" | "rejected"

  // ── Google Consent Mode v2: por defecto todo denegado ──
  // Esto debe ejecutarse ANTES de que cargue adsbygoogle.
  // Si ya tienes gtag.js instalado, esto se integra solo.
  window.dataLayer = window.dataLayer || [];
  function gtag() {
    dataLayer.push(arguments);
  }
  window.gtag = window.gtag || gtag;

  function setDefaultConsent() {
    gtag("consent", "default", {
      ad_storage: "denied",
      ad_user_data: "denied",
      ad_personalization: "denied",
      analytics_storage: "denied",
    });
  }

  function updateConsent(granted) {
    gtag("consent", "update", {
      ad_storage: granted ? "granted" : "denied",
      ad_user_data: granted ? "granted" : "denied",
      ad_personalization: granted ? "granted" : "denied",
      analytics_storage: granted ? "granted" : "denied",
    });
  }

  setDefaultConsent();

  var saved = localStorage.getItem(STORAGE_KEY);
  if (saved === "accepted") {
    updateConsent(true);
  } else if (saved === "rejected") {
    updateConsent(false);
  }

  // Si ya eligió antes, no mostramos el banner de nuevo
  if (saved) return;

  document.addEventListener("DOMContentLoaded", function () {
    var banner = document.createElement("div");
    banner.className = "cookie-banner";
    banner.setAttribute("role", "dialog");
    banner.setAttribute("aria-live", "polite");
    banner.setAttribute("aria-label", "Aviso de cookies");
    banner.innerHTML =
      '<div class="cookie-banner-inner">' +
      '<p class="cookie-text">' +
      "Usamos cookies propias y de terceros para mejorar tu experiencia y mostrar anuncios relevantes. " +
      'Puedes leer más en nuestra <a href="/legal/privacidad.html">Política de Privacidad</a>.' +
      "</p>" +
      '<div class="cookie-actions">' +
      '<button type="button" class="btn btn-ghost cookie-btn" id="cookie-reject">Rechazar</button>' +
      '<button type="button" class="btn btn-primary cookie-btn" id="cookie-accept">Aceptar</button>' +
      "</div>" +
      "</div>";
    document.body.appendChild(banner);

    // Forzar reflow antes de animar entrada
    requestAnimationFrame(function () {
      banner.classList.add("show");
    });

    function closeBanner() {
      banner.classList.remove("show");
      setTimeout(function () {
        banner.remove();
      }, 300);
    }

    document.getElementById("cookie-accept").addEventListener("click", function () {
      localStorage.setItem(STORAGE_KEY, "accepted");
      updateConsent(true);
      closeBanner();
    });

    document.getElementById("cookie-reject").addEventListener("click", function () {
      localStorage.setItem(STORAGE_KEY, "rejected");
      updateConsent(false);
      closeBanner();
    });
  });
})();
