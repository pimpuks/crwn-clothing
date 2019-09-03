import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
  apiKey: 'AIzaSyAXJtna5LEsBUVfss4fvZLNjlUtd2wMMs4',
  authDomain: 'crwn-db-35527.firebaseapp.com',
  databaseURL: 'https://crwn-db-35527.firebaseio.com',
  projectId: 'crwn-db-35527',
  storageBucket: '',
  messagingSenderId: '301772252306',
  appId: '1:301772252306:web:d817d157678e9c48'
};

firebase.initializeApp(config);
export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();

provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
