/*CMD
  command: /adminReply
  help: 
  need_reply: true
  auto_retry_time: 
  folder: ?admin

  <<ANSWER
*Please send your massage!
ℹ User will get notification instant!*
  ANSWER
  keyboard: 
  aliases: 
CMD*/

tgid = options.tgid;

msg = "Answer from admin: " + "\n" + message + "\n\n Thank you! ❤";
Bot.sendMessageToChatWithId(tgid, msg);

Bot.sendMessage("Done ✅")
