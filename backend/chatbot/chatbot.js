const dialogflow = require('dialogflow');
const structjson = require('./structjson');
const config = require('../config/keys');

const sessionClient = new dialogflow.SessionsClient({
  credentials: {
    client_email: config.googleClientEmail,
    private_key: config.googlePrivateKey,
  }
});

module.exports = {
  textQuery: async (text, userID = '1', parameters = {}) => {
    const sessionPath = sessionClient.sessionPath(
      config.googleProjectID,
      config.dialogFlowSessionID + userID
    );

    const request = {
      session: sessionPath,
      queryInput: {
        text: {
          text,
          languageCode: config.dialogFlowSessionLanguageCode
        }
      },
      queryParams: {
        payload: { data: parameters }
      }
    };

    const responses = await sessionClient.detectIntent(request);
    return responses[0].queryResult;
  }
};
