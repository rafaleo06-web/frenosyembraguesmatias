document.addEventListener("DOMContentLoaded", function () {
  var toggle = document.querySelector(".nav-toggle");
  var links = document.querySelector(".nav-links");
  if (toggle && links) {
    toggle.addEventListener("click", function () {
      links.classList.toggle("open");
      var expanded = links.classList.contains("open");
      toggle.setAttribute("aria-expanded", expanded);
    });
    links.querySelectorAll("a").forEach(function (a) {
      a.addEventListener("click", function () {
        links.classList.remove("open");
      });
    });
  }

  // Formulario de contacto: validación simple + mensaje de confirmación (sin backend)
  // Formulario de contacto: envío real vía /api/contact (Resend)
  var form = document.getElementById("contact-form");
  if (form) {
    form.addEventListener("submit", function (e) {
      e.preventDefault();
      var status = document.getElementById("form-status");
      var boton = form.querySelector('button[type="submit"]');
      var datos = Object.fromEntries(new FormData(form));

      boton.disabled = true;
      status.style.color = "";
      status.textContent = "Enviando...";

      fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(datos),
      })
        .then(function (respuesta) {
          if (!respuesta.ok) throw new Error("Error en el envío");
          status.textContent = "¡Gracias! Te contactaremos pronto.";
          status.style.color = "green";
          form.reset();
        })
        .catch(function () {
          status.textContent = "Hubo un problema al enviar. Escríbenos directo por WhatsApp.";
          status.style.color = "crimson";
        })
        .finally(function () {
          boton.disabled = false;
        });
    });
  }

  // Año dinámico en footer
  document.querySelectorAll(".year").forEach(function (el) {
    el.textContent = new Date().getFullYear();
  });
});

