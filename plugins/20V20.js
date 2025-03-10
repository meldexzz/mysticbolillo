let handler = async function (m, { conn, text, usedPrefix, command }) {
  // Validación de hora
  let timePattern = /^([01]?[0-9]|2[0-3]):([0-5][0-9])\s?(AM|PM|am|pm)?$/;
  let args = text.split(' ');

  // Hora predeterminada y color de la ropa
  let eventTime = "00:00";
  let vestimenta = "No especificada";

  // Validar hora
  let timeMatch = args[0]?.match(timePattern);
  if (timeMatch) {
    let [_, hours, minutes, period] = timeMatch;
    hours = parseInt(hours);
    minutes = parseInt(minutes);

    // Ajustar formato a 12 horas si es necesario
    if (period && period.toUpperCase() === "PM" && hours < 12) {
      hours += 12;
    } else if (period && period.toUpperCase() === "AM" && hours === 12) {
      hours = 0;
    }

    // Construir la hora
    eventTime = `${hours % 24}:${minutes.toString().padStart(2, "0")} ${period ? period.toUpperCase() : ""}`.trim();
  }

  // Validar color de ropa
  const validColors = [
    "negra", "blanca", "azul", "roja", "verde", "amarilla",
    "naranja", "morado", "gris", "rosada", "café", "violeta"
  ];

  if (args[1] && validColors.includes(args[1].toLowerCase())) {
    vestimenta = args[1][0].toUpperCase() + args[1].slice(1); // Capitaliza la primera letra
  }

  // Construcción del mensaje
  let txt = `✨ ¡Lista para la actividad! ✨\n\n`;
  txt += `🥖| 𝐇𝐨𝐫𝐚 𝐝𝐞𝐥 𝐞𝐯𝐞𝐧𝐭𝐨: 🕒 ${eventTime}\n`;
  txt += `🎨| 𝐕𝐞𝐬𝐭𝐢𝐦𝐞𝐧𝐭𝐚: ${vestimenta}\n\n`;
  txt += `💎 𝐀𝐧ó𝐭𝐚𝐭𝐞 𝐩𝐚𝐫𝐚 𝐣𝐮𝐠𝐚𝐫 𝐜𝐨𝐧 𝐭𝐮 𝐞𝐪𝐮𝐢𝐩𝐨 𝐞𝐧 𝐥𝐚 𝐚𝐜𝐭𝐢𝐯𝐢𝐝𝐚𝐝.\n`;
  txt += `🥖 𝐄𝐬𝐜𝐫𝐢𝐛𝐞 𝐭𝐮 𝐧𝐨𝐦𝐛𝐫𝐞 𝐲 𝐜𝐨𝐧𝐟𝐢𝐫𝐦𝐚 𝐭𝐮 𝐩𝐚𝐫𝐭𝐢𝐜𝐢𝐩𝐚𝐜𝐢ó𝐧.\n\n`;

  // Escuadras
  for (let i = 1; i <= 4; i++) {
    txt += `🌟 *ESCUADRA ${i}:*\n`;
    txt += `   🥯\n`;
    txt += `   🥖\n`;
    txt += `   🥖\n`;
    txt += `   🥖\n\n`;
  }

  txt += `🌟 ¡𝐍𝐨𝐬 𝐯𝐞𝐦𝐨𝐬 𝐞𝐧 𝐞𝐥 𝐣𝐮𝐞𝐠𝐨! 🌟\n`;
  txt += `𝐁𝐨𝐥𝐢𝐥𝐥𝐨 𝐛𝐨𝐭 🥖`;

  await conn.reply(m.chat, txt, m);
}

handler.help = ['16vs16'];
handler.tags = ['game'];
handler.command = ['16vs16'];

export default handler;
