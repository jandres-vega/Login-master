import {app} from './app';
import {config} from "./config";

app.listen(config.port_server, () => {
    console.log(`http://localhost:${config.port_server}`);
});