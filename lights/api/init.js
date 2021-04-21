import huejay from 'huejay';
import { CREDS } from "./.credentials.js";

let client = new huejay.Client({
    // host: getBridgeIp()
    host: CREDS.host,
    username: CREDS.username
});

export default client;