import Rebase from 're-base';
import firebase from 'firebase';
const firebaseApp = firebase.initializeApp({
  apiKey: 'AIzaSyAfhqQuO-GyuMNRdtM5ZN5Jo_VQOT9xtNY',
  authDomain: 'catch-of-the-day-14c98.firebaseapp.com',
  databaseURL: 'https://catch-of-the-day-14c98.firebaseio.com',
});

const base = Rebase.createClass(firebaseApp.database());

export { firebaseApp };

export default base;
