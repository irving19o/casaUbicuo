import firebase from 'firebase'

// Initialize Firebase
var config = {
    apiKey: "AIzaSyAFsM8pM9gl_ruuJCmAT8LY-GlwnLEdBSc",
    authDomain: "smarthouse-c3c81.firebaseapp.com",
    databaseURL: "https://smarthouse-c3c81.firebaseio.com",
    projectId: "smarthouse-c3c81",
    storageBucket: "smarthouse-c3c81.appspot.com",
    messagingSenderId: "555702021861"
};

firebase.initializeApp(config);

var db = firebase.database()

export default  db;