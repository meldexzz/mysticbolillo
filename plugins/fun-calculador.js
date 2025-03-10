import fs from "fs";

const handler = async (m, { conn, command, text }) => {
  const datas = global;
  const idioma = datas.db.data.users[m.sender].language || global.defaultLenguaje;
  const _translate = JSON.parse(fs.readFileSync(`./src/languages/${idioma}.json`));
  const tradutor = _translate.plugins.fun_calculador;

  if (!text) throw `${tradutor.texto26}`;

  // 🔹 Generar porcentaje correcto entre 0 y 100
  const percentages = Math.floor(Math.random() * 101);
  let emoji = '';
  let description = '';

  // Obtener el nombre del contacto de WhatsApp
  const userTag = text.trim();  // El nombre de usuario que se pasa después del comando
  const contactName = await conn.getName(userTag + '@s.whatsapp.net'); // Obtener el nombre del contacto usando su número

  switch (command) {
    case 'gay2':
      emoji = '🏳️‍🌈';
      description = `@${contactName} es ${percentages}% Gay. ${emoji}`;
      break;
    case 'lesbiana':
      emoji = '🏳️‍🌈';
      description = `@${contactName} es ${percentages}% Lesbiana. ${emoji}`;
      break;
    case 'pajero':
    case 'pajera':
      emoji = '😏💦';
      description = `@${contactName} es ${percentages}% ${command}. ${emoji}`;
      break;
    case 'puto':
    case 'puta':
      emoji = '🔥🥵';
      description = `@${contactName} es ${percentages}% ${command}. ${emoji}`;
      break;
    case 'manco':
    case 'manca':
      emoji = '💩';
      description = `@${contactName} es ${percentages}% ${command}. ${emoji}`;
      break;
    case 'rata':
      emoji = '🐁';
      description = `@${contactName} es ${percentages}% Rata. ${emoji}`;
      break;
    case 'prostituto':
    case 'prostituta':
      emoji = '🫦👅';
      description = `@${contactName} es ${percentages}% ${command}. ${emoji}`;
      break;
    default:
      throw `${tradutor.texto22}`;
  }

  // Enviar el resultado directamente etiquetando al usuario por su nombre de WhatsApp
  await conn.sendMessage(m.chat, { text: description, mentions: [userTag + '@s.whatsapp.net'] }, { quoted: m });
};

handler.help = ['gay2', 'lesbiana', 'pajero', 'pajera', 'puto', 'puta', 'manco', 'manca', 'rata', 'prostituta', 'prostituto'].map((v) => v + ' @tag | nombre');
handler.tags = ['calculator'];
handler.command = /^(gay2|lesbiana|pajero|pajera|puto|puta|manco|manca|rata|prostituta|prostituto)$/i;
export default handler;

