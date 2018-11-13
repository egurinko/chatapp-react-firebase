const App = require("firebase");

const config = require("./config");

const firebaseApp = App.initializeApp(config);
const firebaseDb = firebaseApp.database();
const firebaseAuth = firebaseApp.auth();

module.exports = {
  firebaseDb,
  firebaseAuth
};
