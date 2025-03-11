const handler = async (m, { conn, args }) => {
  if (args.length < 2) {
    return await conn.sendMessage(m.chat, { text: '❌ Debes escribir el horario y el color de vestimenta. Ejemplo:\n\n.24vs24 23:45 negra' });
  }

  let horaMex = args[0]; // Hora ingresada (México)
  let colorVestimenta = args[1].toUpperCase(); // Color ingresado en mayúsculas

  // Validar formato de hora (HH:MM)
  if (!/^\d{1,2}:\d{2}$/.test(horaMex)) {
    return await conn.sendMessage(m.chat, { text: '⚠️ Formato de hora inválido. Usa HH:MM. Ejemplo:\n\n.24vs24 23:45 negra' });
  }

  // Convertir hora de México a Colombia (-1 hora de diferencia)
  let [horas, minutos] = horaMex.split(':').map(Number);
  let horaCol = (horas - 1 + 24) % 24; // Ajuste para evitar valores negativos

  // Formatear la hora (asegurar que siempre tenga 2 dígitos)
  let horaColStr = `${horaCol.toString().padStart(2, '0')}:${minutos.toString().padStart(2, '0')}`;

  // Mensaje actualizado con seis escuadras de 4 jugadores cada una y 4 suplentes
  let lista = `
╭──────⚔──────╮
┇➤ 24 𝐕𝐒 24  
╰──────⚔──────╯

╭────────────╮
┇➤ ⏱ 𝐇𝐎𝐑𝐀𝐑𝐈𝐎  
┇➤ 🇲🇽 𝐌𝐄𝐗 : ${horaMex}  
┇➤ 🇨🇴 𝐂𝐎𝐋 : ${horaColStr}  
┇➤ 🎽 𝐕𝐄𝐒𝐓𝐈𝐌𝐄𝐍𝐓𝐀: ${colorVestimenta}  
╰────────────╯

╭───🏆 𝐄𝐒𝐂𝐔𝐀𝐃𝐑𝐀 𝟏 ───╮
┇➥ 👨🏻‍💻 ➤  
┇➥ 👨🏻‍💻 ➤  
┇➥ 👨🏻‍💻 ➤  
┇➥ 👨🏻‍💻 ➤  
╰────────────╯

╭───🔥 𝐄𝐒𝐂𝐔𝐀𝐃𝐑𝐀 𝟐 ───╮
┇➥ 👨🏻‍💻 ➤  
┇➥ 👨🏻‍💻 ➤  
┇➥ 👨🏻‍💻 ➤  
┇➥ 👨🏻‍💻 ➤  
╰────────────╯

╭───⚡ 𝐄𝐒𝐂𝐔𝐀𝐃𝐑𝐀 𝟑 ───╮
┇➥ 👨🏻‍💻 ➤  
┇➥ 👨🏻‍💻 ➤  
┇➥ 👨🏻‍💻 ➤  
┇➥ 👨🏻‍💻 ➤  
╰────────────╯

╭───💀 𝐄𝐒𝐂𝐔𝐀𝐃𝐑𝐀 𝟒 ───╮
┇➥ 👨🏻‍💻 ➤  
┇➥ 👨🏻‍💻 ➤  
┇➥ 👨🏻‍💻 ➤  
┇➥ 👨🏻‍💻 ➤  
╰────────────╯

╭───👑 𝐄𝐒𝐂𝐔𝐀𝐃𝐑𝐀 𝟓 ───╮
┇➥ 👨🏻‍💻 ➤  
┇➥ 👨🏻‍💻 ➤  
┇➥ 👨🏻‍💻 ➤  
┇➥ 👨🏻‍💻 ➤  
╰────────────╯

╭───🎯 𝐄𝐒𝐂𝐔𝐀𝐃𝐑𝐀 𝟔 ───╮
┇➥ 👨🏻‍💻 ➤  
┇➥ 👨🏻‍💻 ➤  
┇➥ 👨🏻‍💻 ➤  
┇➥ 👨🏻‍💻 ➤  
╰────────────╯

╭───🔄 𝐒𝐔𝐏𝐋𝐄𝐍𝐓𝐄𝐒 ───╮
┇➥ 👨🏻‍💼 ➤  
┇➥ 👨🏻‍💼 ➤  
┇➥ 👨🏻‍💼 ➤  
┇➥ 👨🏻‍💼 ➤  
╰────────────╯

➤ 𝘽𝙊𝙇𝙄𝙇𝙇𝙊 𝘽𝙊𝙏 / 𝙈𝙀𝙇𝘿𝙀𝙓𝙕𝙕 / 𝙅𝙊𝙎𝙎 🥖
  `.trim();

  await conn.sendMessage(m.chat, { text: lista });
};

handler.command = /^(24vs24)$/i;
export default handler;
