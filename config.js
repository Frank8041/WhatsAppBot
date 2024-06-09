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


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_21_01_06_09_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTY4LFxuICAgICAgICA5OCxcbiAgICAgICAgMTc1LFxuICAgICAgICA3LFxuICAgICAgICAxMjMsXG4gICAgICAgIDExLFxuICAgICAgICAyNTAsXG4gICAgICAgIDIwLFxuICAgICAgICAyNSxcbiAgICAgICAgNTksXG4gICAgICAgIDI0MixcbiAgICAgICAgNzAsXG4gICAgICAgIDczLFxuICAgICAgICA2MCxcbiAgICAgICAgMTE3LFxuICAgICAgICAyMCxcbiAgICAgICAgODEsXG4gICAgICAgIDExOCxcbiAgICAgICAgODAsXG4gICAgICAgIDE4OSxcbiAgICAgICAgMTgsXG4gICAgICAgIDE2MSxcbiAgICAgICAgMTY1LFxuICAgICAgICAxNyxcbiAgICAgICAgNTAsXG4gICAgICAgIDIxMCxcbiAgICAgICAgNTksXG4gICAgICAgIDI0OCxcbiAgICAgICAgODYsXG4gICAgICAgIDEwNixcbiAgICAgICAgNTcsXG4gICAgICAgIDExMVxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAzNixcbiAgICAgICAgMzcsXG4gICAgICAgIDMyLFxuICAgICAgICAxNjUsXG4gICAgICAgIDE3NSxcbiAgICAgICAgOCxcbiAgICAgICAgMzYsXG4gICAgICAgIDc0LFxuICAgICAgICAxNjQsXG4gICAgICAgIDI0MCxcbiAgICAgICAgMTk5LFxuICAgICAgICAyMjIsXG4gICAgICAgIDUsXG4gICAgICAgIDE0MCxcbiAgICAgICAgMTksXG4gICAgICAgIDE5MCxcbiAgICAgICAgMjEyLFxuICAgICAgICA0MyxcbiAgICAgICAgMjE0LFxuICAgICAgICA2MCxcbiAgICAgICAgMTE4LFxuICAgICAgICAyMzEsXG4gICAgICAgIDU0LFxuICAgICAgICAyNDgsXG4gICAgICAgIDQsXG4gICAgICAgIDEwNixcbiAgICAgICAgMTkxLFxuICAgICAgICAyMDksXG4gICAgICAgIDkxLFxuICAgICAgICAxOTUsXG4gICAgICAgIDE2LFxuICAgICAgICA1OVxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJwYWlyaW5nRXBoZW1lcmFsS2V5UGFpclwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTQ0LFxuICAgICAgICAxOTAsXG4gICAgICAgIDY0LFxuICAgICAgICA3MSxcbiAgICAgICAgMTI1LFxuICAgICAgICA0MSxcbiAgICAgICAgMjEyLFxuICAgICAgICAyMTMsXG4gICAgICAgIDE5NyxcbiAgICAgICAgMjIyLFxuICAgICAgICAxNDUsXG4gICAgICAgIDE2MCxcbiAgICAgICAgMjA2LFxuICAgICAgICAyNTUsXG4gICAgICAgIDE1NyxcbiAgICAgICAgMTM4LFxuICAgICAgICAzNCxcbiAgICAgICAgOTQsXG4gICAgICAgIDEyMCxcbiAgICAgICAgMTExLFxuICAgICAgICAxNzUsXG4gICAgICAgIDI1MyxcbiAgICAgICAgMjI3LFxuICAgICAgICAxODgsXG4gICAgICAgIDI0NCxcbiAgICAgICAgMjA2LFxuICAgICAgICAxNSxcbiAgICAgICAgMTQ3LFxuICAgICAgICAxNzYsXG4gICAgICAgIDM5LFxuICAgICAgICAxNyxcbiAgICAgICAgMTAyXG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE4OCxcbiAgICAgICAgMTkwLFxuICAgICAgICAxMzMsXG4gICAgICAgIDE4NyxcbiAgICAgICAgMTYyLFxuICAgICAgICAxMDYsXG4gICAgICAgIDIzOCxcbiAgICAgICAgMTE4LFxuICAgICAgICA2OSxcbiAgICAgICAgMTc4LFxuICAgICAgICAyMjMsXG4gICAgICAgIDE1MyxcbiAgICAgICAgMjM1LFxuICAgICAgICAyMTAsXG4gICAgICAgIDE4MCxcbiAgICAgICAgMCxcbiAgICAgICAgMjI4LFxuICAgICAgICAyNTIsXG4gICAgICAgIDIwOCxcbiAgICAgICAgMTk1LFxuICAgICAgICAxOCxcbiAgICAgICAgMjI2LFxuICAgICAgICA3MCxcbiAgICAgICAgMjA0LFxuICAgICAgICAxMTUsXG4gICAgICAgIDE4NixcbiAgICAgICAgMTU1LFxuICAgICAgICA1MyxcbiAgICAgICAgODEsXG4gICAgICAgIDEyNCxcbiAgICAgICAgMjQxLFxuICAgICAgICAyNFxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRJZGVudGl0eUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTY4LFxuICAgICAgICAzLFxuICAgICAgICAxOTEsXG4gICAgICAgIDExNyxcbiAgICAgICAgMjU1LFxuICAgICAgICAxMDAsXG4gICAgICAgIDIwNyxcbiAgICAgICAgOTUsXG4gICAgICAgIDEwMCxcbiAgICAgICAgMjIsXG4gICAgICAgIDEyLFxuICAgICAgICAzNixcbiAgICAgICAgMjI3LFxuICAgICAgICA5NSxcbiAgICAgICAgMTEzLFxuICAgICAgICA2MSxcbiAgICAgICAgMTM4LFxuICAgICAgICAxMjMsXG4gICAgICAgIDQ3LFxuICAgICAgICA3MCxcbiAgICAgICAgMjAxLFxuICAgICAgICAyMTcsXG4gICAgICAgIDYxLFxuICAgICAgICA3NixcbiAgICAgICAgNDksXG4gICAgICAgIDkwLFxuICAgICAgICA1MSxcbiAgICAgICAgNjAsXG4gICAgICAgIDIxNixcbiAgICAgICAgMjM3LFxuICAgICAgICA5MSxcbiAgICAgICAgNjhcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjAwLFxuICAgICAgICA3OSxcbiAgICAgICAgMTk0LFxuICAgICAgICAyMjUsXG4gICAgICAgIDE1OCxcbiAgICAgICAgMjMxLFxuICAgICAgICAyNTEsXG4gICAgICAgIDYzLFxuICAgICAgICAyMzMsXG4gICAgICAgIDIsXG4gICAgICAgIDQsXG4gICAgICAgIDI0LFxuICAgICAgICA5MyxcbiAgICAgICAgMjM5LFxuICAgICAgICA4NyxcbiAgICAgICAgMTY2LFxuICAgICAgICAzLFxuICAgICAgICAyNDMsXG4gICAgICAgIDExMSxcbiAgICAgICAgMTMyLFxuICAgICAgICA0NyxcbiAgICAgICAgMTgxLFxuICAgICAgICAyMTIsXG4gICAgICAgIDcyLFxuICAgICAgICA2MCxcbiAgICAgICAgNTQsXG4gICAgICAgIDUwLFxuICAgICAgICAxMTcsXG4gICAgICAgIDE3MyxcbiAgICAgICAgNjAsXG4gICAgICAgIDEzMixcbiAgICAgICAgMTI1XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZFByZUtleVwiOiB7XG4gICAgXCJrZXlQYWlyXCI6IHtcbiAgICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDIzMixcbiAgICAgICAgICA2MyxcbiAgICAgICAgICAxMjYsXG4gICAgICAgICAgMTA2LFxuICAgICAgICAgIDY5LFxuICAgICAgICAgIDE1MSxcbiAgICAgICAgICAxMDIsXG4gICAgICAgICAgMjI0LFxuICAgICAgICAgIDEwNyxcbiAgICAgICAgICAyMjEsXG4gICAgICAgICAgMjE2LFxuICAgICAgICAgIDc5LFxuICAgICAgICAgIDE1NCxcbiAgICAgICAgICAxMjksXG4gICAgICAgICAgMTU1LFxuICAgICAgICAgIDI1MyxcbiAgICAgICAgICAyMzcsXG4gICAgICAgICAgMTM5LFxuICAgICAgICAgIDk4LFxuICAgICAgICAgIDI0MixcbiAgICAgICAgICAzNixcbiAgICAgICAgICAyMTYsXG4gICAgICAgICAgMTU5LFxuICAgICAgICAgIDIwMixcbiAgICAgICAgICA3MyxcbiAgICAgICAgICAzNCxcbiAgICAgICAgICAxODEsXG4gICAgICAgICAgNzYsXG4gICAgICAgICAgMTYyLFxuICAgICAgICAgIDE5MyxcbiAgICAgICAgICAxNzQsXG4gICAgICAgICAgNzZcbiAgICAgICAgXVxuICAgICAgfSxcbiAgICAgIFwicHVibGljXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMTAwLFxuICAgICAgICAgIDIyMyxcbiAgICAgICAgICAzMSxcbiAgICAgICAgICAyMzgsXG4gICAgICAgICAgODEsXG4gICAgICAgICAgOTIsXG4gICAgICAgICAgNTYsXG4gICAgICAgICAgODAsXG4gICAgICAgICAgMjAyLFxuICAgICAgICAgIDE2NSxcbiAgICAgICAgICA5NSxcbiAgICAgICAgICAxODYsXG4gICAgICAgICAgODYsXG4gICAgICAgICAgMTQ4LFxuICAgICAgICAgIDIwNyxcbiAgICAgICAgICAxNzQsXG4gICAgICAgICAgMjUxLFxuICAgICAgICAgIDMsXG4gICAgICAgICAgNTMsXG4gICAgICAgICAgMjMwLFxuICAgICAgICAgIDIwNSxcbiAgICAgICAgICAyNTAsXG4gICAgICAgICAgMTYwLFxuICAgICAgICAgIDgxLFxuICAgICAgICAgIDE2NyxcbiAgICAgICAgICAyMzEsXG4gICAgICAgICAgNjAsXG4gICAgICAgICAgMzYsXG4gICAgICAgICAgMTQxLFxuICAgICAgICAgIDgsXG4gICAgICAgICAgMTMwLFxuICAgICAgICAgIDFcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH0sXG4gICAgXCJzaWduYXR1cmVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxNTcsXG4gICAgICAgIDQxLFxuICAgICAgICAyNDMsXG4gICAgICAgIDEyLFxuICAgICAgICAxMDcsXG4gICAgICAgIDIyMSxcbiAgICAgICAgMTMxLFxuICAgICAgICAxMDgsXG4gICAgICAgIDg4LFxuICAgICAgICA5MCxcbiAgICAgICAgMjM3LFxuICAgICAgICAyNSxcbiAgICAgICAgMTY3LFxuICAgICAgICAxMjksXG4gICAgICAgIDEzMyxcbiAgICAgICAgMjUsXG4gICAgICAgIDIxMSxcbiAgICAgICAgMjI4LFxuICAgICAgICAyMjksXG4gICAgICAgIDE2OSxcbiAgICAgICAgNzAsXG4gICAgICAgIDUxLFxuICAgICAgICAxMDksXG4gICAgICAgIDE1NixcbiAgICAgICAgNzYsXG4gICAgICAgIDE3MCxcbiAgICAgICAgMTcwLFxuICAgICAgICA5MCxcbiAgICAgICAgMjQ3LFxuICAgICAgICAyMDksXG4gICAgICAgIDU2LFxuICAgICAgICA1LFxuICAgICAgICAyNTQsXG4gICAgICAgIDIwNSxcbiAgICAgICAgOTAsXG4gICAgICAgIDEyOSxcbiAgICAgICAgMjIwLFxuICAgICAgICAxMDgsXG4gICAgICAgIDIyMCxcbiAgICAgICAgMTMyLFxuICAgICAgICAwLFxuICAgICAgICA5LFxuICAgICAgICAxMDYsXG4gICAgICAgIDE2MyxcbiAgICAgICAgMTAzLFxuICAgICAgICAxOTIsXG4gICAgICAgIDIzNSxcbiAgICAgICAgNjcsXG4gICAgICAgIDIxNixcbiAgICAgICAgMTA0LFxuICAgICAgICAxNzUsXG4gICAgICAgIDE0OSxcbiAgICAgICAgMjAxLFxuICAgICAgICAxNDMsXG4gICAgICAgIDEzMixcbiAgICAgICAgMTY5LFxuICAgICAgICAyMjAsXG4gICAgICAgIDM5LFxuICAgICAgICAyMzgsXG4gICAgICAgIDIyNyxcbiAgICAgICAgMTgsXG4gICAgICAgIDY3LFxuICAgICAgICAyMDEsXG4gICAgICAgIDZcbiAgICAgIF1cbiAgICB9LFxuICAgIFwia2V5SWRcIjogMVxuICB9LFxuICBcInJlZ2lzdHJhdGlvbklkXCI6IDk0LFxuICBcImFkdlNlY3JldEtleVwiOiBcIkdGRjZYZjdwWDFmcFhMMGlMQTJGaXB3M093c1lMV3h6bkVsY09GbzJVc009XCIsXG4gIFwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzXCI6IFtcbiAgICB7XG4gICAgICBcImtleVwiOiB7XG4gICAgICAgIFwicmVtb3RlSmlkXCI6IFwiMjU0Nzg3ODEwMDI4QHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZnJvbU1lXCI6IHRydWUsXG4gICAgICAgIFwiaWRcIjogXCI4RTcyNTE4OTI0QjdEQkQ2QTAyRjNGNjlEQzk0MTcwNlwiXG4gICAgICB9LFxuICAgICAgXCJtZXNzYWdlVGltZXN0YW1wXCI6IDE3MTc5NjY4NjdcbiAgICB9LFxuICAgIHtcbiAgICAgIFwia2V5XCI6IHtcbiAgICAgICAgXCJyZW1vdGVKaWRcIjogXCIyNTQ3ODc4MTAwMjhAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJmcm9tTWVcIjogdHJ1ZSxcbiAgICAgICAgXCJpZFwiOiBcIjM5NUFCNjUxNDQwQzQ2NDhDODM2RURBQkUyRjEyMEM4XCJcbiAgICAgIH0sXG4gICAgICBcIm1lc3NhZ2VUaW1lc3RhbXBcIjogMTcxNzk2Njg2OFxuICAgIH0sXG4gICAge1xuICAgICAgXCJrZXlcIjoge1xuICAgICAgICBcInJlbW90ZUppZFwiOiBcIjI1NDc4NzgxMDAyOEBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImZyb21NZVwiOiB0cnVlLFxuICAgICAgICBcImlkXCI6IFwiMjA5QTlFM0RCMEY5N0M1OERGREE5NkI0NTI3RjE3QjJcIlxuICAgICAgfSxcbiAgICAgIFwibWVzc2FnZVRpbWVzdGFtcFwiOiAxNzE3OTY2ODcyXG4gICAgfSxcbiAgICB7XG4gICAgICBcImtleVwiOiB7XG4gICAgICAgIFwicmVtb3RlSmlkXCI6IFwiMjU0Nzg3ODEwMDI4QHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZnJvbU1lXCI6IHRydWUsXG4gICAgICAgIFwiaWRcIjogXCI1RTZERTczQTA1QUExNDFCNzA3NDc2M0I4MjQxODIzQVwiXG4gICAgICB9LFxuICAgICAgXCJtZXNzYWdlVGltZXN0YW1wXCI6IDE3MTc5NjY4NzNcbiAgICB9XG4gIF0sXG4gIFwibmV4dFByZUtleUlkXCI6IDMxLFxuICBcImZpcnN0VW51cGxvYWRlZFByZUtleUlkXCI6IDMxLFxuICBcImFjY291bnRTeW5jQ291bnRlclwiOiAxLFxuICBcImFjY291bnRTZXR0aW5nc1wiOiB7XG4gICAgXCJ1bmFyY2hpdmVDaGF0c1wiOiBmYWxzZVxuICB9LFxuICBcImRldmljZUlkXCI6IFwiMmtDbEFzSWNTc1d4QUg0LTM3c3R5Z1wiLFxuICBcInBob25lSWRcIjogXCJkZTkwMjA0Yi1lMTk5LTRhMTktYThmNS0xMTFjNmMwYjUxNzVcIixcbiAgXCJpZGVudGl0eUlkXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMjUyLFxuICAgICAgMTgxLFxuICAgICAgMSxcbiAgICAgIDE5NSxcbiAgICAgIDE2MCxcbiAgICAgIDI1MixcbiAgICAgIDIyNSxcbiAgICAgIDE1NSxcbiAgICAgIDkwLFxuICAgICAgMTc0LFxuICAgICAgMTQ4LFxuICAgICAgMTY3LFxuICAgICAgMTQyLFxuICAgICAgMTQ0LFxuICAgICAgMTg4LFxuICAgICAgMTIwLFxuICAgICAgODEsXG4gICAgICAxMDIsXG4gICAgICA0MSxcbiAgICAgIDQ2XG4gICAgXVxuICB9LFxuICBcInJlZ2lzdGVyZWRcIjogdHJ1ZSxcbiAgXCJiYWNrdXBUb2tlblwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDg1LFxuICAgICAgNTAsXG4gICAgICA1MCxcbiAgICAgIDI0LFxuICAgICAgMTMsXG4gICAgICAxOCxcbiAgICAgIDE3NyxcbiAgICAgIDc3LFxuICAgICAgMjI3LFxuICAgICAgOTIsXG4gICAgICA4MixcbiAgICAgIDIwNSxcbiAgICAgIDE2MCxcbiAgICAgIDQsXG4gICAgICA5NCxcbiAgICAgIDE2NSxcbiAgICAgIDQ4LFxuICAgICAgNCxcbiAgICAgIDIzMyxcbiAgICAgIDIzXG4gICAgXVxuICB9LFxuICBcInJlZ2lzdHJhdGlvblwiOiB7fSxcbiAgXCJwYWlyaW5nQ29kZVwiOiBcIllWSzNXQjlUXCIsXG4gIFwibWVcIjoge1xuICAgIFwiaWRcIjogXCIyNTQ3ODc4MTAwMjg6NUBzLndoYXRzYXBwLm5ldFwiLFxuICAgIFwibGlkXCI6IFwiMTEzNjQ1MzM3OTkzMzMxOjVAbGlkXCIsXG4gICAgXCJuYW1lXCI6IFwiTVwiXG4gIH0sXG4gIFwiYWNjb3VudFwiOiB7XG4gICAgXCJkZXRhaWxzXCI6IFwiQ0t5SnhaSUJFSSt3bUxNR0dBRWdBQ2dBXCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlS2V5XCI6IFwiUEtrejNBcmhyZVlNVkxmOVpCb1F3bG53OWI2OS9FQmxwWnpoQUFWOEh5Zz1cIixcbiAgICBcImFjY291bnRTaWduYXR1cmVcIjogXCJxeTdUSWgzQXZicGVUeUNIckYvMWJXVUtHbGdLQWFWZnY4akVvT2JwdEVmVlhwdWVFenU1YkFlRjdkWmtRS0pyK0lsUTBodWZmN05KeXoxRWRNZE5Ddz09XCIsXG4gICAgXCJkZXZpY2VTaWduYXR1cmVcIjogXCI3K1ZlM2x5MUtFQitGMzBDdStLNG14cWZHWTdha0RkU2p6Ny85Y0NYR2lGaDNOQVptSC9tMWhxUXhzVzRkQ3dLYjluMENMR2VCTXZGaGd1Tk5DbU5Bdz09XCJcbiAgfSxcbiAgXCJzaWduYWxJZGVudGl0aWVzXCI6IFtcbiAgICB7XG4gICAgICBcImlkZW50aWZpZXJcIjoge1xuICAgICAgICBcIm5hbWVcIjogXCIyNTQ3ODc4MTAwMjg6NUBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImRldmljZUlkXCI6IDBcbiAgICAgIH0sXG4gICAgICBcImlkZW50aWZpZXJLZXlcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA1LFxuICAgICAgICAgIDYwLFxuICAgICAgICAgIDE2OSxcbiAgICAgICAgICA1MSxcbiAgICAgICAgICAyMjAsXG4gICAgICAgICAgMTAsXG4gICAgICAgICAgMjI1LFxuICAgICAgICAgIDE3MyxcbiAgICAgICAgICAyMzAsXG4gICAgICAgICAgMTIsXG4gICAgICAgICAgODQsXG4gICAgICAgICAgMTgzLFxuICAgICAgICAgIDI1MyxcbiAgICAgICAgICAxMDAsXG4gICAgICAgICAgMjYsXG4gICAgICAgICAgMTYsXG4gICAgICAgICAgMTk0LFxuICAgICAgICAgIDg5LFxuICAgICAgICAgIDI0MCxcbiAgICAgICAgICAyNDUsXG4gICAgICAgICAgMTkwLFxuICAgICAgICAgIDE4OSxcbiAgICAgICAgICAyNTIsXG4gICAgICAgICAgNjQsXG4gICAgICAgICAgMTAxLFxuICAgICAgICAgIDE2NSxcbiAgICAgICAgICAxNTYsXG4gICAgICAgICAgMjI1LFxuICAgICAgICAgIDAsXG4gICAgICAgICAgNSxcbiAgICAgICAgICAxMjQsXG4gICAgICAgICAgMzEsXG4gICAgICAgICAgNDBcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH1cbiAgXSxcbiAgXCJwbGF0Zm9ybVwiOiBcImFuZHJvaWRcIixcbiAgXCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXBcIjogMTcxNzk2Njg2NixcbiAgXCJteUFwcFN0YXRlS2V5SWRcIjogXCJBQUFBQUNWM1wiXG59IiwKICAiYXBwLXN0YXRlLXN5bmMta2V5LUFBQUFBQ1YzLmpzb24iOiAie1wia2V5RGF0YVwiOlwiOGJsSmhHZWtpTVhKOXpTc0F4U1krenZ2WElOLzBkTXNLV0MwN0kzVFhtYz1cIixcImZpbmdlcnByaW50XCI6e1wicmF3SWRcIjozMDczMTU4ODQsXCJjdXJyZW50SW5kZXhcIjoxLFwiZGV2aWNlSW5kZXhlc1wiOlswLDFdfSxcInRpbWVzdGFtcFwiOlwiMTcxNzk2Njg2NzIyNlwifSIKfQ=="  // PUT your SESSION_ID 


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
