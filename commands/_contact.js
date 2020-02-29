/*CMD
  command: /contact
  help: 
  need_reply: 
  auto_retry_time: 
  folder: 
  answer: 
  keyboard: 
  aliases: 🏕 contact for ad or queries
CMD*/

var buttons = [
    [ { title: "📧 Contact King Ads Admin!", url: "https://t.me/KingAdsAdmin"} ],
    ]

Bot.sendInlineKeyboard(buttons, "Click to contact King Ads Admin for advertising and further queries about Cloud Ads!");
