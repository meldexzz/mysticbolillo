const handler = async (m, { conn }) => {
  const mensaje = `╔═══════════════╗
┇➤𝙏𝙄𝙀𝙉𝘿𝙄𝙏𝘼 𝘽𝙊𝙇𝙄𝙇𝙇𝙊 𝘽𝙊𝙏 🛒🥖
╚═══════════════╝

▸▸𝘾𝙊𝙈𝘼𝙉𝘿𝙊𝙎 𝘿𝙄𝙎𝙋𝙊𝙉𝙄𝘽𝙇𝙀𝙎◂◂

▸▸ 𝘾𝙊𝙈𝙋𝙍𝘼 ◂◂
│┊➺ 🛍️.𝘤𝘰𝘮𝘱𝘳𝘢𝘳
│┊➺ 📦.𝘤𝘢𝘵𝘢𝘭𝘰𝘨𝘰
╰ ∙∙∙∙∙∙∙∙∙∙∙∙∙∙∙∙∙ ∙ ∙ ∙ ∙  

▸▸ 𝙀𝙎𝙋𝙀𝘾𝙄𝘼𝙇𝙀𝙎 ◂◂
│┊➺ 🎁.𝘰𝘧𝘦𝘳𝘵𝘢𝘴
│┊➺ 🔥.𝘤𝘰𝘮𝘣𝘰𝘴
│┊➺ 🎊.𝘴𝘰𝘳𝘵𝘦𝘰
╰ ∙∙∙∙∙∙∙∙∙∙∙∙∙∙∙∙∙ ∙ ∙ ∙ ∙  

➤  𝘽𝙊𝙇𝙄𝙇𝙇𝙊 𝘽𝙊𝙏 / 𝙈𝙀𝙇𝘿𝙀𝙓𝙕𝙕 🥖`;

  await conn.sendMessage(m.chat, { text: mensaje }, { quoted: m });
};

handler.command = /^(tiendita|tienda|shop)$/i;

export default handler;
