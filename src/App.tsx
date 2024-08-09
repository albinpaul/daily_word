import { useState } from 'react';
import './App.css';
import logo from './logo.svg';

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { GoogleAuthProvider, User, getAuth, signInWithPopup, signOut } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBnUWsBK7WLnf-y03rbbm7gdVD9ORq5Fws",
  authDomain: "daily-word-75d3c.firebaseapp.com",
  projectId: "daily-word-75d3c",
  storageBucket: "daily-word-75d3c.appspot.com",
  messagingSenderId: "810603629490",
  appId: "1:810603629490:web:e73505cec29f640300f2ab",
  measurementId: "G-L0K793X87J"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app)

const provider = new GoogleAuthProvider();
provider.addScope('https://www.googleapis.com/auth/plus.login');


function App() {
  const [user, setUser] = useState<User | null>(null);
  const googleSignIn = async () => {
    try {
      const result = await signInWithPopup(auth, provider);
      console.log(result)
      setUser(result.user);
    } catch (error) {
      console.log('Firebase login error:', error);
    }
  }

  
  const googleSignOut = async () => {
    try {
      signOut(auth);
      setUser(null);
    } catch (error) {
      console.log('Firebase logout error:', error);
    }
  }
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />

        {
          user ?
            <button onClick={googleSignOut}>Google SignOut</button>
            :
            <button onClick={googleSignIn}>Google SignIn</button>
        }
      </header>
    </div>
  );
}

export default App;
