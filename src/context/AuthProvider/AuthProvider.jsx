import React, { createContext } from 'react';
import { createUserWithEmailAndPassword } from 'firebase/auth';


//creating AuthProvider Context
export const AuthContext = createContext();

export default function AuthProvider({ children }) {
     const [user, setUser] = useState(null);
     const [loading, setLoading] = useState(true);

     //create new user 
     const createUser = (email, password) => {
          setLoading(true);
          return createUserWithEmailAndPassword(auth, email, password);
     }

     const authInfo = {
          user,
          createUser
     };

     return (
          <AuthContext.Provider value={authInfo}>
               {children}
          </AuthContext.Provider>
     );
}
