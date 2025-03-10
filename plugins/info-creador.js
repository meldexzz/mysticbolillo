


const handler = async (m, { conn }) => {
  const text = "𝙈𝙄 𝘾𝙍𝙀𝘼𝘿𝙊𝙍 𝙀𝙎: +52 5649707515\n\n𝙂𝙐𝘼𝙋𝙊, 𝙋𝙍𝙀𝘾𝙄𝙊𝙎𝙊 𝙔 𝙃𝙀𝙍𝙈𝙊𝙎𝙊.";
  await conn.sendMessage(m.chat, { text }, { quoted: m });
};

handler.command = /^(owner|creator|creador|propietario)$/i;
export default handler;
