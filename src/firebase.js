import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyDhmyRqluIG_fE4_SP930koIXM6MVMKuqg",
  authDomain: "disneyplus-clone-c25e3.firebaseapp.com",
  projectId: "disneyplus-clone-c25e3",
  storageBucket: "disneyplus-clone-c25e3.appspot.com",
  messagingSenderId: "933219848396",
  appId: "1:933219848396:web:978623d3a811bcab927269",
  measurementId: "G-7FE8J0Q4BE"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();
const storage = firebase.storage();

export { auth, provider, storage };
export default db;
