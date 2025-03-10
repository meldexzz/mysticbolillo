

const handler = async (m, {conn, usedPrefix, command, args, isOwner, isAdmin, isROwner}) => {
  const datas = global
  const idioma = datas.db.data.users[m.sender].language || global.defaultLenguaje
  const _translate = JSON.parse(fs.readFileSync(`./src/languages/${idioma}.json`))
  const tradutor = _translate.plugins.config_funciones


const optionsFull = `▸▸ 𝙁𝙐𝙉𝘾𝙄𝙊𝙉𝙀𝙎 𝘽𝙔 𝘽𝙊𝙇𝙄𝙇𝙇𝙊𝘽𝙊𝙏 ◂◂
 
│┊➺ 👨🏻‍💻 𝙊𝙥𝙘𝙞𝙤𝙣  | 𝙒𝙀𝙇𝘾𝙊𝙈𝙀
│┊➺ 👨🏻‍💻 𝘾𝙤𝙢𝙖𝙣𝙙𝙤 | .𝙚𝙣𝙖𝙗𝙡𝙚 𝙬𝙚𝙡𝙘𝙤𝙢𝙚
│┊➺ 👨🏻‍💻 𝙁𝙪𝙣𝙘𝙞𝙤𝙣 | 𝘼𝙘𝙩𝙞𝙫𝙖 𝙤 𝙙𝙚𝙨𝙖𝙘𝙩𝙞𝙫𝙖 𝙡𝙖 𝙗𝙞𝙚𝙣𝙫𝙚𝙣𝙞𝙙𝙖 𝙚𝙣 𝙚𝙡 𝙜𝙧𝙪𝙥𝙤.
--------------------------------

│┊➺ 👨🏻‍💻 𝙊𝙥𝙘𝙞𝙤𝙣 | 𝙋𝙐𝘽𝙇𝙄𝘾
│┊➺ 👨🏻‍💻 𝘾𝙤𝙢𝙖𝙣𝙙𝙤 | .𝙚𝙣𝙖𝙗𝙡𝙚 𝙥𝙪𝙗𝙡𝙞𝙘
│┊➺ 👨🏻‍💻 𝙁𝙪𝙣𝙘𝙞𝙤𝙣 | 𝙀𝙡 𝙗𝙤𝙩 𝙨𝙚 𝙫𝙪𝙚𝙡𝙫𝙚 𝙙𝙚 𝙪𝙨𝙤 𝙥𝙪𝙗𝙡𝙞𝙘𝙤 𝙮/𝙤 𝙥𝙧𝙞𝙫𝙖𝙙𝙤.
│┊➺ 📝 𝙉𝙤𝙩𝙖 | 𝙀𝙨𝙩𝙚 𝙘𝙤𝙢𝙖𝙣𝙙𝙤 𝙨𝙤𝙡𝙤 𝙥𝙪𝙚𝙙𝙚 𝙨𝙚𝙧 𝙪𝙨𝙖𝙙𝙤 𝙥𝙤𝙧 𝙚𝙡/𝙡𝙤𝙨 𝙥𝙧𝙤𝙥𝙞𝙚𝙩𝙖𝙧𝙞𝙤(𝙨) 𝙙𝙚𝙡 𝙗𝙤𝙩.
--------------------------------

│┊➺ 👨🏻‍💻 𝙊𝙥𝙘𝙞𝙤𝙣 | 𝙈𝙊𝘿𝙊𝙃𝙊𝙍𝙉𝙔
│┊➺ 👨🏻‍💻 𝘾𝙤𝙢𝙖𝙣𝙙𝙤 | .𝙚𝙣𝙖𝙗𝙡𝙚 𝙢𝙤𝙙𝙤𝙝𝙤𝙧𝙣𝙮
│┊➺ 👨🏻‍💻 𝙁𝙪𝙣𝙘𝙞𝙤𝙣 | 𝘼𝙘𝙩𝙞𝙫𝙖 𝙤 𝙙𝙚𝙨𝙖𝙘𝙩𝙞𝙫𝙖 𝙡𝙤𝙨 𝙘𝙤𝙢𝙖𝙣𝙙𝙤𝙨 +18 𝙚𝙣 𝙚𝙡 𝙜𝙧𝙪𝙥𝙤.
--------------------------------

│┊➺ 👨🏻‍💻 𝙊𝙥𝙘𝙞𝙤𝙣 | 𝘼𝙉𝙏𝙄𝙇𝙄𝙉𝙆
│┊➺ 👨🏻‍💻 𝘾𝙤𝙢𝙖𝙣𝙙𝙤 | .𝙚𝙣𝙖𝙗𝙡𝙚 𝙖𝙣𝙩𝙞𝙡𝙞𝙣𝙠
│┊➺ 👨🏻‍💻 𝙁𝙪𝙣𝙘𝙞𝙤𝙣 | 𝘼𝙘𝙩𝙞𝙫𝙖 𝙤 𝙙𝙚𝙨𝙖𝙘𝙩𝙞𝙫𝙖 𝙚𝙡 𝙖𝙣𝙩𝙞-𝙚𝙣𝙡𝙖𝙘𝙚𝙨 𝙙𝙚 𝙒𝙝𝙖𝙩𝙨𝘼𝙥𝙥.
│┊➺ 📝 𝙉𝙤𝙩𝙖 | 𝙎𝙚 𝙣𝙚𝙘𝙚𝙨𝙞𝙩𝙖 𝙩𝙚𝙣𝙚𝙧 𝙖𝙘𝙩𝙞𝙫𝙖 𝙡𝙖 𝙛𝙪𝙣𝙘𝙞ó𝙣 𝙧𝙚𝙨𝙩𝙧𝙞𝙘𝙩.
--------------------------------

│┊➺ 👨🏻‍💻 𝙊𝙥𝙘𝙞𝙤𝙣 | 𝘼𝙉𝙏𝙄𝙇𝙄𝙉𝙆 2
│┊➺ 👨🏻‍💻 𝘾𝙤𝙢𝙖𝙣𝙙𝙤 | .𝙚𝙣𝙖𝙗𝙡𝙚 𝙖𝙣𝙩𝙞𝙡𝙞𝙣𝙠2
│┊➺ 👨🏻‍💻 𝙁𝙪𝙣𝙘𝙞𝙤𝙣 | 𝘼𝙘𝙩𝙞𝙫𝙖 𝙤 𝙙𝙚𝙨𝙖𝙘𝙩𝙞𝙫𝙖 𝙚𝙡 𝙖𝙣𝙩𝙞-𝙚𝙣𝙡𝙖𝙘𝙚𝙨 𝙦𝙪𝙚 𝙞𝙣𝙞𝙘𝙞𝙖𝙣 𝙚𝙣 𝙃𝙏𝙏𝙋𝙎.
│┊➺ 📝 𝙉𝙤𝙩𝙖 | 𝙎𝙚 𝙣𝙚𝙘𝙚𝙨𝙞𝙩𝙖 𝙩𝙚𝙣𝙚𝙧 𝙖𝙘𝙩𝙞𝙫𝙖 𝙡𝙖 𝙛𝙪𝙣𝙘𝙞ó𝙣 𝙧𝙚𝙨𝙩𝙧𝙞𝙘𝙩.
--------------------------------

│┊➺ 👨🏻‍💻 𝙊𝙥𝙘𝙞𝙤𝙣 | 𝘿𝙀𝙏𝙀𝘾𝙏
│┊➺ 👨🏻‍💻 𝘾𝙤𝙢𝙖𝙣𝙙𝙤 | .𝙚𝙣𝙖𝙗𝙡𝙚 𝙙𝙚𝙩𝙚𝙘𝙩
│┊➺ 👨🏻‍💻 𝙁𝙪𝙣𝙘𝙞𝙤𝙣 | 𝘼𝙘𝙩𝙞𝙫𝙖 𝙤 𝙙𝙚𝙨𝙖𝙘𝙩𝙞𝙫𝙖 𝙡𝙖𝙨 𝙣𝙤𝙩𝙞𝙛𝙞𝙘𝙖𝙘𝙞𝙤𝙣𝙚𝙨 𝙙𝙚 𝙘𝙖𝙢𝙗𝙞𝙤𝙨 𝙚𝙣 𝙚𝙡 𝙜𝙧𝙪𝙥𝙤.
--------------------------------

│┊➺ 👨🏻‍💻 𝙊𝙥𝙘𝙞𝙤𝙣 | 𝘿𝙀𝙏𝙀𝘾𝙏 2
│┊➺ 👨🏻‍💻 𝘾𝙤𝙢𝙖𝙣𝙙𝙤 | .𝙚𝙣𝙖𝙗𝙡𝙚 𝙙𝙚𝙩𝙚𝙘𝙩2
│┊➺ 👨🏻‍💻 𝙁𝙪𝙣𝙘𝙞𝙤𝙣 | 𝘿𝙚𝙩𝙚𝙘𝙩𝙖 𝙢𝙤𝙙𝙞𝙛𝙞𝙘𝙖𝙘𝙞𝙤𝙣𝙚𝙨 𝙚𝙣 𝙚𝙡 𝙜𝙧𝙪𝙥𝙤 𝙮 𝙢𝙖𝙣𝙩𝙞𝙚𝙣𝙚 𝙪𝙣𝙖 𝙢𝙚𝙟𝙤𝙧 𝙜𝙚𝙨𝙩𝙞𝙤𝙣.
--------------------------------

│┊➺ 👨🏻‍💻 𝙊𝙥𝙘𝙞𝙤𝙣 | 𝙍𝙀𝙎𝙏𝙍𝙄𝘾𝙏
│┊➺ 👨🏻‍💻 𝘾𝙤𝙢𝙖𝙣𝙙𝙤 | .enable restrict
│┊➺ 👨🏻‍💻 𝙁𝙪𝙣𝙘𝙞𝙤𝙣 | 𝘼𝙘𝙩𝙞𝙫𝙖 𝙤 𝙙𝙚𝙨𝙖𝙘𝙩𝙞𝙫𝙖 𝙡𝙖𝙨 𝙧𝙚𝙨𝙩𝙧𝙞𝙘𝙘𝙞𝙤𝙣𝙚𝙨 𝙙𝙚𝙡 𝘽𝙤𝙩, 𝙘𝙤𝙢𝙤 𝙡𝙖 𝙙𝙚 𝙨𝙖𝙘𝙖𝙧 𝙤 𝙖𝙜𝙧𝙚𝙜𝙖𝙧 𝙥𝙚𝙧𝙨𝙤𝙣𝙖𝙨 𝙖 𝙪𝙣 𝙜𝙧𝙪𝙥𝙤.
│┊➺ 📝 𝙉𝙤𝙩𝙖 | 𝙀𝙨𝙩𝙚 𝙘𝙤𝙢𝙖𝙣𝙙𝙤 𝙨𝙤𝙡𝙤 𝙥𝙪𝙚𝙙𝙚 𝙨𝙚𝙧 𝙪𝙨𝙖𝙙𝙤 𝙥𝙤𝙧 𝙚𝙡/𝙡𝙤𝙨 𝙥𝙧𝙤𝙥𝙞𝙚𝙩𝙖𝙧𝙞𝙤(𝙨) 𝙙𝙚𝙡 𝙗𝙤𝙩.
--------------------------------

│┊➺ 👨🏻‍💻 𝙊𝙥𝙘𝙞𝙤𝙣 | 𝘼𝙐𝙏𝙊𝙍𝙀𝘼𝘿
│┊➺ 👨🏻‍💻 𝘾𝙤𝙢𝙖𝙣𝙙𝙤 | .𝙚𝙣𝙖𝙗𝙡𝙚 𝙖𝙪𝙩𝙤𝙧𝙚𝙖𝙙
│┊➺ 👨🏻‍💻 𝙁𝙪𝙣𝙘𝙞𝙤𝙣 | 𝙈𝙖𝙧𝙘𝙖 𝙘𝙤𝙢𝙤 𝙡𝙚𝙞𝙙𝙤 𝙡𝙤𝙨 𝙢𝙚𝙣𝙨𝙖𝙟𝙚𝙨 𝙮 𝙡𝙤𝙨 𝙚𝙨𝙩𝙖𝙙𝙤𝙨 𝙖𝙪𝙩𝙤𝙢á𝙩𝙞𝙘𝙖𝙢𝙚𝙣𝙩𝙚.
│┊➺ 📝 𝙉𝙤𝙩𝙖 | 𝙀𝙨𝙩𝙚 𝙘𝙤𝙢𝙖𝙣𝙙𝙤 𝙨𝙤𝙡𝙤 𝙥𝙪𝙚𝙙𝙚 𝙨𝙚𝙧 𝙪𝙨𝙖𝙙𝙤 𝙥𝙤𝙧 𝙚𝙡/𝙡𝙤𝙨 𝙥𝙧𝙤𝙥𝙞𝙚𝙩𝙖𝙧𝙞𝙤(𝙨) 𝙙𝙚𝙡 𝙗𝙤𝙩.
--------------------------------

│┊➺ 👨🏻‍💻 𝙊𝙥𝙘𝙞𝙤𝙣 | 𝘼𝙐𝘿𝙄𝙊𝙎
│┊➺ 👨🏻‍💻 𝘾𝙤𝙢𝙖𝙣𝙙𝙤 | .𝙚𝙣𝙖𝙗𝙡𝙚 𝙖𝙪𝙙𝙞𝙤𝙨
│┊➺ 👨🏻‍💻 𝙁𝙪𝙣𝙘𝙞𝙤𝙣 | 𝘼𝙘𝙩𝙞𝙫𝙖 𝙤 𝙙𝙚𝙨𝙖𝙘𝙩𝙞𝙫𝙖 𝙡𝙤𝙨 𝙘𝙤𝙢𝙖𝙣𝙙𝙤𝙨 𝙙𝙚 𝙖𝙪𝙙𝙞𝙤𝙨 𝙨𝙞𝙣 𝙥𝙧𝙚𝙛𝙞𝙟𝙤𝙨, 𝙚𝙣 𝙚𝙡 𝙜𝙧𝙪𝙥𝙤.
--------------------------------

│┊➺ 👨🏻‍💻 𝙊𝙥𝙘𝙞𝙤𝙣 | 𝘼𝙐𝙏𝙊𝙎𝙏𝙄𝘾𝙆𝙀𝙍
│┊➺ 👨🏻‍💻 𝘾𝙤𝙢𝙖𝙣𝙙𝙤 | .𝙚𝙣𝙖𝙗𝙡𝙚 𝙖𝙪𝙩𝙤𝙨𝙩𝙞𝙘𝙠𝙚𝙧 
│┊➺ 👨🏻‍💻 𝙁𝙪𝙣𝙘𝙞𝙤𝙣 | 𝙏𝙤𝙙𝙖𝙨 𝙡𝙖𝙨 𝙞𝙢𝙖𝙜𝙚𝙣𝙚𝙨 𝙤 𝙫𝙞𝙙𝙚𝙤𝙨 𝙚𝙣𝙫𝙞𝙖𝙙𝙤𝙨 𝙚𝙣 𝙚𝙡 𝙜𝙧𝙪𝙥𝙤 𝙨𝙚 𝙘𝙤𝙣𝙫𝙞𝙚𝙧𝙩𝙚𝙣 𝙚𝙣 𝙨𝙩𝙞𝙘𝙠𝙚𝙧𝙨.
--------------------------------

│┊➺ 👨🏻‍💻 𝙊𝙥𝙘𝙞𝙤𝙣 | 𝙋𝘾𝙊𝙉𝙇𝙔
│┊➺ 👨🏻‍💻 𝘾𝙤𝙢𝙖𝙣𝙙𝙤 | .𝙚𝙣𝙖𝙗𝙡𝙚 𝙥𝙘𝙤𝙣𝙡𝙮
│┊➺ 👨🏻‍💻 𝙁𝙪𝙣𝙘𝙞𝙤𝙣 | 𝙀𝙡 𝘽𝙤𝙩 𝙨𝙤𝙡𝙤 𝙧𝙚𝙨𝙥𝙤𝙣𝙙𝙚𝙧á 𝙖 𝙡𝙤𝙨 𝙘𝙤𝙢𝙖𝙣𝙙𝙤𝙨 𝙨𝙞 𝙚𝙨 𝙪𝙣 𝙘𝙝𝙖𝙩 𝙥𝙧𝙞𝙫𝙖𝙙𝙤.
│┊➺ 📝 𝙉𝙤𝙩𝙖 | 𝙀𝙨𝙩𝙚 𝙘𝙤𝙢𝙖𝙣𝙙𝙤 𝙨𝙤𝙡𝙤 𝙥𝙪𝙚𝙙𝙚 𝙨𝙚𝙧 𝙪𝙨𝙖𝙙𝙤 𝙥𝙤𝙧 𝙚𝙡/𝙡𝙤𝙨 𝙥𝙧𝙤𝙥𝙞𝙚𝙩𝙖𝙧𝙞𝙤(𝙨) 𝙙𝙚𝙡 𝙗𝙤𝙩.
--------------------------------

│┊➺ 👨🏻‍💻 𝙊𝙥𝙘𝙞𝙤𝙣 | 𝙂𝘾𝙊𝙉𝙇𝙔
│┊➺ 👨🏻‍💻 𝘾𝙤𝙢𝙖𝙣𝙙𝙤 | .𝙚𝙣𝙖𝙗𝙡𝙚 𝙜𝙘𝙤𝙣𝙡𝙮
│┊➺ 👨🏻‍💻 𝙁𝙪𝙣𝙘𝙞𝙤𝙣 | 𝙀𝙡 𝘽𝙤𝙩 𝙨𝙤𝙡𝙤 𝙧𝙚𝙨𝙥𝙤𝙣𝙙𝙚𝙧𝙖 𝙖 𝙡𝙤𝙨 𝙘𝙤𝙢𝙖𝙣𝙙𝙤𝙨 𝙨𝙞 𝙚𝙨 𝙪𝙣 𝙜𝙧𝙪𝙥𝙤.
│┊➺ 📝 𝙉𝙤𝙩𝙖 | 𝙀𝙨𝙩𝙚 𝙘𝙤𝙢𝙖𝙣𝙙𝙤 𝙨𝙤𝙡𝙤 𝙥𝙪𝙚𝙙𝙚 𝙨𝙚𝙧 𝙪𝙨𝙖𝙙𝙤 𝙥𝙤𝙧 𝙚𝙡/𝙡𝙤𝙨 𝙥𝙧𝙤𝙥𝙞𝙚𝙩𝙖𝙧𝙞𝙤(𝙨) 𝙙𝙚𝙡 𝙗𝙤𝙩.
--------------------------------

│┊➺ 👨🏻‍💻 𝙊𝙥𝙘𝙞𝙤𝙣 | 𝘼𝙉𝙏𝙄𝙑𝙄𝙀𝙒𝙊𝙉𝘾𝙀 
│┊➺ 👨🏻‍💻 𝘾𝙤𝙢𝙖𝙣𝙙𝙤 | .𝙚𝙣𝙖𝙗𝙡𝙚 𝙖𝙣𝙩𝙞𝙫𝙞𝙚𝙬𝙤𝙣𝙘𝙚
│┊➺ 👨🏻‍💻 𝙁𝙪𝙣𝙘𝙞𝙤𝙣 | 𝙇𝙖𝙨 𝙞𝙢𝙖𝙜𝙚𝙣𝙚𝙨 𝙚𝙣𝙫𝙞𝙖𝙙𝙖𝙨 𝙥𝙖𝙧𝙖 𝙫𝙚𝙧 𝙨𝙤𝙡𝙤 𝙪𝙣𝙖 𝙫𝙚𝙯, 𝙨𝙤𝙣 𝙧𝙚𝙚𝙣𝙫𝙞𝙖𝙙𝙖𝙨 𝙣𝙤𝙧𝙢𝙖𝙡 𝙥𝙤𝙧 𝙚𝙡 𝘽𝙤𝙩.
--------------------------------

│┊➺ 👨🏻‍💻 𝙊𝙥𝙘𝙞𝙤𝙣 | 𝘼𝙉𝙏𝙄𝙏𝙊𝙓𝙄𝘾
│┊➺ 👨🏻‍💻 𝘾𝙤𝙢𝙖𝙣𝙙𝙤 | .𝙚𝙣𝙖𝙗𝙡𝙚 𝙖𝙣𝙩𝙞𝙩𝙤𝙭𝙞𝙘
│┊➺ 👨🏻‍💻 𝙁𝙪𝙣𝙘𝙞𝙤𝙣 | 𝘿𝙚𝙩𝙚𝙘𝙩𝙖 𝙡𝙖 𝙢𝙖𝙡𝙖𝙨 𝙥𝙖𝙡𝙖𝙗𝙧𝙖𝙨 𝙮 𝙖𝙙𝙫𝙞𝙚𝙧𝙩𝙚 𝙖𝙡 𝙥𝙖𝙧𝙩𝙞𝙘𝙞𝙥𝙖𝙣𝙩𝙚 𝙙𝙚𝙡 𝙜𝙧𝙪𝙥𝙤, 𝙖𝙣𝙩𝙚𝙨 𝙙𝙚 𝙨𝙚𝙧 𝙚𝙡𝙞𝙢𝙞𝙣𝙖𝙙𝙤.
│┊➺ 📝 𝙉𝙤𝙩𝙖 | 𝙎𝙚 𝙣𝙚𝙘𝙚𝙨𝙞𝙩𝙖 𝙩𝙚𝙣𝙚𝙧 𝙖𝙘𝙩𝙞𝙫𝙖 𝙡𝙖 𝙛𝙪𝙣𝙘𝙞ó𝙣 𝙧𝙚𝙨𝙩𝙧𝙞𝙘𝙩.
--------------------------------

│┊➺ 👨🏻‍💻 𝙊𝙥𝙘𝙞𝙤𝙣 | 𝘼𝙉𝙏𝙄𝙏𝙍𝘼𝘽𝘼𝙎
│┊➺ 👨🏻‍💻 𝘾𝙤𝙢𝙖𝙣𝙙𝙤 | .𝙚𝙣𝙖𝙗𝙡𝙚 𝙖𝙣𝙩𝙞𝙩𝙧𝙖𝙗𝙖
│┊➺ 👨🏻‍💻 𝙁𝙪𝙣𝙘𝙞𝙤𝙣 | 𝙀𝙡 𝘽𝙤𝙩 𝙙𝙚𝙩𝙚𝙘𝙩𝙖 𝙩𝙚𝙭𝙩𝙤𝙨 𝙡𝙖𝙧𝙜𝙤𝙨 𝙦𝙪𝙚 𝙥𝙤𝙙𝙧𝙞𝙖𝙣 𝙨𝙚𝙧 𝙫𝙞𝙧𝙪𝙨 𝙮 𝙘𝙖𝙪𝙨𝙖𝙧 𝙡𝙖𝙜 𝙚𝙣 𝙚𝙡 𝙘𝙝𝙖𝙩 𝙮 𝙚𝙡𝙞𝙢𝙞𝙣𝙖 𝙖𝙡 𝙪𝙨𝙪𝙖𝙧𝙞𝙤.
│┊➺ 📝 𝙉𝙤𝙩𝙖 | 𝙎𝙚 𝙣𝙚𝙘𝙚𝙨𝙞𝙩𝙖 𝙩𝙚𝙣𝙚𝙧 𝙖𝙘𝙩𝙞𝙫𝙖 𝙡𝙖 𝙛𝙪𝙣𝙘𝙞ó𝙣 𝙧𝙚𝙨𝙩𝙧𝙞𝙘𝙩.
--------------------------------

│┊➺ 👨🏻‍💻 𝙊𝙥𝙘𝙞𝙤𝙣 | 𝘼𝙉𝙏𝙄𝘼𝙍𝘼𝘽𝙀𝙎
│┊➺ 👨🏻‍💻 𝘾𝙤𝙢𝙖𝙣𝙙𝙤 | .𝙚𝙣𝙖𝙗𝙡𝙚 𝙖𝙣𝙩𝙞𝙖𝙧𝙖𝙗𝙚𝙨
│┊➺ 👨🏻‍💻 𝙁𝙪𝙣𝙘𝙞𝙤𝙣 | 𝙎𝙞 𝙪𝙣 𝙣𝙪𝙢𝙚𝙧𝙤 á𝙧𝙖𝙗𝙚 𝙨𝙚 𝙪𝙣é 𝙖𝙡 𝙜𝙧𝙪𝙥𝙤, 𝙚𝙡 𝘽𝙤𝙩 𝙡𝙤 𝙚𝙡𝙞𝙢𝙞𝙣𝙖 𝙖𝙪𝙩𝙤𝙢𝙖𝙩𝙞𝙘𝙖𝙢𝙚𝙣𝙩𝙚.
│┊➺ 📝 𝙉𝙤𝙩𝙖 | 𝙎𝙚 𝙣𝙚𝙘𝙚𝙨𝙞𝙩𝙖 𝙩𝙚𝙣𝙚𝙧 𝙖𝙘𝙩𝙞𝙫𝙖 𝙡𝙖 𝙛𝙪𝙣𝙘𝙞ó𝙣 𝙧𝙚𝙨𝙩𝙧𝙞𝙘𝙩.
--------------------------------

│┊➺ 👨🏻‍💻 𝙊𝙥𝙘𝙞𝙤𝙣 | 𝘼𝙉𝙏𝙄𝘼𝙍𝘼𝘽𝙀𝙎 2
│┊➺ 👨🏻‍💻 𝘾𝙤𝙢𝙖𝙣𝙙𝙤 |  .𝙚𝙣𝙖𝙗𝙡𝙚 𝙖𝙣𝙩𝙞𝙖𝙧𝙖𝙗𝙚𝙨2
│┊➺ 👨🏻‍💻 𝙁𝙪𝙣𝙘𝙞𝙤𝙣 | 𝙎𝙞 𝙪𝙣 𝙣𝙪𝙢𝙚𝙧𝙤 á𝙧𝙖𝙗𝙚 𝙚𝙨𝙘𝙧𝙞𝙗𝙚 𝙚𝙣 𝙚𝙡 𝙜𝙧𝙪𝙥𝙤, 𝙚𝙡 𝘽𝙤𝙩 𝙡𝙤 𝙚𝙡𝙞𝙢𝙞𝙣𝙖 𝙖𝙪𝙩𝙤𝙢𝙖𝙩𝙞𝙘𝙖𝙢𝙚𝙣𝙩𝙚.
│┊➺ 📝 𝙉𝙤𝙩𝙖 | 𝙎𝙚 𝙣𝙚𝙘𝙚𝙨𝙞𝙩𝙖 𝙩𝙚𝙣𝙚𝙧 𝙖𝙘𝙩𝙞𝙫𝙖 𝙡𝙖 𝙛𝙪𝙣𝙘𝙞ó𝙣 𝙧𝙚𝙨𝙩𝙧𝙞𝙘𝙩.
--------------------------------

│┊➺ 👨🏻‍💻 𝙊𝙥𝙘𝙞𝙤𝙣 | 𝙈𝙊𝘿𝙊𝘼𝘿𝙈𝙄𝙉
│┊➺ 👨🏻‍💻 𝘾𝙤𝙢𝙖𝙣𝙙𝙤 | .𝙚𝙣𝙖𝙗𝙡𝙚 𝙢𝙤𝙙𝙤𝙖𝙙𝙢𝙞𝙣
│┊➺ 👨🏻‍💻 𝙁𝙪𝙣𝙘𝙞𝙤𝙣 | 𝙀𝙡 𝙗𝙤𝙩 𝙨𝙤𝙡𝙤 𝙧𝙚𝙨𝙥𝙤𝙣𝙙𝙚𝙧á 𝙖 𝙡𝙤𝙨 𝙢𝙚𝙣𝙨𝙖𝙟𝙚𝙨 𝙚𝙣𝙫𝙞𝙖𝙙𝙤𝙨 𝙥𝙤𝙧 𝙡𝙤𝙨 𝙖𝙙𝙢𝙞𝙣𝙨. 𝙙𝙚𝙡 𝙜𝙧𝙪𝙥𝙤.
--------------------------------

│┊➺ 👨🏻‍💻 𝙊𝙥𝙘𝙞𝙤𝙣 | 𝙎𝙄𝙈𝙎𝙄𝙈𝙄
│┊➺ 👨🏻‍💻 𝘾𝙤𝙢𝙖𝙣𝙙𝙤 | .𝙚𝙣𝙖𝙗𝙡𝙚 𝙨𝙞𝙢𝙨𝙞𝙢𝙞
│┊➺ 👨🏻‍💻 𝙁𝙪𝙣𝙘𝙞𝙤𝙣 | 𝙀𝙡 𝙗𝙤𝙩 𝙚𝙢𝙥𝙚𝙯𝙖𝙧á 𝙖 𝙧𝙚𝙨𝙥𝙤𝙣𝙙𝙚𝙧 𝙖 𝙡𝙤𝙨 𝙢𝙚𝙣𝙨𝙖𝙟𝙚𝙨 𝙪𝙨𝙖𝙣𝙙𝙤 𝙡𝙖 𝙄𝘼 𝙙𝙚 𝙎𝙞𝙢𝙎𝙞𝙢𝙞.
--------------------------------

│┊➺ 👨🏻‍💻 𝙊𝙥𝙘𝙞𝙤𝙣 | 𝘼𝙉𝙏𝙄𝘿𝙀𝙇𝙀𝙏𝙀
│┊➺ 👨🏻‍💻 𝘾𝙤𝙢𝙖𝙣𝙙𝙤 | .𝙚𝙣𝙖𝙗𝙡𝙚 𝙖𝙣𝙩𝙞𝙙𝙚𝙡𝙚𝙩𝙚
│┊➺ 👨🏻‍💻 𝙁𝙪𝙣𝙘𝙞𝙤𝙣 | 𝙀𝙡 𝙗𝙤𝙩 𝙙𝙚𝙩𝙚𝙘𝙩𝙖 𝙘𝙪𝙖𝙣𝙙𝙤 𝙪𝙣 𝙪𝙨𝙪𝙖𝙧𝙞𝙤 𝙚𝙡𝙞𝙢𝙞𝙣𝙖 𝙪𝙣 𝙢𝙚𝙣𝙨𝙖𝙟𝙚 𝙮 𝙡𝙤 𝙧𝙚𝙚𝙣𝙫í𝙖.
--------------------------------

│┊➺ 👨🏻‍💻 𝙊𝙥𝙘𝙞𝙤𝙣 | 𝘼𝙐𝘿𝙄𝙊𝙎_𝘽𝙊𝙏
│┊➺ 👨🏻‍💻 𝘾𝙤𝙢𝙖𝙣𝙙𝙤 | .𝙚𝙣𝙖𝙗𝙡𝙚 𝙖𝙪𝙙𝙞𝙤𝙨_𝙗𝙤𝙩
│┊➺ 👨🏻‍💻 𝙁𝙪𝙣𝙘𝙞𝙤𝙣 | 𝙎𝙚 𝙙𝙚𝙨𝙖𝙘𝙩𝙞𝙫𝙖𝙣 𝙡𝙤𝙨 𝙖𝙪𝙙𝙞𝙤𝙨 𝙙𝙚𝙡 𝘽𝙤𝙩 𝙙𝙚𝙡 𝙢𝙚𝙣𝙪𝙖𝙪𝙙𝙞𝙤𝙨 𝙥𝙖𝙧𝙖 𝙩𝙤𝙙𝙤𝙨 𝙡𝙤𝙨 𝙘𝙝𝙖𝙩𝙨 𝙥𝙧𝙞𝙫𝙖𝙙𝙤𝙨.
│┊➺ 📝 𝙉𝙤𝙩𝙖 | 𝙀𝙨𝙩𝙚 𝙘𝙤𝙢𝙖𝙣𝙙𝙤 𝙨𝙤𝙡𝙤 𝙥𝙪𝙚𝙙𝙚 𝙨𝙚𝙧 𝙪𝙨𝙖𝙙𝙤 𝙥𝙤𝙧 𝙚𝙡/𝙡𝙤𝙨 𝙥𝙧𝙤𝙥𝙞𝙚𝙩𝙖𝙧𝙞𝙤(𝙨) 𝙙𝙚𝙡 𝙗𝙤𝙩.
--------------------------------

➤  𝘽𝙊𝙇𝙄𝙇𝙇𝙊 𝘽𝙊𝙏 / 𝙈𝙀𝙇𝘿𝙀𝙓𝙕𝙕 / 𝙅𝙊𝙎𝙎 🥖`.trim();

  const isEnable = /true|enable|(turn)?on|1/i.test(command);
  const chat = global.db.data.chats[m.chat];
  const user = global.db.data.users[m.sender];
  const bot = global.db.data.settings[conn.user.jid] || {};
  const type = (args[0] || '').toLowerCase();
  let isAll = false; const isUser = false;
  switch (type) {
    case 'welcome':
      if (!m.isGroup) {
        if (!isOwner) {
          global.dfail('group', m, conn);
          throw false;
        }
      } else if (!(isAdmin || isOwner || isROwner)) {
        global.dfail('admin', m, conn);
        throw false;
      }
      chat.welcome = isEnable;
      break;
    case 'detect':
      if (!m.isGroup) {
        if (!isOwner) {
          global.dfail('group', m, conn);
          throw false;
        }
      } else if (!isAdmin) {
        global.dfail('admin', m, conn);
        throw false;
      }
      chat.detect = isEnable;
      break;
    case 'detect2':
      if (!m.isGroup) {
        if (!isOwner) {
          global.dfail('group', m, conn);
          throw false;
        }
      } else if (!isAdmin) {
        global.dfail('admin', m, conn);
        throw false;
      }
      chat.detect2 = isEnable;
      break;
    case 'simsimi':
      if (m.isGroup) {
        if (!(isAdmin || isROwner || isOwner)) {
          global.dfail('admin', m, conn);
          throw false;
        }
      }
      chat.simi = isEnable;
      break;
    case 'antiporno':
      if (m.isGroup) {
        if (!(isAdmin || isOwner)) {
          global.dfail('admin', m, conn);
          throw false;
        }
      }
      chat.antiporno = isEnable;
      break;
    case 'delete':
      if (m.isGroup) {
        if (!(isAdmin || isOwner)) {
          global.dfail('admin', m, conn);
          throw false;
        }
      }
      chat.delete = isEnable;
      break;
    case 'antidelete':
      if (m.isGroup) {
        if (!(isAdmin || isOwner)) {
          global.dfail('admin', m, conn);
          throw false;
        }
      }
      chat.antidelete = isEnable;
      break;
    case 'public':
      isAll = true;
      if (!isROwner) {
        global.dfail('rowner', m, conn);
        throw false;
      }
      global.opts['self'] = !isEnable;
      break;
    case 'antilink':
      if (m.isGroup) {
        if (!(isAdmin || isOwner)) {
          global.dfail('admin', m, conn);
          throw false;
        }
      }
      chat.antiLink = isEnable;
      break;
    case 'antilink2':
      if (m.isGroup) {
        if (!(isAdmin || isOwner)) {
          global.dfail('admin', m, conn);
          throw false;
        }
      }
      chat.antiLink2 = isEnable;
      break;
    case 'antiviewonce':
      if (m.isGroup) {
        if (!(isAdmin || isOwner)) {
          global.dfail('admin', m, conn);
          throw false;
        }
      }
      chat.antiviewonce = isEnable;
      break;
    case 'modohorny':
      if (m.isGroup) {
        if (!(isAdmin || isROwner || isOwner)) {
          global.dfail('admin', m, conn);
          throw false;
        }
      }
      chat.modohorny = isEnable;
      break;
    case 'modoadmin':
      if (m.isGroup) {
        if (!(isAdmin || isROwner || isOwner)) {
          global.dfail('admin', m, conn);
          throw false;
        }
      }
      chat.modoadmin = isEnable;
      break;
    case 'autosticker':
      if (m.isGroup) {
        if (!(isAdmin || isROwner || isOwner)) {
          global.dfail('admin', m, conn);
          throw false;
        }
      }
      chat.autosticker = isEnable;
      break;
    case 'audios':
      if (m.isGroup) {
        if (!(isAdmin || isROwner || isOwner)) {
          global.dfail('admin', m, conn);
          throw false;
        }
      }
      chat.audios = isEnable;
      break;
    case 'restrict':
      isAll = true;
      if (!(isROwner || isOwner)) {
        global.dfail('owner', m, conn);
        throw false;
      }
      bot.restrict = isEnable;
      break;
    case 'audios_bot':
      isAll = true;
      if (!(isROwner || isOwner)) {
        global.dfail('owner', m, conn);
        throw false;
      }
      bot.audios_bot = isEnable;      
      break;
    case 'modoia':
      isAll = true;
      if (!(isROwner || isOwner)) {
        global.dfail('owner', m, conn);
        throw false;
      }
      bot.modoia = isEnable;      
      break;      
    case 'nyimak':
      isAll = true;
      if (!isROwner) {
        global.dfail('rowner', m, conn);
        throw false;
      }
      global.opts['nyimak'] = isEnable;
      break;
    case 'autoread':
      isAll = true;
      if (!(isROwner || isOwner)) {
        global.dfail('rowner', m, conn);
        throw false;
      }
      bot.autoread2 = isEnable;
      //global.opts['autoread'] = isEnable;
      break;
    case 'pconly':
    case 'privateonly':
      isAll = true;
      if (!isROwner) {
        global.dfail('rowner', m, conn);
        throw false;
      }
      global.opts['pconly'] = isEnable;
      break;
    case 'gconly':
    case 'grouponly':
      isAll = true;
      if (!isROwner) {
        global.dfail('rowner', m, conn);
        throw false;
      }
      global.opts['gconly'] = isEnable;
      break;
    case 'swonly':
    case 'statusonly':
      isAll = true;
      if (!isROwner) {
        global.dfail('rowner', m, conn);
        throw false;
      }
      global.opts['swonly'] = isEnable;
      break;
    case 'anticall':
      isAll = true;
      if (!(isROwner || isOwner)) {
        global.dfail('owner', m, conn);
        throw false;
      }
      bot.antiCall = isEnable;
      break;
    case 'antiprivado':
      isAll = true;
      if (!(isROwner || isOwner)) {
        global.dfail('owner', m, conn);
        throw false;
      }
      bot.antiPrivate = isEnable;
      break;
    case 'modejadibot':
      isAll = true;
      if (!isROwner) {
        global.dfail('rowner', m, conn);
        throw false;
      }
      bot.modejadibot = isEnable;
      break;
    case 'antispam':
      isAll = true;
      if (!(isROwner || isOwner)) {
        global.dfail('owner', m, conn);
        throw false;
      }
      bot.antispam = isEnable;
      break;
    case 'antitoxic':
      if (m.isGroup) {
        if (!(isAdmin || isROwner || isOwner)) {
          global.dfail('admin', m, conn);
          throw false;
        }
      }
      chat.antiToxic = isEnable;
      break;
      case 'game': case 'juegos': case 'fun': case 'ruleta':
if (m.isGroup) {
if (!(isAdmin || isOwner)) {
global.dfail('admin', m, conn)
throw false
}}
chat.game = isEnable          
break;
    case 'antitraba':
      if (m.isGroup) {
        if (!(isAdmin || isROwner || isOwner)) {
          global.dfail('admin', m, conn);
          throw false;
        }
      }
      chat.antiTraba = isEnable;
      break;
    case 'antiarabes':
      if (m.isGroup) {
        if (!(isAdmin || isROwner || isOwner)) {
          global.dfail('admin', m, conn); 
          throw false;
        }
      }
      chat.antiArab = isEnable;
      break;
    case 'antiarabes2':
      if (m.isGroup) {
        if (!(isAdmin || isROwner || isOwner)) {
          global.dfail('admin', m, conn);
          throw false;
        }
      }
      chat.antiArab2 = isEnable;
      break;
    default:
      if (!/[01]/.test(command)) return await conn.sendMessage(m.chat, {text: optionsFull}, {quoted: m});
      throw false;
  }
  conn.sendMessage(m.chat, {text: `_*${tradutor.texto28[0]}*_\n\n*${tradutor.texto28[1]}* _${type}_ *fue* ${isEnable ? '_activada_' : '_desactivada_'} *${tradutor.texto28[2]}* ${isAll ? '_bot._' : isUser ? '' : '_chat._'}`}, {quoted: m});
  //conn.sendMessage(m.chat, {text: `▢ *Opción:* ${type}\n\n▢ *Estado:* ${isEnable ? 'Activado' : 'Desactivado'}\n\n▢ *Para* ${isAll ? 'este bot' : isUser ? '' : 'este chat'}`}, {quoted: m});
};
handler.command = /^((en|dis)able|(tru|fals)e|(turn)?[01])$/i;
export default handler;
