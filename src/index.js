import express from 'express';

import { botFactory } from './bot';
import * as botBuilder from 'botbuilder';

const port = process.env.PORT || 5000;
const app = express();

var connector = new botBuilder.ChatConnector({
    appId: "5815f660-4db5-4571-9a4a-3f544934e149",
    appPassword: "FNL]cysltpbMKPB02832];="
});

botFactory(connector);

app.post(`/api/messages`, connector.listen());

app.listen(port, () => console.log(`Bot listen on ${port}`))
