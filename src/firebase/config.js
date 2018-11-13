require("dotenv").config();

const apiKey = process.env.REACT_APP_API_KEY;
const databaseURL = process.env.REACT_APP_DATABASE_URL;
const storageBucket = process.env.REACT_APP_STORAGE_BUCKET;
const authDomain = process.env.REACT_APP_AUTH_DOMAIN;
const messagingSenderId = process.env.REACT_APP_MESSAGING_SENDER_ID;
const projectId = process.env.REACT_APP_PROJECT_ID;

module.exports = {
  apiKey,
  databaseURL,
  storageBucket,
  authDomain,
  messagingSenderId,
  projectId
};
