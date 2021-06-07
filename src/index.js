import React, { createContext } from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import App from './App';
import store from './redux/store';
import firebase from 'firebase/app'
import 'firebase/firestore' 


firebase.initializeApp({
  apiKey: "AIzaSyBXPBMfNTmIpZLQHPA2CNHjEKV5Y3ujwBU",
  authDomain: "mindly-test-c1fd0.firebaseapp.com",
  projectId: "mindly-test-c1fd0",
  storageBucket: "mindly-test-c1fd0.appspot.com",
  messagingSenderId: "196626688790",
  appId: "1:196626688790:web:dea64a9b90a6d0017a3e37",
  measurementId: "G-MWN5P5HMPX"
});

export const Context = createContext(null)

const firestore = firebase.firestore()

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <Context.Provider value={{firebase, firestore}}>
        <App className="App"/>
      </Context.Provider>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);
