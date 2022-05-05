import { getAuth, signInWithPopup, GoogleAuthProvider } from 'firebase/auth';
import { initializeApp } from 'firebase/app';

const firebaseConfig = {
  apiKey: 'AIzaSyC9S1PJItQIPOOrd_zfH8mbCZ_Sb13L8rc',
  authDomain: 'slackbuilt.firebaseapp.com',
  databaseURL: 'https://slackbuilt-default-rtdb.firebaseio.com',
  projectId: 'slackbuilt',
  storageBucket: 'slackbuilt.appspot.com',
  messagingSenderId: '952668839976',
  appId: '1:952668839976:web:066b880e19cba72669151d',
};

const app = initializeApp(firebaseConfig);

const auth = getAuth();
signInWithPopup(auth)
  .then((result) => {
    // This gives you a Google Access Token. You can use it to access the Google API.
    const credential = GoogleAuthProvider.credentialFromResult(result);
    const token = credential.accessToken;
    // The signed-in user info.
    const user = result.user;
    // ...
  })
  .catch((error) => {
    // Handle Errors here.
    const errorCode = error.code;
    const errorMessage = error.message;
    // The email of the user's account used.
    const email = error.email;
    // The AuthCredential type that was used.
    const credential = GoogleAuthProvider.credentialFromError(error);
    // ...
  });

export default signInWithPopup;
