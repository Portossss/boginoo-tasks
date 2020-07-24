import firebase from 'firebase';
import { useEffect, useState } from 'react';


const config = {
    apiKey: "AIzaSyCHWrWmY_chj2bchSx4Ue4dmejVmaG0zMs",
    authDomain: "boginourl.firebaseapp.com",
    databaseURL: "https://boginourl.firebaseio.com",
    projectId: "boginourl",
    storageBucket: "boginourl.appspot.com",
    messagingSenderId: "371812191569",
    appId: "1:371812191569:web:402a4759da3772e1fdd770",
    measurementId: "G-4YK92CNNTS"
  };


export const useFirebase = () => {
    const [state, setState] = useState({firebase});

    useEffect(() => {
        let app;
        if(!firebase.apps.length) {
            app = firebase.initializeApp(config);
        }
        const auth = firebase.auth(app);
        const firestore = firebase.firestore(app);

        setState({firebase, app, auth, firestore});
    }, [config])

    return state;
}