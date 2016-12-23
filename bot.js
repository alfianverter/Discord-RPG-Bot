console.log("[App] Starting Bootup...");

const Discord = require('discord.js');
const bot = new Discord.Client({fetchAllMembers:true});

bot.on('ready', () => {
    console.log('[Client] Connected! User: ' + bot.user.username + " - " + bot.user.id);
});

const prefix = '##'
var isPlaying = false
var round = 0
var stats = {}
bot.on('message', (msg) => {
  if(stats.HP < 0 && isPlaying == true) {
    isPlaying = false
    round = 0
    msg.channel.sendMessage('Good job, you killed it.')
  }
  if(stats.plrHP < 0 && isPlaying == true) {
    isPlaying = false
    round = 0
    msg.channel.sendMessage('You died!')
  }
              var input = msg.content.toLowerCase();
if(input === prefix + "start" && isPlaying == false) {
  round = round + 1
  isPlaying = true
  stats.HP = 50
  stats.plrHP = 35
  msg.channel.sendMessage('Slime\'s HP: ' + stats.HP + '\nYour HP: ' + stats.plrHP + '\nAttack?')
}
if(input === "attack" && isPlaying == true) {
  var attackDmg = ['6','13'][Math.round(Math.random())]
  msg.channel.sendMessage('You did ' + attackDmg + ' damage.')
  stats.HP = stats.HP - attackDmg
  msg.channel.sendMessage('Slime\'s HP: ' + stats.HP + '\nYour HP: ' + stats.plrHP)
  attackDmg = ['5','10'][Math.round(Math.random())]
stats.plrHP = stats.plrHP - attackDmg
  msg.channel.sendMessage('Ouch! The slime hit you for ' + attackDmg)
  round = round + 1
    msg.channel.sendMessage('Slime\'s HP: ' + stats.HP + '\nYour HP: ' + stats.plrHP + '\nAttack?')
}




if(msg.content.startsWith(prefix + "eval ")) {
if (msg.author.id != '188844101519540225') return;
try {
var code = msg.content.substring(6);
var evaled = eval(code);
msg.channel.sendCode("xl", (evaled));
} catch(err) {
    msg.channel.sendMessage(
    "`ERROR`" + "\n" + err
    );
  }
}

});













bot.login('Insert Token Here').catch((err) => console.log(`[Client] Failed to connect: ${err.message}`))
process.on("unhandledRejection", err => {
  console.error("Uncaught Promise Error: \n" + err.stack);
});
