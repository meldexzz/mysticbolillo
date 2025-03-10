import fetch from 'node-fetch';
import fs from 'fs';

if (!db.data.chats[m.chat].modohorny && m.isGroup) throw `${tradutor.texto1[0]} ${usedPrefix}enable modohorny*`; 
const handler = async (m, { conn, usedPrefix }) => {
  try {
    // Definir la imagen correctamente
    const pp = './src/assets/images/menu/languages/es/menu.png'; // Cambia esto por la ruta correcta de tu imagen

    // Leer el idioma del usuario
    const idioma = global.db.data.users[m.sender]?.language || global.defaultLenguaje;
    const _translate = JSON.parse(fs.readFileSync(`./src/languages/${idioma}.json`));
    const tradutor = _translate.plugins.menu_anime;

    // Datos del usuario
    const user = global.db.data.users[m.sender] || {};
    const { money, joincount, exp, limit, level, role } = user;

    // Fecha y tiempo
    const d = new Date();
    const locale = 'es';
    const week = d.toLocaleDateString(locale, { weekday: 'long' });
    const date = d.toLocaleDateString(locale, { day: 'numeric', month: 'long', year: 'numeric' });
    const uptime = clockString(process.uptime() * 1000);

    // Generar mensaje
    const taguser = '@' + m.sender.split('@s.whatsapp.net')[0];
    const str = `

      𝘽𝙊𝙇𝙄𝙇𝙇𝙊 𝘽𝙊𝙏 🥖

 ${tradutor.texto1?.[1] || '¡Hola!'}, ${taguser}


┏━━━━━━━━━━━━━━┓
┃ *< ${tradutor.texto1?.[0] || 'MENU LA BIBLIA'} />*
┣ ඬ⃟ 🔞 _${usedPrefix}pack_
┣ ඬ⃟ 🔞 _${usedPrefix}pack2_
┣ ඬ⃟ 🔞 _${usedPrefix}pack3_
┣ ඬ⃟ 🔞 _${usedPrefix}videoxxx_
┣ ඬ⃟ 🔞 _${usedPrefix}videolesbixxx_
┣ ඬ⃟ 🔞 _${usedPrefix}tetas_
┣ ඬ⃟ 🔞 _${usedPrefix}booty_
┣ ඬ⃟ 🔞 _${usedPrefix}ecchi_
┣ ඬ⃟ 🔞 _${usedPrefix}furro_
┣ ඬ⃟ 🔞 _${usedPrefix}imagenlesbians_
┣ ඬ⃟ 🔞 _${usedPrefix}panties_
┣ ඬ⃟ 🔞 _${usedPrefix}pene_
┣ ඬ⃟ 🔞 _${usedPrefix}porno_
┣ ඬ⃟ 🔞 _${usedPrefix}randomxxx_
┣ ඬ⃟ 🔞 _${usedPrefix}pechos_
┣ ඬ⃟ 🔞 _${usedPrefix}yaoi_
┣ ඬ⃟ 🔞 _${usedPrefix}yaoi2_
┣ ඬ⃟ 🔞 _${usedPrefix}yuri_
┣ ඬ⃟ 🔞 _${usedPrefix}yuri2_
┣ ඬ⃟ 🔞 _${usedPrefix}trapito_
┣ ඬ⃟ 🔞 _${usedPrefix}hentai_
┣ ඬ⃟ 🔞 _${usedPrefix}nsfwloli_
┣ ඬ⃟ 🔞 _${usedPrefix}nsfworgy_
┣ ඬ⃟ 🔞 _${usedPrefix}nsfwfoot_
┣ ඬ⃟ 🔞 _${usedPrefix}nsfwass_
┣ ඬ⃟ 🔞 _${usedPrefix}nsfwbdsm_
┣ ඬ⃟ 🔞 _${usedPrefix}nsfwcum_
┣ ඬ⃟ 🔞 _${usedPrefix}nsfwero_
┣ ඬ⃟ 🔞 _${usedPrefix}nsfwfemdom_
┣ ඬ⃟ 🔞 _${usedPrefix}nsfwglass_
┣ ඬ⃟ 🔞 _${usedPrefix}hentaipdf *<texto>*_
┣ ඬ⃟ 🔞 _${usedPrefix}hentaisearch *<texto>*_
┗━━━━━━━━━━━━━━┛`.trim();

    // Enviar el mensaje con la imagen
    const fkontak2 = {
      key: { participants: '0@s.whatsapp.net', remoteJid: 'status@broadcast', fromMe: false, id: 'Halo' },
      message: {
        contactMessage: {
          vcard: `BEGIN:VCARD\nVERSION:3.0\nN:Sy;Bot;;;\nFN:y\nTEL;waid=${m.sender.split('@')[0]}:${m.sender.split('@')[0]}\nEND:VCARD`
        }
      },
      participant: '0@s.whatsapp.net'
    };

    await conn.sendMessage(m.chat, { image: { url: pp }, caption: str, mentions: [m.sender] }, { quoted: fkontak2 });
  } catch (error) {
    console.error('❌ Error en el menú:', error);
    conn.reply(m.chat, tradutor.texto1?.[3] || 'Hubo un error al generar el menú.', m);
  }
};

// Comandos del handler
handler.command = /^(biblia|labiblia)$/i;
handler.exp = 50;
handler.fail = null;
export default handler;

// Función para formatear el tiempo
function clockString(ms) {
  if (isNaN(ms)) return '--:--:--';
  const h = Math.floor(ms / 3600000);
  const m = Math.floor((ms / 60000) % 60);
  const s = Math.floor((ms / 1000) % 60);
  return [h, m, s].map((v) => v.toString().padStart(2, '0')).join(':');
}

