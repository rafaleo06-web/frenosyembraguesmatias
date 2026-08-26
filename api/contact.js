export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Método no permitido" });
  }

  const { nombre, correo, vehiculo, servicio, mensaje, empresa } = req.body;

  // Honeypot: si este campo oculto viene lleno, es un bot
  if (empresa) {
    return res.status(200).json({ ok: true });
  }

  if (!nombre || !correo || !mensaje) {
    return res.status(400).json({ error: "Faltan campos obligatorios" });
  }

  try {
    const respuesta = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${process.env.RESEND_API_KEY}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        from: "Formulario Web <onboarding@resend.dev>",
        to: ["frenosyembraguesmatias@gmail.com"],
        reply_to: telefono, // opcional, no es email pero sirve de referencia
        subject: `Cotización de ${nombre}`,
        html: `
          <h2>Cotización desde el sitio web</h2>
          <p><strong>Nombre:</strong> ${nombre}</p>
          <p><strong>Correo:</strong> ${correo}</p>
          <p><strong>Vehículo:</strong> ${vehiculo || "No especificado"}</p>
          <p><strong>Servicio:</strong> ${servicio || "No especificado"}</p>
          <p><strong>Mensaje:</strong><br>${mensaje}</p>
        `,
      }),
    });

    if (!respuesta.ok) {
      const error = await respuesta.text();
      console.error("Error Resend:", error);
      return res.status(502).json({ error: "No se pudo enviar el correo" });
    }

    return res.status(200).json({ ok: true });
  } catch (err) {
    console.error("Error interno:", err);
    return res.status(500).json({ error: "Error interno del servidor" });
  }
}
