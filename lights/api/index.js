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
            console.log(`Group [${group.id}]: ${group.name}`);
            console.log(`  Type: ${group.type}`);
            console.log(`  Class: ${group.class}`);
            console.log('  Light Ids: ' + group.lightIds.join(', '));
            console.log('  State:');
            console.log(`    Any on:     ${group.anyOn}`);
            console.log(`    All on:     ${group.allOn}`);
            console.log('  Action:');
            console.log(`    On:         ${group.on}`);
            console.log(`    Brightness: ${group.brightness}`);
            console.log(`    Color mode: ${group.colorMode}`);
            console.log(`    Hue:        ${group.hue}`);
            console.log(`    Saturation: ${group.saturation}`);
            console.log(`    X/Y:        ${group.xy[0]}, ${group.xy[1]}`);
            console.log(`    Color Temp: ${group.colorTemp}`);
            console.log(`    Alert:      ${group.alert}`);
            console.log(`    Effect:     ${group.effect}`);

            if (group.modelId !== undefined) {
                console.log(`  Model Id: ${group.modelId}`);
                console.log(`  Unique Id: ${group.uniqueId}`);
                console.log('  Model:');
                console.log(`    Id:           ${group.model.id}`);
                console.log(`    Manufacturer: ${group.model.manufacturer}`);
                console.log(`    Name:         ${group.model.name}`);
                console.log(`    Type:         ${group.model.type}`);
            }

            console.log();
        }
    });

export { client, getAllLights, getBridgeIp, pingBridge, isBridgeAvailable, groupOn, groupOff };