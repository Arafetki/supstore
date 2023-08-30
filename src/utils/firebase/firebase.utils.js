import {initializeApp} from 'firebase/app'
import {GoogleAuthProvider, getAuth,signInWithPopup} from 'firebase/auth'

const firebaseConfig = {
    apiKey: "AIzaSyCcdxXNJy1hOIufdSFT0jf4K1nHCpSM_LU",
    authDomain: "supc-clothing.firebaseapp.com",
    projectId: "supc-clothing",
    storageBucket: "supc-clothing.appspot.com",
    messagingSenderId: "123103610579",
    appId: "1:123103610579:web:a69b53a27ce17e792fb626"
  };

const fireApp = initializeApp(firebaseConfig);

const provider = new GoogleAuthProvider()

provider.setCustomParameters({
    prompt:"select_account"
})

export const auth = getAuth(fireApp)

export const signInWithGooglePopup = () => signInWithPopup(auth,provider)