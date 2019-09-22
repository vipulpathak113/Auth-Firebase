import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'

var firebaseConfig = {
    apiKey: "AIzaSyBusQQVGbATvQF4-SndjlaAOEzX_r3ypEI",
    authDomain: "yodaapp-631b3.firebaseapp.com",
    databaseURL: "https://yodaapp-631b3.firebaseio.com",
    projectId: "yodaapp-631b3",
    storageBucket: "yodaapp-631b3.appspot.com",
    messagingSenderId: "308801558769",
    appId: "1:308801558769:web:09b7570ab07405c2"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
// firebase.firestore.settings({ timestampsInSnapshots: true })

export default firebase;