/*CMD
  command: /start
  help: 
  need_reply: 
  auto_retry_time: 
  folder: 

  <<ANSWER

  ANSWER

  <<KEYBOARD

  KEYBOARD
  aliases: 
CMD*/

let name = "Hi there " + user.first_name + " " + user.last_name + "  👋"

let msg =
  "*" +
  name +
  "*\nUse the bot to Contact for Advertising & Register your channel for Cloud Ads services\nUse the *buttons* for further navigation 💬"

Bot.sendKeyboard("🏕 Contact for Ad or Queries,\n📚 My Earnings,ℹ Help,\n🖋 Register New Channel\n📡 Share this bot,", msg)
