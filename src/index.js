import React from 'react';
import ReactDOM from 'react-dom';
import db from './database'
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/index.css';
import App from './App';

//instances of references on database
var bathroom = db.ref("bathroom");
var bedroom1 = db.ref("bedroom1");
var bedroom2 = db.ref("bedroom2");
var door = db.ref("door");
var kitchen = db.ref("kitchen");
var living = db.ref("living1");
var parking = db.ref("parking");
var storage = db.ref("storage");

// Attach an asynchronous callback to read the data 
bathroom.on("value", function (snapshot) {
    console.log("bathroom: ", snapshot.val().value);
    if (snapshot.val().value == 0) {
        document.querySelectorAll("#bathroom").forEach(item => { item.style.filter = 'brightness(40%)' });
    }
    else {
        document.querySelectorAll("#bathroom").forEach(item => { item.removeAttribute("style") });
    }

}, function (errorObject) {
    console.log("The read failed: " + errorObject.code);
});

bedroom1.on("value", function (snapshot) {
    console.log("bedroom 1:", snapshot.val().value);
    if (snapshot.val().value == 0) {
        document.querySelectorAll("#bedroom1").forEach(item => { item.style.filter = 'brightness(40%)' });
    }
    else {
        document.querySelectorAll("#bedroom1").forEach(item => { item.removeAttribute("style") });
    }

}, function (errorObject) {
    console.log("The read failed: " + errorObject.code);
});

bedroom2.on("value", function (snapshot) {
    console.log("bedroom 2:", snapshot.val().value);
    if (snapshot.val().value == 0) {
        document.querySelectorAll("#bedroom2").forEach(item => { item.style.filter = 'brightness(40%)' });
    }
    else {
        document.querySelectorAll("#bedroom2").forEach(item => { item.removeAttribute("style") });
    }

}, function (errorObject) {
    console.log("The read failed: " + errorObject.code);
});

kitchen.on("value", function (snapshot) {
    console.log("kitchen: ", snapshot.val().value);
    if (snapshot.val().value == 0) {
        document.querySelectorAll("#kitchen").forEach(item => { item.style.filter = 'brightness(40%)' });
    }
    else {
        document.querySelectorAll("#kitchen").forEach(item => { item.removeAttribute("style") });
    }

}, function (errorObject) {
    console.log("The read failed: " + errorObject.code);
});

living.on("value", function (snapshot) {
    console.log("living: ", snapshot.val().value);
    if (snapshot.val().value == 0) {
        document.querySelectorAll(".living").forEach(item => { item.style.filter = 'brightness(40%)' });
    }
    else {
        document.querySelectorAll(".living").forEach(item => { item.removeAttribute("style") });
    }

}, function (errorObject) {
    console.log("The read failed: " + errorObject.code);
});

parking.on("value", function (snapshot) {
    console.log("parking: ", snapshot.val().value);
    if (snapshot.val().value == 0) {
        document.querySelectorAll("#parking").forEach(item => { item.style.filter = 'brightness(40%)' });
    }
    else {
        document.querySelectorAll("#parking").forEach(item => { item.removeAttribute("style") });
    }

}, function (errorObject) {
    console.log("The read failed: " + errorObject.code);
});

storage.on("value", function (snapshot) {
    console.log("storage: ", snapshot.val().value);
    if (snapshot.val().value == 0) {
        document.querySelectorAll("#storage").forEach(item => { item.style.filter = 'brightness(40%)' });
    }
    else {
        document.querySelectorAll("#storage").forEach(item => { item.removeAttribute("style") });
    }

}, function (errorObject) {
    console.log("The read failed: " + errorObject.code);
});


ReactDOM.render(<App/>, document.getElementById('root'));






