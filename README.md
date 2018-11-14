# ChatApp-React-Firebase

This was created during my time as a student at Code Chrysalis! The repository provides Realtime Group Chating system based on react and firebase.

## Table of content

- [ChatApp-React-Firebase](#chatapp-react-firebase)
  - [Table of content](#table-of-content)
  - [Features](#features)
  - [Demo](#demo)
  - [Setup](#setup)
    - [Making project in Firebase](#making-project-in-firebase)
    - [Setup your Code](#setup-your-code)
  - [How it works](#how-it-works)
  - [Links](#links)

## Features

This realtime chatapp provides two features,

1. Realtime group chat.

   - Once you send a message, everyone in that chat can see the post with your immediately.
     ![Realtime app demo](https://user-images.githubusercontent.com/23233648/48456988-619d1d80-e804-11e8-90ec-debc52705acd.gif)

2. Google Authentication
   - Only people who pass the google authntication posts message.

## Demo

[Demo Page](https://chatapp-react-firebase-3f486.firebaseapp.com/) is here! You can try with your google account.

## Setup

### Making project in Firebase

Because this repo is based on Firebase, please make firebase project.

---

1. Go to [Firebase Console](https://console.firebase.google.com/u/0/) .
2. Click Add project, then select or enter a Project name. ...
3. Enable Google Sign-in for google authentication
   ![Google Sign-in](https://user-images.githubusercontent.com/23233648/48454818-2eef2700-e7fc-11e8-948c-63ac94619f77.png)
4. Enable RealTimeDB and change security rules to "Starting in test mode"
   ![Enable RealTimeDB](https://user-images.githubusercontent.com/23233648/48454954-b9d02180-e7fc-11e8-90e9-030f07eb15e4.png)

### Setup your Code

You need to clone this repo and make some configs.

1. Clone this repo.
2. Install dependencies and firebase command.

```
cd <directory name>
yarn
yarn global add firebase-tools
```

3. Login firebase and associate your app and the firebase project. Choose your project name. alias can be anything.

```
firebase login
firebase use --add
```

4. Make .env file in root directory for setting configuration of firebase. You can get all information in firebase console. Go to the console and press </> mark above "Add an app to get started"

```
REACT_APP_API_KEY=<apiKey>
REACT_APP_AUTH_DOMAIN=<authDomain>
REACT_APP_DATABASE_URL=<databaseURL>
REACT_APP_PROJECT_ID=<projectId>
REACT_APP_STORAGE_BUCKET=<storageBucket>
REACT_APP_MESSAGING_SENDER_ID=<messagingSenderId>
```

5. Try it on local. Please play with it. If you post something, you can check the database on console. You can see your message.

```
yarn build
firebase use --add
```

6. You can deploy if you want on firebase hosting service.

```
firebase deploy
```

## How it works

- Frontend <br>create-react-app, Material-UI
- Database <br>Firebase realtime database
- Authentication <br>Firebase Authentication

## Links

- [Firebase](https://firebase.google.com/?hl=en)
- [create-react-app](https://github.com/facebook/create-react-app)
- [Material-UI](https://v0.material-ui.com/#/)
- [Source code](https://github.com/egurinko/chatapp-react-firebase)
