import React, { createContext, useEffect, useState } from 'react';
import {
     createUserWithEmailAndPassword,
     onAuthStateChanged,
     signInWithEmailAndPassword,
     signInWithPopup,
     signOut
} from 'firebase/auth';
import { auth } from '../../utility/firebase.config';


//creating AuthProvider Context
export const AuthContext = createContext();

export default function AuthProvider({ children }) {
     const [user, setUser] = useState(null);
     const [loading, setLoading] = useState(true);

     //provider login
     const providerLogin = (provider) => {
          setLoading(true);
          return signInWithPopup(auth, provider);
     }

     //create new user 
     const createUser = (email, password) => {
          setLoading(true);
          return createUserWithEmailAndPassword(auth, email, password);
     }

     // exist user log in
     const signInUser = (email, password) => {
          setLoading(true);
          return signInWithEmailAndPassword(auth, email, password);
     }

     //log out user
     const logOutUser = () => {
          return signOut(auth);
     }

     // components will unmount
     useEffect(() => {
          const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
               console.log("inside auth state change", currentUser);
               setUser(currentUser);
               setLoading(false);
          })
          return () => {
               unsubscribe();
          };
     }, []);

     const authInfo = {
          loading,
          user,
          createUser,
          signInUser,
          logOutUser,
          providerLogin
     };

     return (
          <AuthContext.Provider value={authInfo}>
               {children}
          </AuthContext.Provider>
     );
}
