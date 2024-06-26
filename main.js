const { Client, GatewayIntentBits } = require('discord.js');
const { CommandKit } = require('commandkit');
const path = require('path')
require('dotenv/config');
 
const client = new Client({
    intents: [
        GatewayIntentBits.Guilds,
        GatewayIntentBits.GuildMembers,
        GatewayIntentBits.GuildMessages,
        GatewayIntentBits.MessageContent,
    ],
});
 
new CommandKit({
    client,
    commandsPath: path.join(__dirname, 'commands'),
    eventsPath: path.join(__dirname, 'events'),
    //devGuildIds: ['DEV_SERVER_ID_1', 'DEV_SERVER_ID_2'],
    //devUserIds: ['DEV_USER_ID_1', 'DEV_USER_ID_2'],
    //devRoleIds: ['DEV_ROLE_ID_1', 'DEV_ROLE_ID_2'],
    //skipBuiltInValidations: true,
    //bulkRegister: true,
});
 
client.login(process.env.TOKEN); // gets the token
 