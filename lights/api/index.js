import huejay from 'huejay';
import client from "./init";

let getBridgeIp = () => {
    huejay.discover()
        .then(bridges => {
            for (let bridge of bridges) {
                console.log("asdasd");
                console.log(`Id: ${bridge.id}, IP: ${bridge.ip}`);
                return bridge.ip;
            }
        })
        .catch(error => {
            console.log(`An error occurred: ${error.message}`);
            return false;
        });
};

let pingBridge = () => {
    client.bridge.ping()
        .then(() => {
            console.log('Successful connection');
            return true;
        })
        .catch(error => {
            console.log('Could not connect: ' + error);
            return false;
        });
};

let isBridgeAvailable = () => {
    return getBridgeIp() ?? false
};

let getAllLights = () => {
    client.lights.getAll()
        .then(lights => {
            for (let light of lights) {
                console.log(light);
            }
        });
};

let getLightById = (id) => {
    client.lights.getById(id)
        .then(light => {
            console.log(light);
            return light
        })
        .catch(error => {
            console.log(error.stack);
        });
};

const lightOn = (id) => {
    client.light.getById(id)
        .then(light => {
            light.on = true;
            return client.lights.save(light);
        })
        .catch(error => {
            console.log(error.stack);
        });
}

const lightOff = (id) => {
    client.light.getById(id)
        .then(light => {
            light.on = false;
            return client.lights.save(light);
        })
        .catch(error => {
            console.log(error.stack);
        });
}


const groupOn = (id) => {
    client.groups.getById(id)
        .then(group => {
            group.on = true;
            return client.groups.save(group);
        })
        .catch(error => {
            console.log(error.stack);
        });
}

const groupOff = (id) => {
    client.groups.getById(id)
        .then(group => {
            group.on = false;
            return client.groups.save(group);
        })
        .catch(error => {
            console.log(error.stack);
        });
}

client.groups.getAll()
    .then(groups => {
        for (let group of groups) {
            console.log(group);
            console.log();
        }
    });

export { client, getAllLights, getBridgeIp, pingBridge, isBridgeAvailable, groupOn, groupOff, getLightById, lightOn, lightOff };