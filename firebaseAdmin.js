const admin = require("firebase-admin");
const serviceAccount = require("./secrets.json");

export const verifyIdToken = (token) => {
  if (!firebase.apps.length) {

    console.log(firebase.app, "firebase")
    admin.initializeApp({
      credential: admin.credential.cert(serviceAccount),
      databaseURL: "mychatapp-d129b.appspot.com",
    });
  }

  return admin
    .auth()
    .verifyIdToken(token)
    .catch((error) => {
      throw error;
    });
};
