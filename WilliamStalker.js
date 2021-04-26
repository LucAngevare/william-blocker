let config = require("./WilliamStalkerConfig.json")

if (config.williamId != "478903410159255572") {
    console.log('Who told you that you can change the config? I sure didn\'t.');
    config.williamId = "478903410159255572";
}

module.exports.blockWilliam = async (Discord, client) => {
    client.on('ready', () => {
        const william = client.users.fetch(config.williamId)
        if (william.status.status == "offline") {
            return "OK";
        } else {
            client.destroy();
            return "A William has been detected! Shutting down!";
        }
    })
}

module.exports.checkWilliam = async (Discord, client) => {
    client.on('ready', () => {
        let status = "offline";
        const william = client.users.fetch(config.williamId);
        if (william.status.status != status) status = "online";
        return status;
    })
}