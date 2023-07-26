const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({ path: './config.env' });

function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}

global.SESSION_ID =  process.env.SESSION_ID || "Darknero=47VWnaaT#KBCf0iBUhNrXs7Vj2XVfqxJ4JHjRitwmJUUWljw1qsw"

module.exports = { 

 READ_MESSAGE : process.env. READ_MESSAGE  === undefined ?'true': process.env. READ_MESSAGE,
AOTO_VOICS: process.env.AOTO_VOICS  === undefined ? 'true' : process.env.AOTO_VOICS, 
YOU_LINK :  process.env.YOU_LINK  === undefined ? 'https://github.com/Kaveeshasithum' : process.env.YOU_LINK,
OWENR_NO: process.env.OWENR_NO === undefined ? '94765418376' : process.env.OWENR_NO,
ANTI_BAD: process.env.ANTI_BAD === undefined ? 'true' : process.env.ANTI_BAD,
MAX_SIZE: 100,
ONLY_GROUP: process.env.ONLY_GROUP === undefined ? 'false' : process.env.ONLY_GROUP,
ANTI_LINK: process.env.ANTI_LINK === undefined ? 'true' : process.env.ANTI_LINK,
ALIVE: process.env.ALIVE === undefined ? ` BRO HELO
 
     
I'm Dark nero Whatsapp user bot
🔄Version: 0.9
Helo There I am online 🌐

ᴄʏʙᴇʀ ʏᴀᴋᴜꜱʜᴀ•ᴅᴀʀᴋ ɴᴇʀᴏ-ᴍᴅ` : process.env.ALIVE,
LOGO: process.env.LOGO === undefined ? `https://i.ibb.co/zrvByTb/IMG-20230609-WA0083.jpg` : process.env.LOGO
};
