var Discord = require('discord.js');
var c = new Discord.Client();
var Twitter = require('twitter');
 
var client = new Twitter({
  consumer_key: '1',
  consumer_secret: '2',
  access_token_key: '3',
  access_token_secret: '4'
});

c.on('ready', () => {
  console.log(`Logged in as ${c.user.tag}!`);
  c.user.setActivity("Nettly's Twitter", { type: "WATCHING"})
});

c.on('message', m => {
  if (m.content.startsWith('./tweet') && c.users.get("581282634328440832")) {
    var args = m.content.replace('./tweet ', '');
    m.channel.send("Tweet sent!");
    client.post('statuses/update', {status: args}, function(error, tweet, response) {
        if (!error) {
          console.log(tweet);
        }
      });
  } else if (!c.users.get("581282634328440832")){
      m.reply("nope you dope");
  }
});

c.login('5');
