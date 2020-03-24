const Telegraf = require('telegraf');
const Stage = require("telegraf/stage");
const fs = require("fs")
const bot = new Telegraf('1141848797:AAFd08jjc97pQoc49tACVNZcMn9i4q31AWY'); // Создаем нашего бота


function print(params) {
    console.log(params)
}
commands_with_txt = {
    "links": { level: 0, ans: "" },
    "events": { level: 0, ans: "" }
}
for (var prop in commands_with_txt) {
    commands_with_txt[prop].ans = fs.readFileSync("replays_txt/" + prop + ".txt").toString()
    bot.command(prop, (ctx) => {
        if (commands_with_txt[prop].level == 1 || (ctx.chat.type == "group" && commands_with_txt[prop].level == 2) || (ctx.chat.type != "group" && commands_with_txt[prop].level == 0))
            ctx.reply(commands_with_txt[prop].ans);
        console.log(ctx.message.chat);
    })
}
print(commands_with_txt)
    // const WizardScene = require("telegraf/scenes/base");




bot.start((ctx) => {
    console.log('Id пользователя:', ctx.from.id);
    return ctx.reply('Hello from node.js');
});
bot.hears('hi', (ctx) => ctx.reply('Hey there'))

bot.launch()
    // bot.telegram.send