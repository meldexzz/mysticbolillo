let handler = async (m, { conn, participants, usedPrefix, command, isROwner }) => {
let kickte = `¿𝘈 𝘲𝘶𝘪𝘦𝘯 𝘦𝘭𝘪𝘮𝘪𝘯ó?, 𝘦𝘵𝘪𝘲𝘶𝘦𝘵𝘢 𝘢 𝘶𝘯𝘢 𝘱𝘦𝘳𝘴𝘰𝘯𝘢 𝘤𝘰𝘯 @ 🥖`
if (!m.mentionedJid[0] && !m.quoted) return m.reply(kickte, m.chat, { mentions: conn.parseMention(kickte)}) 
let user = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted.sender
let owr = m.chat.split`-`[0]
await conn.groupParticipantsUpdate(m.chat, [user], 'remove')}
handler.help = ['kick *@user*']
handler.tags = ['group']
handler.command = ['kick', 'expulsar'] 
handler.admin = true
handler.group = true
handler.botAdmin = true
handler.register = false 
export default handler
