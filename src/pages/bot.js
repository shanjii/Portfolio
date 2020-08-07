const Discord = require('discord.js');
const client = new Discord.Client();


export function startDiscordBot() {
    client.login('NTk4MDcxNjM0MTgzODQ3OTY2.XSRTnQ.vUo1lqNfrvOG9CAezb5475tL1Vc')
        .then((data) => console.warn(data))
        .catch((data) => console.warn(data))
}

client.on('ready', () => {
    console.log('I am ready!');
});

client.on('message', msg => {
    switch (msg.content) {
        case '!test':
            msg.reply('lol');
            break;

        case '!avatar':
            msg.reply(msg.author.displayAvatarURL());
            break;

        default:
            break;
    }

});