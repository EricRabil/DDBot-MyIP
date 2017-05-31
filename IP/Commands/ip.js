const Command = require("../../../Util/Command");
const request = require("request");

module.exports = new Command("ip", "Gets the bots remote IP", null, ["wmip"],
    (client, message, response) => {
        if(message.channel.type !== "dm") return response.reply("", response.embedFactory.createErrorEmbed().setDescription("Please run this command in a DM."));
        request({
            url: "http://api.ipify.org/?format=json",
            json: true
        }, function (error, reply, body) {
            if (!error && reply.statusCode === 200) {
                return response.reply("", response.embedFactory.createInformativeEmbed().setDescription(`The bot's ip is ${body.ip}`));
            }
            client.log(error, true);
            return response.reply("", response.embedFactory.createErrorEmbed().setDescription("Something went wrong while getting the IP."));
        })
    }, [], true, true
);