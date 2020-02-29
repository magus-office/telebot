/*CMD
  command: /login
  help: 
  need_reply: true
  auto_retry_time: 
  folder: ?admin
  answer: *⚠ Please input password here!*
  keyboard: 
  aliases: 
CMD*/

msg = "❌ Access denied. \nIncorrect Password! /login"

if(message=="tgbots123"){
  Bot.setProperty("admin_chat", chat.chatid, "string")
  msg = "Done ✅ \nYou admin now.";
}

Bot.sendMessage(msg);

