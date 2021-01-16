import * as firebase from 'firebase/app';
import 'firebase/storage';
import 'firebase/firestore';

var firebaseConfig = {
    apiKey: "",
    authDomain: "imagerepo-504dc.firebaseapp.com",
    projectId: "imagerepo-504dc",
    storageBucket: "imagerepo-504dc.appspot.com",
    messagingSenderId: "499897275274",
    appId: "1:499897275274:web:aeae330535da5e155d6e73"
};
  // Initialize Firebase
firebase.initializeApp(firebaseConfig);

//assign storage and firestore methods to variables
const projStorage = firebase.storage();
const projFirestore = firebase.firestore();

export { projStorage, projFirestore};