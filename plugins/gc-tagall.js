

const handler = async (m, {isOwner, isAdmin, conn, text, participants, args, command, usedPrefix}) => {
  const datas = global
  const idioma = datas.db.data.users[m.sender].language || global.defaultLenguaje
  const _translate = JSON.parse(fs.readFileSync(`./src/languages/${idioma}.json`))
  const tradutor = _translate.plugins.gc_tagall

  if (usedPrefix == 'a' || usedPrefix == 'A') return;
  if (!(isAdmin || isOwner)) {
    global.dfail('admin', m, conn);
    throw false;
  }
  const pesan = args.join` `;
  const oi = `𝙈𝙀𝙉𝙎𝘼𝙅𝙀: ${pesan}`;
  let teks = `𝙄𝙉𝙑𝙊𝘾𝘼𝙉𝘿𝙊 𝘽𝙊𝙇𝙄𝙇𝙇𝙊𝙎\n\n  ${oi}\n\n𝙀𝙏𝙄𝙌𝙐𝙀𝙏𝘼:\n`;
  for (const mem of participants) {
   teks += `🥖 @${mem.id.split('@')[0]}\n`;
  }
  teks += ` \n 𝙈𝙚𝙡𝙙𝙚𝙭𝙯𝙯 / 𝙅𝙤𝙨𝙨\n`;
  conn.sendMessage(m.chat, {text: teks, mentions: participants.map((a) => a.id)} );
};
handler.help = ['tagall <mesaje>', 'invocar <mesaje>'];
handler.tags = ['group'];
handler.command = /^(tagall|invocar|invocacion|todos|invocación)$/i;
handler.admin = true;
handler.group = true;
export default handler;
