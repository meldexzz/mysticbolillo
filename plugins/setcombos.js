let handler = async (m, { conn, text, isROwner, isOwner }) => {

if (text) {
global.db.data.chats[m.chat].setCombos = text
conn.reply(m.chat, '𝙇𝙤𝙨 𝙘𝙤𝙢𝙗𝙤𝙨 𝙝𝙖𝙣 𝙨𝙞𝙙𝙤 𝙖𝙘𝙩𝙪𝙖𝙡𝙞𝙯𝙖𝙙𝙤𝙨.🥖', m)

} else throw `𝙀𝙨𝙘𝙧𝙞𝙗𝙚 𝙡𝙤𝙨 𝙘𝙤𝙢𝙗𝙤𝙨 𝙦𝙪𝙚 𝙙𝙚𝙨𝙚𝙖𝙨 𝙚𝙨𝙩𝙖𝙗𝙡𝙚𝙘𝙚𝙧 𝙚𝙣 𝙚𝙨𝙩𝙚 𝙜𝙧𝙪𝙥𝙤, 𝙚𝙟𝙚𝙢𝙥𝙡𝙤: 
.𝙨𝙚𝙩𝙘𝙤𝙢𝙗 𝙉𝙚𝙩𝙛𝙡𝙞𝙭 + 𝘿𝙞𝙨𝙣𝙚𝙮 🥖`
}


handler.command = ['setcomb'] 
handler.admin = true
handler.group = true
export default handler