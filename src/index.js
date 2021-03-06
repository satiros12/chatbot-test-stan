import express from 'express';

import { botFactory } from './bot';
import * as botBuilder from 'botbuilder';

const port = 8008;
const app = express();

var connector = new botBuilder.ChatConnector({
    appId: "",
    appPassword: ""
});

botFactory(connector);

app.post(`/api/messages`, connector.listen());

app.listen(port, () => console.log(`Bot listen on ${port}`))