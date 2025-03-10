let handler = async function (m, { conn, text, usedPrefix, command }) {
  // Validación de hora y tipo de partida
  let timePattern = /^([01]?[0-9]|2[0-3]):([0-5][0-9])\s?(AM|PM|am|pm)?$/;
  let args = text.split(' ');

  // Hora predeterminada
  let eventTime = "00:00";
  let partidaTipo = "-";  // Predeterminado

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

  // Validar tipo de partida (Infinito o CLK)
  const validTipos = ["infinito", "clk"];
  if (args[1] && validTipos.includes(args[1].toLowerCase())) {
    partidaTipo = args[1][0].toUpperCase() + args[1].slice(1); // Capitaliza la primera letra
  }

  // Construcción del mensaje
  let txt = `✨ ¡Lista para actividad 6vs6! ✨\n\n`;
  txt += `🥖| 𝐇𝐨𝐫𝐚 𝐝𝐞𝐥 𝐞𝐯𝐞𝐧𝐭𝐨: 🕒 ${eventTime}\n`;
  txt += `🎮| 𝐓𝐢𝐩𝐨 𝐝𝐞 𝐩𝐚𝐫𝐭𝐢𝐝𝐚: ${partidaTipo}\n\n`;

  // Agregar la escuadra
  txt += `🌟 *ESCUADRA 1:*\n`;
  txt += `   🥯\n`;
  txt += `   🥖\n`;
  txt += `   🥖\n`;
  txt += `   🥖\n`;
  txt += `   🥖\n`;
  txt += `   🥖\n\n`;

  txt += `🌟 ¡𝐍𝐨𝐬 𝐯𝐞𝐦𝐨𝐬 𝐞𝐧 𝐞𝐥 𝐣𝐮𝐞𝐠𝐨! 🌟\n`;
  txt += `𝐁𝐨𝐥𝐢𝐥𝐥𝐨 𝐛𝐨𝐭 🥖`;

  await conn.reply(m.chat, txt);  // Enviar el mensaje
}

// Configuración del comando
handler.help = ['6vs6'];
handler.tags = ['game'];
handler.command = ['6vs6'];

export default handler;
