/*CMD
  command: /balance
  help: 
  need_reply: 
  auto_retry_time: 
  folder: 
  answer: 

  <<KEYBOARD

  KEYBOARD
  aliases: 📚 my earnings
CMD*/

if(chat.chat_type!="private"){ return }

let res = Libs.ResourcesLib.userRes("BBPoint");
Bot.sendMessage("\n\nLast Updated: 🕰\nCurrent Balance: " + res.value() + " 💰\n\nPlease Join: @Tgbots_News");
