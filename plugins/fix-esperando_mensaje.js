import { readdirSync, unlinkSync, existsSync, promises as fs, rmSync } from 'fs';
import path from 'path';

const handler = async (m, { conn, usedPrefix }) => {
if (global.conn.user.jid !== conn.user.jid) {
return conn.sendMessage(m.chat, {text: '*⚠️ Utiliza este comando directamente en el número principal del Bot*'}, {quoted: m})}
const chatId = m.isGroup ? [m.chat, m.sender] : [m.sender];
const sessionPath = './sessions'
try {
const files = await fs.readdir(sessionPath);
let filesDeleted = 0;
for (const file of files) {
for (const id of chatId) {
if (file.includes(id.split('@')[0])) {
await fs.unlink(path.join(sessionPath, file));
filesDeleted++;
break;
}}} 
if (filesDeleted === 0) {
await conn.sendMessage(m.chat, {text: '*No se encontró ningún archivo que incluya la ID del chat*'}, {quoted: m});
} else {
await conn.sendMessage(m.chat, {text: `*Se eliminaron ${filesDeleted} archivos de sesión*`}, {quoted: m})
}} catch (err) {
console.error('Error al leer la carpeta o los archivos de sesión:', err);
await conn.sendMessage(m.chat, {text: '𝘼𝙧𝙘𝙝𝙞𝙫𝙤𝙨 𝙙𝙚 𝙨𝙚𝙨𝙞ó𝙣 𝙚𝙡𝙞𝙢𝙞𝙣𝙖𝙙𝙤𝙨 𝙘𝙤𝙧𝙧𝙚𝙘𝙩𝙖𝙢𝙚𝙣𝙩𝙚. 🥖'}, {quoted: m});
}
await conn.sendMessage(m.chat, {text: `¿𝙔𝙖 𝙢𝙚 𝙫𝙚𝙨, 𝙗𝙤𝙡𝙞𝙡𝙡𝙤?. 🥖`}, {quoted: m});
};
handler.help = ['ds']
handler.tags = ['tools']
handler.command = /^(fixmsgespera|ds)$/i;
export default handler;
