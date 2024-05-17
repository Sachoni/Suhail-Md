const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.devs= "25436429306" ;
global.port =process.env.PORT
global.appUrl=process.env.APP_URL || ""                       // put your app url here,
global.email ="saimsamsun789@gmail.com"
global.location="Kenya,Bungoma."
global.mongodb= process.env.MONGODB_URI || "mongodb+srv://wamukotajohnmark:<password>@cluster0.mbtqya6.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || ""
global.timezone= process.env.TZ || process.env.TIME_ZONE || "Africa/Kenya";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/Suhail-Md";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://github.com/SuhailTechInfo/Suhail-Md/blob/main/lib/assets/suhail.jpg?raw=true" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ" 


global.devs = "923184474176" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null,25436429306";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "25436429306";




//========================= [ BOT SETTINGS ] =========================\\
global.style = process.env.STYLE   || '5'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || "false";  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "text" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,25436429306";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "true"
global.save_status = process.env.AUTO_SAVE_STATUS || "true"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,25436429306";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "25436429306";

global.api_smd = "https://api-smd.onrender.com" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID ||" SUHAIL_14_03_05_17_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTA0LFxuICAgICAgICAyMjcsXG4gICAgICAgIDE1OCxcbiAgICAgICAgMjE1LFxuICAgICAgICA5OSxcbiAgICAgICAgMjMzLFxuICAgICAgICA1NyxcbiAgICAgICAgMTUxLFxuICAgICAgICAxMDksXG4gICAgICAgIDEzLFxuICAgICAgICAxNTcsXG4gICAgICAgIDIzMSxcbiAgICAgICAgMTY5LFxuICAgICAgICAyMzYsXG4gICAgICAgIDE5MSxcbiAgICAgICAgMTczLFxuICAgICAgICAxMTMsXG4gICAgICAgIDg4LFxuICAgICAgICA0MCxcbiAgICAgICAgMTE0LFxuICAgICAgICAxNTgsXG4gICAgICAgIDE5MyxcbiAgICAgICAgMTQsXG4gICAgICAgIDY4LFxuICAgICAgICAxMixcbiAgICAgICAgMTMxLFxuICAgICAgICAyNTEsXG4gICAgICAgIDYwLFxuICAgICAgICAyMDksXG4gICAgICAgIDkxLFxuICAgICAgICA1MCxcbiAgICAgICAgNzVcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTcyLFxuICAgICAgICAyNTQsXG4gICAgICAgIDEzNixcbiAgICAgICAgMTg0LFxuICAgICAgICAzLFxuICAgICAgICAxMjUsXG4gICAgICAgIDIyMSxcbiAgICAgICAgOTEsXG4gICAgICAgIDI0NCxcbiAgICAgICAgNzEsXG4gICAgICAgIDQzLFxuICAgICAgICAxNixcbiAgICAgICAgNSxcbiAgICAgICAgOTIsXG4gICAgICAgIDI0MSxcbiAgICAgICAgNzcsXG4gICAgICAgIDIxNyxcbiAgICAgICAgNDIsXG4gICAgICAgIDg5LFxuICAgICAgICAxOTksXG4gICAgICAgIDIzOCxcbiAgICAgICAgNjQsXG4gICAgICAgIDEyMSxcbiAgICAgICAgMTIyLFxuICAgICAgICA1NSxcbiAgICAgICAgMTQ0LFxuICAgICAgICAxOTUsXG4gICAgICAgIDIzNCxcbiAgICAgICAgMjQzLFxuICAgICAgICAyMjYsXG4gICAgICAgIDE2OCxcbiAgICAgICAgMjRcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwicGFpcmluZ0VwaGVtZXJhbEtleVBhaXJcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDMyLFxuICAgICAgICAyNixcbiAgICAgICAgMjI3LFxuICAgICAgICAyNTMsXG4gICAgICAgIDEyOCxcbiAgICAgICAgMjI2LFxuICAgICAgICAxNjMsXG4gICAgICAgIDEwMixcbiAgICAgICAgMTAzLFxuICAgICAgICA1NyxcbiAgICAgICAgMjQwLFxuICAgICAgICAyMTksXG4gICAgICAgIDE5LFxuICAgICAgICAzOCxcbiAgICAgICAgMTYzLFxuICAgICAgICAxMDUsXG4gICAgICAgIDE3OSxcbiAgICAgICAgMjA4LFxuICAgICAgICAxNjcsXG4gICAgICAgIDI1MixcbiAgICAgICAgMTY5LFxuICAgICAgICAxMTUsXG4gICAgICAgIDM1LFxuICAgICAgICA2MSxcbiAgICAgICAgNTYsXG4gICAgICAgIDcyLFxuICAgICAgICAyLFxuICAgICAgICAyNDAsXG4gICAgICAgIDEwNSxcbiAgICAgICAgMTAsXG4gICAgICAgIDkyLFxuICAgICAgICAxMDNcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTIxLFxuICAgICAgICAxNjIsXG4gICAgICAgIDI0NCxcbiAgICAgICAgMTc0LFxuICAgICAgICAyMzgsXG4gICAgICAgIDIxOCxcbiAgICAgICAgNTksXG4gICAgICAgIDE2MyxcbiAgICAgICAgODUsXG4gICAgICAgIDE3NCxcbiAgICAgICAgMTQ4LFxuICAgICAgICA0NSxcbiAgICAgICAgMTI1LFxuICAgICAgICA4NCxcbiAgICAgICAgMjQ5LFxuICAgICAgICAxMixcbiAgICAgICAgMTk4LFxuICAgICAgICAxNixcbiAgICAgICAgNyxcbiAgICAgICAgMTA4LFxuICAgICAgICAyMzQsXG4gICAgICAgIDU2LFxuICAgICAgICAxMTUsXG4gICAgICAgIDg3LFxuICAgICAgICAyMzEsXG4gICAgICAgIDIyNSxcbiAgICAgICAgMTMyLFxuICAgICAgICAxMjcsXG4gICAgICAgIDEyMyxcbiAgICAgICAgMjI2LFxuICAgICAgICAyMDcsXG4gICAgICAgIDQ0XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZElkZW50aXR5S2V5XCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxMjgsXG4gICAgICAgIDEyMixcbiAgICAgICAgMjA4LFxuICAgICAgICAyMjcsXG4gICAgICAgIDczLFxuICAgICAgICAxMzEsXG4gICAgICAgIDIxMyxcbiAgICAgICAgMjcsXG4gICAgICAgIDI0LFxuICAgICAgICAyMTYsXG4gICAgICAgIDI0MCxcbiAgICAgICAgMjEyLFxuICAgICAgICAxOTYsXG4gICAgICAgIDE0MSxcbiAgICAgICAgMTYsXG4gICAgICAgIDEwOSxcbiAgICAgICAgMTMzLFxuICAgICAgICAxMDMsXG4gICAgICAgIDgxLFxuICAgICAgICA2NixcbiAgICAgICAgODcsXG4gICAgICAgIDIxOCxcbiAgICAgICAgMTM1LFxuICAgICAgICAxODgsXG4gICAgICAgIDE5MSxcbiAgICAgICAgMTEzLFxuICAgICAgICA0OSxcbiAgICAgICAgMjQ0LFxuICAgICAgICAyNDMsXG4gICAgICAgIDE1NyxcbiAgICAgICAgNDYsXG4gICAgICAgIDY5XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDI0MSxcbiAgICAgICAgMTg3LFxuICAgICAgICAxNCxcbiAgICAgICAgMTQ0LFxuICAgICAgICAyMCxcbiAgICAgICAgMTg5LFxuICAgICAgICAxNTIsXG4gICAgICAgIDQ3LFxuICAgICAgICAxODcsXG4gICAgICAgIDgxLFxuICAgICAgICAxMjcsXG4gICAgICAgIDEwNixcbiAgICAgICAgMjE3LFxuICAgICAgICAxNjksXG4gICAgICAgIDEwNSxcbiAgICAgICAgMTI2LFxuICAgICAgICAyMTEsXG4gICAgICAgIDEwLFxuICAgICAgICAyMTIsXG4gICAgICAgIDExNCxcbiAgICAgICAgMjAzLFxuICAgICAgICA0LFxuICAgICAgICAzMixcbiAgICAgICAgMjIsXG4gICAgICAgIDI0NixcbiAgICAgICAgMjEzLFxuICAgICAgICA0NixcbiAgICAgICAgMTk5LFxuICAgICAgICAxMzEsXG4gICAgICAgIDEwMCxcbiAgICAgICAgMTAxLFxuICAgICAgICAxMTRcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkUHJlS2V5XCI6IHtcbiAgICBcImtleVBhaXJcIjoge1xuICAgICAgXCJwcml2YXRlXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMzIsXG4gICAgICAgICAgNyxcbiAgICAgICAgICAxNDEsXG4gICAgICAgICAgOSxcbiAgICAgICAgICA5NSxcbiAgICAgICAgICA2MyxcbiAgICAgICAgICAyNDgsXG4gICAgICAgICAgNjcsXG4gICAgICAgICAgNzIsXG4gICAgICAgICAgMjQsXG4gICAgICAgICAgNzUsXG4gICAgICAgICAgMjUwLFxuICAgICAgICAgIDI0MyxcbiAgICAgICAgICAxMjIsXG4gICAgICAgICAgMzgsXG4gICAgICAgICAgMTI5LFxuICAgICAgICAgIDUsXG4gICAgICAgICAgOTUsXG4gICAgICAgICAgMTY5LFxuICAgICAgICAgIDIxMyxcbiAgICAgICAgICAyNDAsXG4gICAgICAgICAgMTA0LFxuICAgICAgICAgIDM1LFxuICAgICAgICAgIDQ5LFxuICAgICAgICAgIDEwNSxcbiAgICAgICAgICA0LFxuICAgICAgICAgIDE3NixcbiAgICAgICAgICAyMjYsXG4gICAgICAgICAgNzQsXG4gICAgICAgICAgMTIsXG4gICAgICAgICAgNjIsXG4gICAgICAgICAgODhcbiAgICAgICAgXVxuICAgICAgfSxcbiAgICAgIFwicHVibGljXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNjIsXG4gICAgICAgICAgMTM3LFxuICAgICAgICAgIDEyMCxcbiAgICAgICAgICA4NixcbiAgICAgICAgICAyMzgsXG4gICAgICAgICAgODAsXG4gICAgICAgICAgMjIsXG4gICAgICAgICAgNzUsXG4gICAgICAgICAgMTgwLFxuICAgICAgICAgIDQzLFxuICAgICAgICAgIDQsXG4gICAgICAgICAgMTMsXG4gICAgICAgICAgMTg0LFxuICAgICAgICAgIDc3LFxuICAgICAgICAgIDEzNCxcbiAgICAgICAgICAxNTksXG4gICAgICAgICAgMjEsXG4gICAgICAgICAgMzYsXG4gICAgICAgICAgNTcsXG4gICAgICAgICAgMTg2LFxuICAgICAgICAgIDE2NCxcbiAgICAgICAgICA5NixcbiAgICAgICAgICAxMDYsXG4gICAgICAgICAgMjYsXG4gICAgICAgICAgMTYzLFxuICAgICAgICAgIDkyLFxuICAgICAgICAgIDI0NixcbiAgICAgICAgICAxNDYsXG4gICAgICAgICAgNDgsXG4gICAgICAgICAgMTUzLFxuICAgICAgICAgIDIwLFxuICAgICAgICAgIDczXG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9LFxuICAgIFwic2lnbmF0dXJlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjAxLFxuICAgICAgICAxMjYsXG4gICAgICAgIDIxMCxcbiAgICAgICAgMTcwLFxuICAgICAgICAyMzMsXG4gICAgICAgIDYwLFxuICAgICAgICAxNDYsXG4gICAgICAgIDI1LFxuICAgICAgICAyMixcbiAgICAgICAgMTIyLFxuICAgICAgICAzNSxcbiAgICAgICAgMTcyLFxuICAgICAgICAyNDMsXG4gICAgICAgIDExMyxcbiAgICAgICAgOTAsXG4gICAgICAgIDE4NixcbiAgICAgICAgMTkwLFxuICAgICAgICA2LFxuICAgICAgICAxODksXG4gICAgICAgIDAsXG4gICAgICAgIDE4MSxcbiAgICAgICAgMjQyLFxuICAgICAgICAyMjcsXG4gICAgICAgIDExLFxuICAgICAgICAxNjIsXG4gICAgICAgIDc0LFxuICAgICAgICAxMzEsXG4gICAgICAgIDAsXG4gICAgICAgIDEyNyxcbiAgICAgICAgMzEsXG4gICAgICAgIDE0MixcbiAgICAgICAgMjIzLFxuICAgICAgICAyLFxuICAgICAgICAyMzYsXG4gICAgICAgIDE4NCxcbiAgICAgICAgMjEyLFxuICAgICAgICAyMixcbiAgICAgICAgMTk1LFxuICAgICAgICA4NCxcbiAgICAgICAgMTk2LFxuICAgICAgICAwLFxuICAgICAgICA4MixcbiAgICAgICAgMTQwLFxuICAgICAgICAxNyxcbiAgICAgICAgNzEsXG4gICAgICAgIDQzLFxuICAgICAgICAxNjMsXG4gICAgICAgIDE3OCxcbiAgICAgICAgMzksXG4gICAgICAgIDIwMSxcbiAgICAgICAgNTIsXG4gICAgICAgIDIzOSxcbiAgICAgICAgMTMwLFxuICAgICAgICAxMTIsXG4gICAgICAgIDIzMCxcbiAgICAgICAgMTIyLFxuICAgICAgICA5NCxcbiAgICAgICAgMTEwLFxuICAgICAgICAyMTcsXG4gICAgICAgIDExOSxcbiAgICAgICAgNTIsXG4gICAgICAgIDI1MSxcbiAgICAgICAgMzgsXG4gICAgICAgIDdcbiAgICAgIF1cbiAgICB9LFxuICAgIFwia2V5SWRcIjogMVxuICB9LFxuICBcInJlZ2lzdHJhdGlvbklkXCI6IDIxNixcbiAgXCJhZHZTZWNyZXRLZXlcIjogXCJiLzMwOXZZQ1lLTXFIdEVTNFpUWGN5MWJUQlFyYVBubURjdW9NUEZMOWkwPVwiLFxuICBcInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlc1wiOiBbXSxcbiAgXCJuZXh0UHJlS2V5SWRcIjogMzEsXG4gIFwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWRcIjogMzEsXG4gIFwiYWNjb3VudFN5bmNDb3VudGVyXCI6IDAsXG4gIFwiYWNjb3VudFNldHRpbmdzXCI6IHtcbiAgICBcInVuYXJjaGl2ZUNoYXRzXCI6IGZhbHNlXG4gIH0sXG4gIFwiZGV2aWNlSWRcIjogXCJENy1UekN3elEzS09PRlh2M0QyMFlBXCIsXG4gIFwicGhvbmVJZFwiOiBcImI4Mjk0YjZhLTVhMmQtNDk2ZS1hM2ZhLTgzNzMyYzhmZGYzZVwiLFxuICBcImlkZW50aXR5SWRcIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICA1NyxcbiAgICAgIDEsXG4gICAgICAyMTcsXG4gICAgICAxNTAsXG4gICAgICAxOTUsXG4gICAgICAxMzEsXG4gICAgICAxODksXG4gICAgICAyMSxcbiAgICAgIDc1LFxuICAgICAgMzMsXG4gICAgICA3MyxcbiAgICAgIDExNixcbiAgICAgIDYsXG4gICAgICAyNDYsXG4gICAgICA3OSxcbiAgICAgIDI3LFxuICAgICAgMjA0LFxuICAgICAgNjQsXG4gICAgICAxNjcsXG4gICAgICA2OFxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RlcmVkXCI6IGZhbHNlLFxuICBcImJhY2t1cFRva2VuXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMTQ1LFxuICAgICAgMjIzLFxuICAgICAgMTYxLFxuICAgICAgMjE3LFxuICAgICAgMjM1LFxuICAgICAgMjgsXG4gICAgICAxNDIsXG4gICAgICAyOSxcbiAgICAgIDIzMCxcbiAgICAgIDE1OSxcbiAgICAgIDExNCxcbiAgICAgIDkzLFxuICAgICAgMTIsXG4gICAgICA2NSxcbiAgICAgIDE2MyxcbiAgICAgIDI2LFxuICAgICAgMTAsXG4gICAgICAxNTIsXG4gICAgICAzNSxcbiAgICAgIDIxOFxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25cIjoge30sXG4gIFwiYWNjb3VudFwiOiB7XG4gICAgXCJkZXRhaWxzXCI6IFwiQ09DOXN2QUNFTGpIbmJJR0dBSWdBQ2dBXCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlS2V5XCI6IFwidytubXozc2JLNFNRSmduZjhJVnk5aUpxTXVwRG9SRWc4a2ZVUjdPdTFRdz1cIixcbiAgICBcImFjY291bnRTaWduYXR1cmVcIjogXCJGWXZ1ekYvTWIvWXZDVGxrejR1MHlLWlMxZmZGL1pwemh1VmxaeDlkTUJEMDRwVzNzSDU1ek1pSkozOFNiQWZaR05YZzVJRlVaaWVnbGNUT2xtUVpBZz09XCIsXG4gICAgXCJkZXZpY2VTaWduYXR1cmVcIjogXCJRK1pXQ3NHWTZEbzNYcUNmSDJZNjNwQjZoNXlZVVl6ekNwM1FvWGhUbXlOb0FLazZPL0JDSmhSWEhnUmNOM1RCRTExdlJxQnNKY1VqdDgzYlZ2dFdEQT09XCJcbiAgfSxcbiAgXCJtZVwiOiB7XG4gICAgXCJpZFwiOiBcIjI1NDczNjQyOTMwNjoyNkBzLndoYXRzYXBwLm5ldFwiLFxuICAgIFwibmFtZVwiOiBcImxvbmVseSB1c2VyXCIsXG4gICAgXCJsaWRcIjogXCIxODY1NzM3ODIwNDQ3MjA6MjZAbGlkXCJcbiAgfSxcbiAgXCJzaWduYWxJZGVudGl0aWVzXCI6IFtcbiAgICB7XG4gICAgICBcImlkZW50aWZpZXJcIjoge1xuICAgICAgICBcIm5hbWVcIjogXCIyNTQ3MzY0MjkzMDY6MjZAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJkZXZpY2VJZFwiOiAwXG4gICAgICB9LFxuICAgICAgXCJpZGVudGlmaWVyS2V5XCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNSxcbiAgICAgICAgICAxOTUsXG4gICAgICAgICAgMjMzLFxuICAgICAgICAgIDIzMCxcbiAgICAgICAgICAyMDcsXG4gICAgICAgICAgMTIzLFxuICAgICAgICAgIDI3LFxuICAgICAgICAgIDQzLFxuICAgICAgICAgIDEzMixcbiAgICAgICAgICAxNDQsXG4gICAgICAgICAgMzgsXG4gICAgICAgICAgOSxcbiAgICAgICAgICAyMjMsXG4gICAgICAgICAgMjQwLFxuICAgICAgICAgIDEzMyxcbiAgICAgICAgICAxMTQsXG4gICAgICAgICAgMjQ2LFxuICAgICAgICAgIDM0LFxuICAgICAgICAgIDEwNixcbiAgICAgICAgICA1MCxcbiAgICAgICAgICAyMzQsXG4gICAgICAgICAgNjcsXG4gICAgICAgICAgMTYxLFxuICAgICAgICAgIDE3LFxuICAgICAgICAgIDMyLFxuICAgICAgICAgIDI0MixcbiAgICAgICAgICA3MSxcbiAgICAgICAgICAyMTIsXG4gICAgICAgICAgNzEsXG4gICAgICAgICAgMTc5LFxuICAgICAgICAgIDE3NCxcbiAgICAgICAgICAyMTMsXG4gICAgICAgICAgMTJcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH1cbiAgXSxcbiAgXCJwbGF0Zm9ybVwiOiBcInNtYmFcIixcbiAgXCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXBcIjogMTcxNTk1NDYyMCxcbiAgXCJteUFwcFN0YXRlS2V5SWRcIjogXCJBQUFBQUFoUVwiXG59IiwKICAiYXBwLXN0YXRlLXN5bmMta2V5LUFBQUFBQWhKLmpzb24iOiAie1wia2V5RGF0YVwiOlwia1VSVURFUy95L2hXRHdGRFlYdmcydmVsblVMSURNV0tXemc3UmpNUi9hbz1cIixcImZpbmdlcnByaW50XCI6e1wicmF3SWRcIjo3NzI1NzkwMzksXCJjdXJyZW50SW5kZXhcIjoxLFwiZGV2aWNlSW5kZXhlc1wiOlswLDFdfSxcInRpbWVzdGFtcFwiOlwiMTcxNTg3MTExNzUwN1wifSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS1BQUFBQUFoSy5qc29uIjogIntcImtleURhdGFcIjpcIjYxWktyS3liOW5WZkVacE5oYzd0WXFJY2x4ZG1FRkZjbnl6bDNJRHBzeXM9XCIsXCJmaW5nZXJwcmludFwiOntcInJhd0lkXCI6NzcyNTc5MDM5LFwiY3VycmVudEluZGV4XCI6NSxcImRldmljZUluZGV4ZXNcIjpbMCwxXX0sXCJ0aW1lc3RhbXBcIjpcIjBcIn0iLAogICJhcHAtc3RhdGUtc3luYy1rZXktQUFBQUFBaEwuanNvbiI6ICJ7XCJrZXlEYXRhXCI6XCJTdmhqMzFvbWpPZWluejRabnNhTVhvc015V2dJeCtnejJtNngxOHlyemEwPVwiLFwiZmluZ2VycHJpbnRcIjp7XCJyYXdJZFwiOjc3MjU3OTAzOSxcImN1cnJlbnRJbmRleFwiOjgsXCJkZXZpY2VJbmRleGVzXCI6WzAsMSw2LDhdfSxcInRpbWVzdGFtcFwiOlwiMFwifSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS1BQUFBQUFoTS5qc29uIjogIntcImtleURhdGFcIjpcIjJadndHRHJuRkVpL3RuRDl1OGU0SGhOdnBTNGN3aGVoc2lFcjVLTGJmTjA9XCIsXCJmaW5nZXJwcmludFwiOntcInJhd0lkXCI6NzcyNTc5MDM5LFwiY3VycmVudEluZGV4XCI6OCxcImRldmljZUluZGV4ZXNcIjpbMCwxLDhdfSxcInRpbWVzdGFtcFwiOlwiMFwifSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS1BQUFBQUFoTi5qc29uIjogIntcImtleURhdGFcIjpcImhxUHRGc0Zsbkd0aGZGZ0tkdXpOTnV4cko4WmdpdTlyMDRkMGIxZUtjRGs9XCIsXCJmaW5nZXJwcmludFwiOntcInJhd0lkXCI6NzcyNTc5MDM5LFwiY3VycmVudEluZGV4XCI6MTAsXCJkZXZpY2VJbmRleGVzXCI6WzAsMSw4LDEwXX0sXCJ0aW1lc3RhbXBcIjpcIjBcIn0iLAogICJhcHAtc3RhdGUtc3luYy1rZXktQUFBQUFBaE8uanNvbiI6ICJ7XCJrZXlEYXRhXCI6XCJWZXRvc2ZpY3BwbldyZFl0RTQzeXlLem1ZajR2WVZSdG9iVzdqNEhTTUdrPVwiLFwiZmluZ2VycHJpbnRcIjp7XCJyYXdJZFwiOjc3MjU3OTAzOSxcImN1cnJlbnRJbmRleFwiOjEwLFwiZGV2aWNlSW5kZXhlc1wiOlswLDgsMTBdfSxcInRpbWVzdGFtcFwiOlwiMFwifSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS1BQUFBQUFoUC5qc29uIjogIntcImtleURhdGFcIjpcIklSL0x1aU5QMGYrbitLV0YyTUhFbXRqVWtPYitScjQ5bjBDc3NCdEVPUDg9XCIsXCJmaW5nZXJwcmludFwiOntcInJhd0lkXCI6NzcyNTc5MDM5LFwiY3VycmVudEluZGV4XCI6MTAsXCJkZXZpY2VJbmRleGVzXCI6WzAsOF19LFwidGltZXN0YW1wXCI6XCIwXCJ9IiwKICAiYXBwLXN0YXRlLXN5bmMta2V5LUFBQUFBQWhRLmpzb24iOiAie1wia2V5RGF0YVwiOlwiTkhSM2pOY2FkNmg4cHlIS3U4SEJ5S2ErWXMzY21pQ1I5cy83NlF4dXRURT1cIixcImZpbmdlcnByaW50XCI6e1wicmF3SWRcIjo3NzI1NzkwMzksXCJjdXJyZW50SW5kZXhcIjoxMCxcImRldmljZUluZGV4ZXNcIjpbMCw4XX0sXCJ0aW1lc3RhbXBcIjpcIjE3MTU5NTAxNjU1MTJcIn0iLAogICJhcHAtc3RhdGUtc3luYy1rZXktQUFBQUFBaFIuanNvbiI6ICJ7XCJrZXlEYXRhXCI6XCI4Y3lJMXR3V1hEdmhsWWZqV0E0aURKYWlramV1TU5JNVlEWnMwR2NacTdZPVwiLFwiZmluZ2VycHJpbnRcIjp7XCJyYXdJZFwiOjc3MjU3OTAzOSxcImN1cnJlbnRJbmRleFwiOjEyLFwiZGV2aWNlSW5kZXhlc1wiOlswLDgsMTJdfSxcInRpbWVzdGFtcFwiOlwiMFwifSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS1BQUFBQUFoUy5qc29uIjogIntcImtleURhdGFcIjpcImw4bHIzcHZGODZzWTVYVEg4V2djZGpMSk9KRkU3L05NaGJCa3BRQWd6VFU9XCIsXCJmaW5nZXJwcmludFwiOntcInJhd0lkXCI6NzcyNTc5MDM5LFwiY3VycmVudEluZGV4XCI6MTIsXCJkZXZpY2VJbmRleGVzXCI6WzAsMTJdfSxcInRpbWVzdGFtcFwiOlwiMFwifSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS1BQUFBQUFoVC5qc29uIjogIntcImtleURhdGFcIjpcIkVuNzU2R0drZkR0OVdFTHFwdllXc095RkZ4bXRrdEpyaE1SUHFuWmJqdEU9XCIsXCJmaW5nZXJwcmludFwiOntcInJhd0lkXCI6NzcyNTc5MDM5LFwiY3VycmVudEluZGV4XCI6MTIsXCJkZXZpY2VJbmRleGVzXCI6WzBdfSxcInRpbWVzdGFtcFwiOlwiMTcxNTk1MjU5MzM3MVwifSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS1BQUFBQUFoVS5qc29uIjogIntcImtleURhdGFcIjpcIkdOeXNIa00rbVZjdjhzNUVpNGFSU2FzS1dKUVJMMTJialRlQlkzb2ZLMkU9XCIsXCJmaW5nZXJwcmludFwiOntcInJhd0lkXCI6NzcyNTc5MDQwLFwiY3VycmVudEluZGV4XCI6MSxcImRldmljZUluZGV4ZXNcIjpbMCwxXX0sXCJ0aW1lc3RhbXBcIjpcIjE3MTU5NTI2NzUyODBcIn0iCn0" // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.4",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "Johnmark",
  packname: process.env.PACK_NAME || "😎",
  botname : process.env.BOT_NAME  || "Johnmark",
  ownername:process.env.OWNER_NAME|| "It'x Suhail",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "private",
  LANG: ( process.env.THEME ||  "SUHAIL"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "";
global.aitts_Voice_Id = process.env.AITTS_ID|| "37";





















global.rank = "updated"
global.isMongodb = false; 
let file = require.resolve(__filename)
fs.watchFile(file, () => { fs.unwatchFile(file);console.log(`Update'${__filename}'`);delete require.cache[file];	require(file); })
 

// ========================= [ Disables in V.1.2.8 ] ===============================\\  
  //style : process.env.STYLE || "2",  // put '1' & "2" here to check bot styles
  //readmessage:process.env.READ_MESSAGE|| "false",
  //warncount: process.env.WARN_COUNT || 3,
  //userImages:process.env.USER_IMAGES|| "text",  // SET IMAGE AND VIDEO URL FOR BOT MENUS 
  //disablepm: process.env.DISABLE_PM || "false",
  //MsgsInLog: process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
  //readcmds:process.env.READ_COMMANDS|| "false", 
  //alwaysonline:process.env.WAPRESENCE|| "unavailable", // 'unavailable' | 'online' | 'composing' | 'recording' | 'paused'
  //read_status: process.env.AUTO_READ_STATUS || "false",
  //save_status: process.env.AUTO_SAVE_STATUS || "false",
  //aitts_Voice_Id : process.env.AITTS_ID || "37",
  //ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY  || "",
