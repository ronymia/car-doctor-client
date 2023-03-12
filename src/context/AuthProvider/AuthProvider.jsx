import React, { createContext } from 'react';


//creating AuthProvider Context
export const AuthContext = createContext();

export default function AuthProvider({ children }) {
     const [user, setUser] = useState(null);
     const [loading, setLoading] = useState(true);

     const authInfo = {
          user
     };

     return (
          <AuthContext.Provider value={authInfo}>
               {children}
          </AuthContext.Provider>
     );
}
