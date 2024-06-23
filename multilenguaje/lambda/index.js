const Alexa = require('ask-sdk-core');

const facts = {
    "es": [
        "Lee Jong Suk es conocido por su papel en el drama 'W'.",
        "Park Seo Joon ha actuado en dramas populares como 'Itaewon Class' y 'What's Wrong with Secretary Kim'.",
        "Song Hye Kyo es famosa por su papel en 'Descendants of the Sun'.",
        "Hyun Bin ganó fama internacional por su papel en 'Crash Landing on You'.",
        "Kim Soo Hyun es uno de los actores mejor pagados en Corea del Sur.",
        "Gong Yoo ganó popularidad mundial por su papel en 'Goblin' y 'Train to Busan'.",
        "IU, cuyo nombre real es Lee Ji Eun, es una cantante y actriz famosa por su papel en 'Hotel Del Luna'.",
        "Lee Min Ho es ampliamente conocido por su papel en 'Boys Over Flowers' y 'The Heirs'.",
        "Ji Chang Wook ha protagonizado dramas de acción como 'Healer' y 'The K2'.",
        "Park Bo Gum es conocido por su versatilidad en dramas como 'Love in the Moonlight' y 'Encounter'.",
        "Jun Ji Hyun es famosa por sus roles en 'My Love from the Star' y 'The Legend of the Blue Sea'.",
        "Yoo Ah In ha recibido elogios por su actuación en dramas como 'Six Flying Dragons' y 'Chicago Typewriter'.",
        "Bae Suzy, conocida como Suzy, es cantante y actriz destacada por su papel en 'While You Were Sleeping'.",
        "Nam Joo Hyuk es conocido por sus papeles en 'Weightlifting Fairy Kim Bok Joo' y 'Start-Up'.",
        "Kim Woo Bin ganó popularidad por su papel en 'The Heirs' y 'Uncontrollably Fond'."
    ],
    "en": [
        "Lee Jong Suk is known for his role in the drama 'W'.",
        "Park Seo Joon has starred in popular dramas like 'Itaewon Class' and 'What's Wrong with Secretary Kim'.",
        "Song Hye Kyo is famous for her role in 'Descendants of the Sun'.",
        "Hyun Bin gained international fame for his role in 'Crash Landing on You'.",
        "Kim Soo Hyun is one of the highest-paid actors in South Korea.",
        "Gong Yoo gained worldwide popularity for his role in 'Goblin' and 'Train to Busan'.",
        "IU, whose real name is Lee Ji Eun, is a singer and actress famous for her role in 'Hotel Del Luna'.",
        "Lee Min Ho is widely known for his role in 'Boys Over Flowers' and 'The Heirs'.",
        "Ji Chang Wook has starred in action dramas like 'Healer' and 'The K2'.",
        "Park Bo Gum is known for his versatility in dramas like 'Love in the Moonlight' and 'Encounter'.",
        "Jun Ji Hyun is famous for her roles in 'My Love from the Star' and 'The Legend of the Blue Sea'.",
        "Yoo Ah In has received acclaim for his acting in dramas like 'Six Flying Dragons' and 'Chicago Typewriter'.",
        "Bae Suzy, known as Suzy, is a singer and actress highlighted for her role in 'While You Were Sleeping'.",
        "Nam Joo Hyuk is known for his roles in 'Weightlifting Fairy Kim Bok Joo' and 'Start-Up'.",
        "Kim Woo Bin gained popularity for his role in 'The Heirs' and 'Uncontrollably Fond'."
    ]
};


const LaunchRequestHandler = {
    canHandle(handlerInput) {
        return Alexa.getRequestType(handlerInput.requestEnvelope) === 'LaunchRequest';
    },
    handle(handlerInput) {
        const locale = handlerInput.requestEnvelope.request.locale;
        const language = locale.split('-')[0];
        const speakOutput = language === 'es' ? 
            'Bienvenido a curiosidades sobre actores de kdramas por Zuri Anahi. Puedes pedirme un dato curioso diciendo, cuéntame algo interesante.' : 
            'Welcome to fun facts about K-drama actors by Zuri Anahi. You can ask me for an interesting fact by saying, tell me something interesting.';

        return handlerInput.responseBuilder
            .speak(speakOutput)
            .reprompt(speakOutput)
            .getResponse();
    }
};
const HelloWorldIntentHandler = {
    canHandle(handlerInput) {
        return Alexa.getRequestType(handlerInput.requestEnvelope) === 'IntentRequest'
            && Alexa.getIntentName(handlerInput.requestEnvelope) === 'HelloWorldIntent';
    },
    handle(handlerInput) {
        const locale = handlerInput.requestEnvelope.request.locale;
        const language = locale.split('-')[0];
        const speakOutput = language === 'es' ? 
            'Hola, ¿quieres saber algún dato curioso sobre actores de Corea? Solo dime, Cuéntame algo interesante.' : 
            'Hello, do you want to know a fun fact about Korean actors? Just say, Tell me something interesting.';

        return handlerInput.responseBuilder
            .speak(speakOutput)
            .reprompt(speakOutput)
            .getResponse();
    }
};

