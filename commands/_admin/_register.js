/*CMD
  command: /register
  help: 
  need_reply: true
  auto_retry_time: 
  folder: ?admin

  <<ANSWER
*➡ Please send your channel* @username 

Example: /add @username
  ANSWER
  keyboard: 
  aliases: 🖋 register new channel
CMD*/

var admin_chat = Bot.getProperty("admin_chat");

if(!admin_chat){
  Bot.sendMessage("⚠ Sorry. Something Error");
  return // exit
}

user_link = Libs.commonLib.getLinkFor(user)

msg = "Message from: " + user_link +
     "\n" +
      message +
     "\n/reply" + user.telegramid;


Bot.sendMessageToChatWithId(
  admin_chat, msg
);

/*
Api.forwardMessage({ 
 chat_id: admin_chat,
 message_id: request.message_id
});
*/

Bot.sendMessage("*✅ Registered Successful! ✅*\n\n⚠Add Admin @SuperfastTBot with \n>can post messages\n>can delete messages\n>can edit messages\n\n*⌛Waiting for admin action!*");


