import { createContext, useContext, useState } from 'react';
import { auth } from '../FirsbaseAuth/firebaseGithubConfig';
import { signInWithPopup } from 'firebase/auth';
import { GithubAuthProvider } from "firebase/auth";


const GithubAuthContenx = createContext();

export const GithubAuthProvider2 = ({ children }) => {

      const [user2, setUser2] = useState({})
      const GithubSigIn = () => {
            const provider = new GithubAuthProvider()
            signInWithPopup(auth, provider).then((result) => {
                  setUser2(result.user)
            }).catch((error) => {
                  console.log(error)
            })
      }
      const GithubLogOut = () => {
            setUser2(null)
      }

      return (
            <GithubAuthContenx.Provider value={{ GithubSigIn, GithubLogOut, user2 }}>
                  {children}
            </GithubAuthContenx.Provider>
      );
}
export const GithubUserAuth = () => {
      return useContext(GithubAuthContenx);
};