const GetRandomFactIntentHandler = {
    canHandle(handlerInput) {
        return Alexa.getRequestType(handlerInput.requestEnvelope) === 'IntentRequest'
            && Alexa.getIntentName(handlerInput.requestEnvelope) === 'GetRandomFactIntent';
    },
    handle(handlerInput) {
        const locale = handlerInput.requestEnvelope.request.locale;
        const language = locale.split('-')[0];
        const factList = facts[language] || facts['en'];
        const randomFact = factList[Math.floor(Math.random() * factList.length)];

        const speakOutput = randomFact;
        const repromptText = language === 'es' ? '¿Quieres escuchar otro dato curioso?' : 'Do you want to hear another fun fact?';

        return handlerInput.responseBuilder
            .speak(speakOutput)
            .reprompt(repromptText)
            .getResponse();
    }
};

const HelpIntentHandler = {
    canHandle(handlerInput) {
        return Alexa.getRequestType(handlerInput.requestEnvelope) === 'IntentRequest'
            && Alexa.getIntentName(handlerInput.requestEnvelope) === 'AMAZON.HelpIntent';
    },
    handle(handlerInput) {
        const locale = handlerInput.requestEnvelope.request.locale;
        const language = locale.split('-')[0];
        const speakOutput = language === 'es' ? 
            'Puedes pedirme un dato curioso sobre actores de K-drama diciendo, cuéntame algo interesante.' : 
            'You can ask me for a fun fact about Korean actors by saying, tell me a fun fact.';

        return handlerInput.responseBuilder
            .speak(speakOutput)
            .reprompt(speakOutput)
            .getResponse();
    }
};

const CancelAndStopIntentHandler = {
    canHandle(handlerInput) {
        return Alexa.getRequestType(handlerInput.requestEnvelope) === 'IntentRequest'
            && (Alexa.getIntentName(handlerInput.requestEnvelope) === 'AMAZON.CancelIntent'
                || Alexa.getIntentName(handlerInput.requestEnvelope) === 'AMAZON.StopIntent');
    },
    handle(handlerInput) {
        const locale = handlerInput.requestEnvelope.request.locale;
        const language = locale.split('-')[0];
        const speakOutput = language === 'es' ? '¡Adiós!' : 'Goodbye!';

        return handlerInput.responseBuilder
            .speak(speakOutput)
            .withShouldEndSession(true)
            .getResponse();
    }
};

const FallbackIntentHandler = {
    canHandle(handlerInput) {
        return Alexa.getRequestType(handlerInput.requestEnvelope) === 'IntentRequest'
            && Alexa.getIntentName(handlerInput.requestEnvelope) === 'AMAZON.FallbackIntent';
    },
    handle(handlerInput) {
        const locale = handlerInput.requestEnvelope.request.locale;
        const language = locale.split('-')[0];
        const speakOutput = language === 'es' ? 
            'Lo siento, no sé sobre eso. Por favor, inténtalo de nuevo.' : 
            'Sorry, I don\'t know about that. Please try again.';

        return handlerInput.responseBuilder
            .speak(speakOutput)
            .reprompt(speakOutput)
            .getResponse();
    }
};

const SessionEndedRequestHandler = {
    canHandle(handlerInput) {
        return Alexa.getRequestType(handlerInput.requestEnvelope) === 'SessionEndedRequest';
    },
    handle(handlerInput) {
        console.log(`~~~~ Session ended: ${JSON.stringify(handlerInput.requestEnvelope)}`);
        // Any cleanup logic goes here.
        return handlerInput.responseBuilder.getResponse(); // notice we send an empty response
    }
};

const IntentReflectorHandler = {
    canHandle(handlerInput) {
        return Alexa.getRequestType(handlerInput.requestEnvelope) === 'IntentRequest';
    },
    handle(handlerInput) {
        const intentName = Alexa.getIntentName(handlerInput.requestEnvelope);
        const speakOutput = `You just triggered ${intentName}`;

        return handlerInput.responseBuilder
            .speak(speakOutput)
            .getResponse();
    }
};

const ErrorHandler = {
    canHandle() {
        return true;
    },
    handle(handlerInput, error) {
        const locale = handlerInput.requestEnvelope.request.locale;
        const language = locale.split('-')[0];
        const speakOutput = language === 'es' ? 
            'Lo siento, tuve problemas para hacer lo que pediste. Por favor, inténtalo de nuevo.' : 
            'Sorry, I had trouble doing what you asked. Please try again.';
        console.log(`~~~~ Error handled: ${JSON.stringify(error)}`);

        return handlerInput.responseBuilder
            .speak(speakOutput)
            .reprompt(speakOutput)
            .getResponse();
    }
};

exports.handler = Alexa.SkillBuilders.custom()
    .addRequestHandlers(
        LaunchRequestHandler,
        GetRandomFactIntentHandler,
        HelloWorldIntentHandler,
        HelpIntentHandler,
        CancelAndStopIntentHandler,
        FallbackIntentHandler,
        SessionEndedRequestHandler,
        IntentReflectorHandler)
    .addErrorHandlers(
        ErrorHandler)
    .withCustomUserAgent('sample/hello-world/v1.2')
    .lambda();
