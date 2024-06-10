const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT
global.appUrl=process.env.APP_URL || ""                       // put your app url here,
global.email ="wambuavincent1992.com"
global.location="Nairobi,Kenya."


global.mongodb= process.env.MONGODB_URI || ""
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || ""

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Africa/Nairobi";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/Suhail-Md";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://github.com/SuhailTechInfo/Suhail-Md/blob/main/lib/assets/suhail.jpg?raw=true" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "ᴘᴏᴡᴇʀᴇᴅ ʙʏ Frank" 


global.devs = "254101434166" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "254110282668";




//========================= [ BOT SETTINGS ] =========================\\
global.style = process.env.STYLE   || '1'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || "false";  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "" // "text" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,254xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "false"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,254xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "254101434166,254xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_17_13_06_10_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMCxcbiAgICAgICAgMTIsXG4gICAgICAgIDQxLFxuICAgICAgICAyMzQsXG4gICAgICAgIDE5MyxcbiAgICAgICAgMjQyLFxuICAgICAgICAyNCxcbiAgICAgICAgODksXG4gICAgICAgIDExOSxcbiAgICAgICAgMTgxLFxuICAgICAgICA1NyxcbiAgICAgICAgMTkzLFxuICAgICAgICAyMzUsXG4gICAgICAgIDEyNyxcbiAgICAgICAgNDEsXG4gICAgICAgIDk1LFxuICAgICAgICA5MyxcbiAgICAgICAgMTMsXG4gICAgICAgIDExMSxcbiAgICAgICAgODIsXG4gICAgICAgIDE1OCxcbiAgICAgICAgMTc5LFxuICAgICAgICAxNDAsXG4gICAgICAgIDExLFxuICAgICAgICA0LFxuICAgICAgICAxMzksXG4gICAgICAgIDIzMSxcbiAgICAgICAgODIsXG4gICAgICAgIDU2LFxuICAgICAgICAxOTEsXG4gICAgICAgIDE5OCxcbiAgICAgICAgOTBcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNDMsXG4gICAgICAgIDU2LFxuICAgICAgICAxNDIsXG4gICAgICAgIDM0LFxuICAgICAgICAyOCxcbiAgICAgICAgMTYzLFxuICAgICAgICA4NyxcbiAgICAgICAgODQsXG4gICAgICAgIDIwMCxcbiAgICAgICAgMTMzLFxuICAgICAgICA2NixcbiAgICAgICAgMjU1LFxuICAgICAgICA3NSxcbiAgICAgICAgMjU1LFxuICAgICAgICA4LFxuICAgICAgICA5NSxcbiAgICAgICAgNTMsXG4gICAgICAgIDEwOCxcbiAgICAgICAgMTU4LFxuICAgICAgICA2OCxcbiAgICAgICAgMTY3LFxuICAgICAgICAxMjcsXG4gICAgICAgIDU2LFxuICAgICAgICAyNTIsXG4gICAgICAgIDIzMCxcbiAgICAgICAgNDYsXG4gICAgICAgIDk1LFxuICAgICAgICA3NCxcbiAgICAgICAgMTg5LFxuICAgICAgICAxNjgsXG4gICAgICAgIDYsXG4gICAgICAgIDEyMlxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJwYWlyaW5nRXBoZW1lcmFsS2V5UGFpclwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNTYsXG4gICAgICAgIDExNCxcbiAgICAgICAgMTk3LFxuICAgICAgICAyMTAsXG4gICAgICAgIDcyLFxuICAgICAgICAyMDIsXG4gICAgICAgIDcxLFxuICAgICAgICAxNDcsXG4gICAgICAgIDIyNyxcbiAgICAgICAgMTM2LFxuICAgICAgICAxODIsXG4gICAgICAgIDI3LFxuICAgICAgICAzLFxuICAgICAgICAxNjYsXG4gICAgICAgIDIzMCxcbiAgICAgICAgMjQzLFxuICAgICAgICA1LFxuICAgICAgICAxNzEsXG4gICAgICAgIDE4MCxcbiAgICAgICAgMTAwLFxuICAgICAgICAxMTgsXG4gICAgICAgIDY5LFxuICAgICAgICAxMDQsXG4gICAgICAgIDEzOSxcbiAgICAgICAgMTg0LFxuICAgICAgICAxMzgsXG4gICAgICAgIDIxOCxcbiAgICAgICAgNixcbiAgICAgICAgMTU5LFxuICAgICAgICA3MixcbiAgICAgICAgMzYsXG4gICAgICAgIDExN1xuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA4NSxcbiAgICAgICAgMTMyLFxuICAgICAgICAxNTAsXG4gICAgICAgIDEwNCxcbiAgICAgICAgMjM4LFxuICAgICAgICA2OSxcbiAgICAgICAgNjEsXG4gICAgICAgIDYsXG4gICAgICAgIDE3OSxcbiAgICAgICAgMTA3LFxuICAgICAgICAxNjQsXG4gICAgICAgIDE5MCxcbiAgICAgICAgMTU2LFxuICAgICAgICAyNDksXG4gICAgICAgIDQzLFxuICAgICAgICAxMyxcbiAgICAgICAgMTMwLFxuICAgICAgICA2MixcbiAgICAgICAgMTc4LFxuICAgICAgICA5MixcbiAgICAgICAgMzIsXG4gICAgICAgIDgxLFxuICAgICAgICAyMzMsXG4gICAgICAgIDIxMixcbiAgICAgICAgOTgsXG4gICAgICAgIDM0LFxuICAgICAgICA1LFxuICAgICAgICAxOTksXG4gICAgICAgIDEzNSxcbiAgICAgICAgMTgsXG4gICAgICAgIDExMCxcbiAgICAgICAgNTdcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkSWRlbnRpdHlLZXlcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDEyOCxcbiAgICAgICAgMTU5LFxuICAgICAgICAyMzEsXG4gICAgICAgIDE2LFxuICAgICAgICAyMjMsXG4gICAgICAgIDM4LFxuICAgICAgICAxNTEsXG4gICAgICAgIDE4MCxcbiAgICAgICAgNTQsXG4gICAgICAgIDIyLFxuICAgICAgICA5NCxcbiAgICAgICAgOTksXG4gICAgICAgIDIzMCxcbiAgICAgICAgNzIsXG4gICAgICAgIDI1NSxcbiAgICAgICAgMjQ1LFxuICAgICAgICAxMzEsXG4gICAgICAgIDIxLFxuICAgICAgICA2OCxcbiAgICAgICAgMjEzLFxuICAgICAgICAxMjcsXG4gICAgICAgIDE2OSxcbiAgICAgICAgMjI0LFxuICAgICAgICA5OCxcbiAgICAgICAgMTYzLFxuICAgICAgICAyNDAsXG4gICAgICAgIDU5LFxuICAgICAgICAxNDEsXG4gICAgICAgIDE0MyxcbiAgICAgICAgMjUsXG4gICAgICAgIDEsXG4gICAgICAgIDEyNFxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAzNSxcbiAgICAgICAgNjYsXG4gICAgICAgIDIwNSxcbiAgICAgICAgMjI1LFxuICAgICAgICAxNzQsXG4gICAgICAgIDIwMixcbiAgICAgICAgMjUzLFxuICAgICAgICAxOTEsXG4gICAgICAgIDEzOSxcbiAgICAgICAgMTYxLFxuICAgICAgICA1OSxcbiAgICAgICAgMSxcbiAgICAgICAgNzAsXG4gICAgICAgIDIzOCxcbiAgICAgICAgMjA2LFxuICAgICAgICAxOTksXG4gICAgICAgIDEyMCxcbiAgICAgICAgMTg3LFxuICAgICAgICAxNDgsXG4gICAgICAgIDQsXG4gICAgICAgIDAsXG4gICAgICAgIDI0MyxcbiAgICAgICAgMTg2LFxuICAgICAgICAyNDksXG4gICAgICAgIDcsXG4gICAgICAgIDE3OSxcbiAgICAgICAgMjEzLFxuICAgICAgICAxODIsXG4gICAgICAgIDcxLFxuICAgICAgICAyMyxcbiAgICAgICAgMjEsXG4gICAgICAgIDY3XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZFByZUtleVwiOiB7XG4gICAgXCJrZXlQYWlyXCI6IHtcbiAgICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDEyOCxcbiAgICAgICAgICAxMzYsXG4gICAgICAgICAgMTMwLFxuICAgICAgICAgIDQ4LFxuICAgICAgICAgIDIzMSxcbiAgICAgICAgICAyMzQsXG4gICAgICAgICAgNTUsXG4gICAgICAgICAgMTkzLFxuICAgICAgICAgIDI1NSxcbiAgICAgICAgICAxMyxcbiAgICAgICAgICA5MyxcbiAgICAgICAgICAyMjcsXG4gICAgICAgICAgMTMsXG4gICAgICAgICAgNDksXG4gICAgICAgICAgMjA5LFxuICAgICAgICAgIDI0NCxcbiAgICAgICAgICA5NCxcbiAgICAgICAgICAyMzUsXG4gICAgICAgICAgMTk4LFxuICAgICAgICAgIDcxLFxuICAgICAgICAgIDU5LFxuICAgICAgICAgIDE3NSxcbiAgICAgICAgICA0MixcbiAgICAgICAgICAxNTEsXG4gICAgICAgICAgMTg1LFxuICAgICAgICAgIDYwLFxuICAgICAgICAgIDEzNixcbiAgICAgICAgICA1NyxcbiAgICAgICAgICA4LFxuICAgICAgICAgIDE0MSxcbiAgICAgICAgICAyNTUsXG4gICAgICAgICAgNzFcbiAgICAgICAgXVxuICAgICAgfSxcbiAgICAgIFwicHVibGljXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMjA2LFxuICAgICAgICAgIDE5MixcbiAgICAgICAgICAxMzYsXG4gICAgICAgICAgMTg1LFxuICAgICAgICAgIDU3LFxuICAgICAgICAgIDgsXG4gICAgICAgICAgMjM1LFxuICAgICAgICAgIDcsXG4gICAgICAgICAgMTAxLFxuICAgICAgICAgIDEyOSxcbiAgICAgICAgICAxNixcbiAgICAgICAgICAxMzgsXG4gICAgICAgICAgMTAyLFxuICAgICAgICAgIDcyLFxuICAgICAgICAgIDYsXG4gICAgICAgICAgNzUsXG4gICAgICAgICAgMTg3LFxuICAgICAgICAgIDYwLFxuICAgICAgICAgIDIxNCxcbiAgICAgICAgICAxODksXG4gICAgICAgICAgNzcsXG4gICAgICAgICAgMjI0LFxuICAgICAgICAgIDE4OSxcbiAgICAgICAgICAzNixcbiAgICAgICAgICAxMDUsXG4gICAgICAgICAgMTIsXG4gICAgICAgICAgMjEwLFxuICAgICAgICAgIDE0NyxcbiAgICAgICAgICAyMjMsXG4gICAgICAgICAgMjQ1LFxuICAgICAgICAgIDIzMixcbiAgICAgICAgICAxMDlcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH0sXG4gICAgXCJzaWduYXR1cmVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxNjYsXG4gICAgICAgIDIyLFxuICAgICAgICAyNSxcbiAgICAgICAgMTY4LFxuICAgICAgICAyMDIsXG4gICAgICAgIDEwMyxcbiAgICAgICAgMjQ1LFxuICAgICAgICA3MCxcbiAgICAgICAgMTUsXG4gICAgICAgIDc1LFxuICAgICAgICAyNixcbiAgICAgICAgMTIyLFxuICAgICAgICAxNjEsXG4gICAgICAgIDQ4LFxuICAgICAgICAxMzcsXG4gICAgICAgIDE0MixcbiAgICAgICAgMTgyLFxuICAgICAgICA1NSxcbiAgICAgICAgMTE1LFxuICAgICAgICAxMTEsXG4gICAgICAgIDE4NSxcbiAgICAgICAgMTA1LFxuICAgICAgICAyMixcbiAgICAgICAgODMsXG4gICAgICAgIDEyNyxcbiAgICAgICAgNzIsXG4gICAgICAgIDI1MSxcbiAgICAgICAgMjQ1LFxuICAgICAgICAxNzUsXG4gICAgICAgIDExMCxcbiAgICAgICAgMTM3LFxuICAgICAgICAyMTIsXG4gICAgICAgIDE3MyxcbiAgICAgICAgNzAsXG4gICAgICAgIDQwLFxuICAgICAgICA3NyxcbiAgICAgICAgOCxcbiAgICAgICAgMTM1LFxuICAgICAgICAyMjksXG4gICAgICAgIDI1LFxuICAgICAgICAxMjMsXG4gICAgICAgIDc4LFxuICAgICAgICAxMTksXG4gICAgICAgIDEyNyxcbiAgICAgICAgMTcsXG4gICAgICAgIDU1LFxuICAgICAgICAxOTIsXG4gICAgICAgIDExNSxcbiAgICAgICAgMjE1LFxuICAgICAgICAxNzMsXG4gICAgICAgIDEyNCxcbiAgICAgICAgNjEsXG4gICAgICAgIDIyNSxcbiAgICAgICAgMTg0LFxuICAgICAgICAyMDAsXG4gICAgICAgIDczLFxuICAgICAgICA3NixcbiAgICAgICAgNTEsXG4gICAgICAgIDE1NCxcbiAgICAgICAgMzQsXG4gICAgICAgIDEwMixcbiAgICAgICAgMTM4LFxuICAgICAgICA0MyxcbiAgICAgICAgMTM4XG4gICAgICBdXG4gICAgfSxcbiAgICBcImtleUlkXCI6IDFcbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25JZFwiOiAxNTgsXG4gIFwiYWR2U2VjcmV0S2V5XCI6IFwiaGFMT2dFMHlNKys2YTNGOXh2Qm5PWWZabTJOYWQ2MlFSUmpRdTJRZDhyTT1cIixcbiAgXCJwcm9jZXNzZWRIaXN0b3J5TWVzc2FnZXNcIjogW10sXG4gIFwibmV4dFByZUtleUlkXCI6IDMxLFxuICBcImZpcnN0VW51cGxvYWRlZFByZUtleUlkXCI6IDMxLFxuICBcImFjY291bnRTeW5jQ291bnRlclwiOiAwLFxuICBcImFjY291bnRTZXR0aW5nc1wiOiB7XG4gICAgXCJ1bmFyY2hpdmVDaGF0c1wiOiBmYWxzZVxuICB9LFxuICBcImRldmljZUlkXCI6IFwiUF91NW9qRkNTaGFzSEx6WGVnMHpBd1wiLFxuICBcInBob25lSWRcIjogXCI2ZWU1Y2FkMy03Mjg2LTRhMDgtOWM2NS0zM2M4MDc0MzliNzVcIixcbiAgXCJpZGVudGl0eUlkXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgNzgsXG4gICAgICAxMDcsXG4gICAgICAxMzMsXG4gICAgICAxMzMsXG4gICAgICA5MCxcbiAgICAgIDIxLFxuICAgICAgMTc4LFxuICAgICAgMzIsXG4gICAgICAxNjMsXG4gICAgICAxMzMsXG4gICAgICAyNyxcbiAgICAgIDg0LFxuICAgICAgOSxcbiAgICAgIDg3LFxuICAgICAgMzAsXG4gICAgICAxMjAsXG4gICAgICAxODUsXG4gICAgICAyNTIsXG4gICAgICAxLFxuICAgICAgNTVcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0ZXJlZFwiOiB0cnVlLFxuICBcImJhY2t1cFRva2VuXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMTQ4LFxuICAgICAgMjM3LFxuICAgICAgMTc2LFxuICAgICAgNTgsXG4gICAgICAxMCxcbiAgICAgIDEyOCxcbiAgICAgIDEzNixcbiAgICAgIDIxNixcbiAgICAgIDg4LFxuICAgICAgMTcwLFxuICAgICAgNTYsXG4gICAgICAxMTEsXG4gICAgICAyNDEsXG4gICAgICAyNSxcbiAgICAgIDU4LFxuICAgICAgMTM3LFxuICAgICAgNzUsXG4gICAgICAyNCxcbiAgICAgIDIyNyxcbiAgICAgIDMwXG4gICAgXVxuICB9LFxuICBcInJlZ2lzdHJhdGlvblwiOiB7fSxcbiAgXCJwYWlyaW5nQ29kZVwiOiBcIjg4WUFZTVk2XCIsXG4gIFwibWVcIjoge1xuICAgIFwiaWRcIjogXCIyNTQ3NDI1NTc1Mjk6N0BzLndoYXRzYXBwLm5ldFwiLFxuICAgIFwibGlkXCI6IFwiMjIyNzQwMzU5NDEzODQ6N0BsaWRcIlxuICB9LFxuICBcImFjY291bnRcIjoge1xuICAgIFwiZGV0YWlsc1wiOiBcIkNPaVE3NVFHRUxub25MTUdHQVVnQUNnQVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZUtleVwiOiBcImJTSkh4ZXpLb0VsOUhiQkRWRGlBV3JWcTliWkVIbTc3M01KWFE0N0U0U3c9XCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlXCI6IFwiNG10T1JXbFo1Q2FNam42UTFMVGw0QjFDb3VIVGpsVlk2MjkvSm1oTjc4TmpCQ040MUJiTjVUZ3BmcDRSUnNMS0tIcDNGSDBHalRIaWh3UUxsVExCQXc9PVwiLFxuICAgIFwiZGV2aWNlU2lnbmF0dXJlXCI6IFwicHllZXRCTVNieERqYnFBa0hiS254T1BsZDh6eHpLQ3FjYkJZVUxCMVVlc1VFZHd4VThOM1IxeTRGOFBkVi9hdWtSdytYZ0JGQ0pEb3czY24zRnFraVE9PVwiXG4gIH0sXG4gIFwic2lnbmFsSWRlbnRpdGllc1wiOiBbXG4gICAge1xuICAgICAgXCJpZGVudGlmaWVyXCI6IHtcbiAgICAgICAgXCJuYW1lXCI6IFwiMjU0NzQyNTU3NTI5OjdAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJkZXZpY2VJZFwiOiAwXG4gICAgICB9LFxuICAgICAgXCJpZGVudGlmaWVyS2V5XCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNSxcbiAgICAgICAgICAxMDksXG4gICAgICAgICAgMzQsXG4gICAgICAgICAgNzEsXG4gICAgICAgICAgMTk3LFxuICAgICAgICAgIDIzNixcbiAgICAgICAgICAyMDIsXG4gICAgICAgICAgMTYwLFxuICAgICAgICAgIDczLFxuICAgICAgICAgIDEyNSxcbiAgICAgICAgICAyOSxcbiAgICAgICAgICAxNzYsXG4gICAgICAgICAgNjcsXG4gICAgICAgICAgODQsXG4gICAgICAgICAgNTYsXG4gICAgICAgICAgMTI4LFxuICAgICAgICAgIDkwLFxuICAgICAgICAgIDE4MSxcbiAgICAgICAgICAxMDYsXG4gICAgICAgICAgMjQ1LFxuICAgICAgICAgIDE4MixcbiAgICAgICAgICA2OCxcbiAgICAgICAgICAzMCxcbiAgICAgICAgICAxMTAsXG4gICAgICAgICAgMjUxLFxuICAgICAgICAgIDIyMCxcbiAgICAgICAgICAxOTQsXG4gICAgICAgICAgODcsXG4gICAgICAgICAgNjcsXG4gICAgICAgICAgMTQyLFxuICAgICAgICAgIDE5NixcbiAgICAgICAgICAyMjUsXG4gICAgICAgICAgNDRcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH1cbiAgXSxcbiAgXCJwbGF0Zm9ybVwiOiBcImFuZHJvaWRcIixcbiAgXCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXBcIjogMTcxODAzOTYxMyxcbiAgXCJteUFwcFN0YXRlS2V5SWRcIjogXCJBQUFBQU9jaFwiXG59IiwKICAiYXBwLXN0YXRlLXN5bmMta2V5LUFBQUFBT2NoLmpzb24iOiAie1wia2V5RGF0YVwiOlwiQ2Z4S2s2ekJrcFYyY3pwWGgzbGRrWHQ1ajdvdTd5bk5lTGNzRDFxVzBrUT1cIixcImZpbmdlcnByaW50XCI6e1wicmF3SWRcIjoxNjU0Mzc2NTUyLFwiY3VycmVudEluZGV4XCI6MSxcImRldmljZUluZGV4ZXNcIjpbMCwxXX0sXCJ0aW1lc3RhbXBcIjpcIjE3MTExMzk5MjQxNzlcIn0iCn0="  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.7",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "WhatsApp Bot",
  ownername:process.env.OWNER_NAME|| "Frank",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "private",
  LANG: ( process.env.THEME ||  "FRANK"  ).toUpperCase(),



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
