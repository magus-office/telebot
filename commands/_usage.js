/*CMD
  command: /usage
  help: 
  need_reply: 
  auto_retry_time: 
  folder: 
  answer: 
  keyboard: 
  aliases: 📊 usage
CMD*/

if(chat.chat_type!="private"){ return }

let adminDaily = Libs.ResourcesLib.anotherChatRes("admin-daily", "bot");
let adminDailyRemove = Libs.ResourcesLib.anotherChatRes("admin-remove-daily", "bot");

let mpDaily = Libs.ResourcesLib.anotherChatRes("masters-daily", "bot");
let mpDailyRemove = Libs.ResourcesLib.anotherChatRes("master-remove-daily", "bot");

let mp = Libs.ResourcesLib.anotherChatRes("bbmp", "bot");

usersDaily = Libs.ResourcesLib.anotherChatRes("users-daily", "bot");

msg = "*💾 Current daily usage* " +
  "\n\n💰 Total Distributed: " + adminDaily.value()+
  "\n   🗂 Withdrawal: " + adminDailyRemove.value()+
  
  "\n\n👦🏻 Admin Total Usages" + mpDaily.value()+ "/ 🔮" + mp.value() +
  "\n   🗂 Withdrawal: " + mpDailyRemove.value() +
  
  "\n\n👥 Users handed out: " + usersDaily.value();

Bot.sendMessage(msg);


