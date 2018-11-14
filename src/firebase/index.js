const App = require("firebase");

const config = require("./config");

const firebaseApp = App.initializeApp(config);
const firebaseDb = firebaseApp.database();
const firebaseAuth = firebaseApp.auth();
const cloudStorage = firebaseApp.storage();

module.exports = {
  firebaseDb,
  firebaseAuth,
  cloudStorage
};
