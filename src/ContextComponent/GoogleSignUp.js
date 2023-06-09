import { createContext, useContext, useState } from 'react';
import {
      GoogleAuthProvider,
      signInWithPopup,
      // signInWithRedirect,
      // onAuthStateChanged,
} from 'firebase/auth';
import { auth } from '../FirsbaseAuth/firebaseGoogleConfig';



const GoogleAuthContext = createContext();

export const GoogleAuthContextProvider = ({ children }) => {

      const [user3, setUser3] = useState({});



      const googleSignIn = () => {
            const provider = new GoogleAuthProvider();
            signInWithPopup(auth, provider).then((result) => {
                  setUser3(result.user);
            }).catch((error) => {
                  console.log(error)
            })
      }

      const GooglelogOut = () => {
            setUser3(null)
      }



      // useEffect(() => {
      //       const unsubscribeGoogle = onAuthStateChanged(auth, (currentUser) => {
      //             setUserGoogle(currentUser);
      //             console.log('Google User', currentUser)
      //       });
      //       return () => {
      //             unsubscribeGoogle()
      //       };
      // }, []);

      return (
            <GoogleAuthContext.Provider value={{ googleSignIn, GooglelogOut, user3 }}>
                  {children}
            </GoogleAuthContext.Provider>
      );
};

export const GoogleUserAuth = () => {
      return useContext(GoogleAuthContext);
};