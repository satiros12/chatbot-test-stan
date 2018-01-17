import * as botBuilder from 'botbuilder';
 
const botFactory = botConnector => {
	const bot = new botBuilder.UniversalBot(botConnector);
	
	bot.dialog('/', (session, args, next) => {
            if(!session.conversationData.first_time){
                session.conversationData.first_time = true
                session.send("Hola amigo!!")
            }
            session.send("Has dicho: " + session.message.text)
    });	

   
	return bot;
}

export { botFactory }