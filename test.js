// Download the helper library from https://www.twilio.com/docs/node/install
// Find your Account SID and Auth Token at twilio.com/console
// and set the environment variables. See http://twil.io/secure


function sendTextMessage(accountSid, authToken, message, from, to) {
  // Text Message
  const client = require('twilio')(accountSid, authToken);
  client.messages
    .create({
      body: message,
      from: from,
      to: to
    })
    .then(message => console.log(message.sid));

}

function sendMediaMessage(accountSid, authToken, message, from, to, mediaUrl) {
  const client = require('twilio')(accountSid, authToken);
  // Media Message
  client.messages
    .create({
      body: message,
      from: from,
      mediaUrl: [mediaUrl],
      to: to
    })
    .then(message => console.log(message.sid));
}

  // Please add the credentials in the following format in string datatype:- sendTextMessage(accountSid, authToken, message, from, to)
  sendTextMessage();
  

   // Please add the credentials in the following format in string datatype:- sendMediaMessage(accountSid, authToken, message, from, to, mediaUrl)
  sendMediaMessage();

  // IMAGE = 'https://demo.twilio.com/owl.png'
  // DOCUMENT  = 'https://www.africau.edu/images/default/sample.pdf'
  // VIDEO = 'https://file-examples.com/storage/feee4cd0b563b359f963e88/2017/04/file_example_MP4_640_3MG.mp4'
