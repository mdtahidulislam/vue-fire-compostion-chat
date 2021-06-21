import firebase from "firebase/app";
import "firebase/database";

const config = {
	apiKey: "AIzaSyB7Eba3XwErEW2CHVMAT0Ccxut-Ie143o0",
    authDomain: "firevuechat-2b4b8.firebaseapp.com",
    databaseURL: "https://firevuechat-2b4b8-default-rtdb.asia-southeast1.firebasedatabase.app",
    projectId: "firevuechat-2b4b8",
    storageBucket: "firevuechat-2b4b8.appspot.com",
    messagingSenderId: "442118891669",
    appId: "1:442118891669:web:7b84b7f00ad8334613139c"
}

const db = firebase.initializeApp(config);
export default db;