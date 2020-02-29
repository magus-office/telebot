/*CMD
  command: /exchange

  <<HELP

  HELP
  need_reply: 
  auto_retry_time: 
  folder: 
  answer: 
  keyboard: 
  aliases: 🌀 exchange
CMD*/

if(chat.chat_type!="private"){ return }

let res = Libs.ResourcesLib.userRes("BBPoint");

if(!BBAdmin.curUser.parentAccount){
  Bot.runCommand("/no-linked-account");
}else{
  Bot.sendMessage("You have: " + res.value() + "💎 BB Points." + 
   "\n\n1 💎 - it is 50 extra iterations." +
   "\n\nYou can change your " + res.value() + "💎 to " + 50*res.value() + " iterations."
  );
  Bot.runCommand("/doexchange");
}

