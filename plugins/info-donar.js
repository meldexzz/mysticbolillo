let media = img.getRandom()
let handler = async (m, { conn, command }) => {
//let pp = './src/apoyo.jpg'
let name = await conn.getName(m.sender)
await conn.sendMessage(m.chat, { 
text: `*\`[ ＤＯＮＡＣＩＯＮ  ]\`*

✨ ¡𝘏𝘰𝘭𝘢 ${name}! ✨

¡𝘎𝘳𝘢𝘤𝘪𝘢𝘴 𝘱𝘰𝘳 𝘶𝘴𝘢𝘳 *${wm}*, 𝘵𝘶 𝘣𝘰𝘵 𝘧𝘢𝘷𝘰𝘳𝘪𝘵𝘰! 🌟 𝘛𝘶 𝘢𝘱𝘰𝘺𝘰 𝘦𝘴 𝘧𝘶𝘯𝘥𝘢𝘮𝘦𝘯𝘵𝘢𝘭 𝘱𝘢𝘳𝘢 𝘮𝘢𝘯𝘵𝘦𝘯𝘦𝘳 𝘦𝘴𝘵𝘦 𝘱𝘳𝘰𝘺𝘦𝘤𝘵𝘰 𝘦𝘯 𝘮𝘢𝘳𝘤𝘩𝘢 𝘺 𝘴𝘪𝘦𝘮𝘱𝘳𝘦 𝘢𝘤𝘵𝘶𝘢𝘭𝘪𝘻𝘢𝘥𝘰. 𝘚𝘪 𝘲𝘶𝘪𝘦𝘳𝘦𝘴 𝘤𝘰𝘯𝘵𝘳𝘪𝘣𝘶𝘪𝘳 𝘺 𝘴𝘦𝘳 𝘱𝘢𝘳𝘵𝘦 𝘥𝘦 𝘦𝘴𝘵𝘢 𝘢𝘷𝘦𝘯𝘵𝘶𝘳𝘢, 𝘱𝘶𝘦𝘥𝘦𝘴 𝘩𝘢𝘤𝘦𝘳𝘭𝘰 𝘢 𝘵𝘳𝘢𝘷𝘦́𝘴 𝘥𝘦 𝘗𝘢𝘺𝘗𝘢𝘭 𝘰 𝘛𝘳𝘢𝘯𝘴𝘧𝘦𝘳𝘦𝘯𝘤𝘪𝘢. 🙏

──────────────

*💸 𝘗𝘢𝘺𝘗𝘢𝘭:* https://paypal.me/meldexz
*💸 𝘛𝘳𝘢𝘯𝘴𝘧𝘦𝘳𝘦𝘯𝘤𝘪𝘢:*
*• 𝘈𝘭𝘪𝘢𝘴:* Meldexzz
*• Num:* 638180000165564870

──────────────

🔗 *𝘌𝘯𝘭𝘢𝘤𝘦𝘴 𝘖𝘧𝘪𝘤𝘪𝘢𝘭𝘦𝘴 𝘦𝘯 𝘶𝘯 𝘜́𝘯𝘪𝘤𝘰 𝘓𝘶𝘨𝘢𝘳:*

https://linktr.ee/ventasbolillobot

──────────────

*ＡＧＲＡＤＥＣＩＭＩＥＮＴＯ*

*${wm}* 𝙏𝙄𝙀𝙉𝙀 𝙁𝙐𝙉𝘾𝙄𝙊𝙉𝙀𝙎 𝙄𝙉𝘾𝙍𝙀Í𝘽𝙇𝙀𝙎, 𝘿𝙀𝙎𝘼𝙍𝙍𝙊𝙇𝙇𝘼𝘿𝘼𝙎 𝙋𝙊𝙍 𝙋𝙀𝙍𝙎𝙊𝙉𝘼𝙎 𝙄𝙉𝘾𝙍𝙀Í𝘽𝙇𝙀𝙎:

𝙈𝙀𝙇𝘿𝙀𝙓𝙕𝙕 / 𝙅𝙊𝙎𝙎

> ɢʀᴀᴄɪᴀs 💕`, 
contextInfo:{
forwardingScore: 9999999,
isForwarded: true, 
mentionedJid:[m.sender],
"externalAdReply": {
"showAdAttribution": true,
"renderLargerThumbnail": true,
"thumbnail": imagen3, 
"title": '𝘽𝙊𝙇𝙄𝙇𝙇𝙊 𝘽𝙊𝙏 🥖', 
"containsAutoReply": true,
"mediaType": 1, 
"mediaUrl": md, 
"sourceUrl": md, 
}}}, { quoted: m })
// await conn.sendButton(m.chat, `a`, `https://paypal.me/OficialGD`, pp, [['𝙑𝙤𝙡𝙫𝙚𝙧 𝙖𝙡 𝙈𝙚𝙣𝙪́ ☘️', `/menu`]], m) //[['𝙑𝙤𝙡𝙫𝙚𝙧 𝙖𝙡 𝙈𝙚𝙣𝙪́ ☘️', `/menu`]]
/*await conn.sendHydrated(m.chat, str, wm, media, 'https://github.com/elrebelde21/The-LoliBot-MD', 'ɢɪᴛʜᴜʙ', null, null, [
['𝙂𝙧𝙪𝙥𝙤𝙨 𝙊𝙛𝙞𝙘𝙞𝙖𝙡𝙚𝙨 🔰', '.grupos'],
['𝘾𝙧𝙚𝙖𝙙𝙤𝙧 💗', '#owner'],
['𝙑𝙤𝙡𝙫𝙚𝙧 𝙖𝙡 𝙈𝙚𝙣𝙪́ ☘️', '/menu']
], m,)}*/
}
handler.help = ['donar']
handler.tags = ['main']
handler.command = /^dona(te|si)|donar|apoyar|paypal|donating|creditos$/i
handler.exp = 600
handler.register = true
export default handler


/*
//await conn.sendButton(m.chat, wm, `https://paypal.me/OficialGD`, pp, m)
await conn.sendButton(m.chat, ``, `https://paypal.me/OficialGD`, pp, [['𝙑𝙤𝙡𝙫𝙚𝙧 𝙖𝙡 𝙈𝙚𝙣𝙪́ ☘️', `/menu`]], m) //[['𝙑𝙤𝙡𝙫𝙚𝙧 𝙖𝙡 𝙈𝙚𝙣𝙪́ ☘️', `/menu`]]
  */