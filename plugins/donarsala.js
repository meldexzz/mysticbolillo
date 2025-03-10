let handler = async function (m, { conn, text, participants }) {
  // Validación de hora en formato 12 horas (hh:mm AM/PM)
  let timePattern = /^([01]?[0-9]|1[0-2]):([0-5][0-9])\s?(AM|PM|am|pm)$/;
  let timeMatch = text.match(timePattern);

  // Si no se proporciona una hora válida, responder con un mensaje de error
  if (!timeMatch) {
    return conn.reply(m.chat, "🚩 Debes escribir la hora en formato 12 horas. Ejemplo: `.donarsala 10:30 PM`", m);
  }

  // Obtener la hora correctamente formateada
  let eventTime = timeMatch[0].toUpperCase();

  // Obtener un usuario al azar del grupo (excluyendo al bot)
  let members = participants.filter(p => p.id !== conn.user.jid);
  let randomUser = members[Math.floor(Math.random() * members.length)];

  if (!randomUser) {
    return conn.reply(m.chat, "🚩 No hay suficientes participantes en el grupo para elegir.", m);
  }

  let message = `✨ *¡Elección del Olimpo!*\n\n`;
  message += `🕒| 𝐇𝐨𝐫𝐚 𝐝𝐞 𝐥𝐚 𝐬𝐚𝐥𝐚: ${eventTime}\n\n`;
  message += `🎖️ *@${randomUser.id.split('@')[0]}*, te han elegido los antiguos *Bolillos del Olimpo*.\n`;
  message += `🔥 ¡Pon sala y créala ya! 🔥`;

  await conn.reply(m.chat, message, m, { mentions: [randomUser.id] });
}

handler.help = ['donarsala (hora en formato 12h)'];
handler.tags = ['game'];
handler.command = ['donarsala'];

handler.group = true; // Solo funciona en grupos

export default handler;
