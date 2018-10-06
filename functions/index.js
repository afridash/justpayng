const functions =  require("firebase-functions");
const admin =  require("firebase-admin");
admin.initializeApp(functions.config().firebase);
exports.sendPushNotification = functions.database
  .ref("requests/{request}")
  .onCreate((snapshot, context) => {
    // gets standard JavaScript object from the new write
    const writeData = snapshot.val();
    // access data necessary for push notification
    const sender = writeData.uid;
    const senderName = writeData.name;
    const recipient = writeData.recipient;
    const amount = writeData.amount;
    // the payload is what will be delivered to the device(s)
    let payload = {
      notification: {
      title: "Transaction Request",
      body:senderName + " has asked for a transfer of " +amount,
      sound:'true',
      badge:'0',
      channel:"Requests",
      priority:"High"
     }
    }
    // either store the recepient tokens in the document write
    const token = writeData.token;
    return admin.messaging().sendToDevice(token, payload);
});
