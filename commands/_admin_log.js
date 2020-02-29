/*CMD
  command: /admin_log
  help: 
  need_reply: 
  auto_retry_time: 
  folder: 
  answer: 
  keyboard: 
  aliases: $admin
CMD*/

if(chat.chat_type!="private"){ return }

Bot.sendKeyboard("📤 Send Post, 🗑 Delete Post,\n➕ Add Channel,⛔️ Remove Channel,\n💰Balance Update,🗃 Commands, \n🤖 Bot Information, 📊 Usage,\n🎲 Goto Start Menu", "Welcome! Administrator")
