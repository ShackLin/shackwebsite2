import React, { useEffect } from 'react'
import { GoogleUserAuth } from '../ContextComponent/GoogleSignUp'
import { useNavigate } from 'react-router-dom';
import style from '../ModuleCSS/SignPartStyle.module.css'

export default function GoogleButton() {

      const { googleSignIn, user3 } = GoogleUserAuth();
      const navigate = useNavigate();
      const handleGoogleSignUp = async () => {

            try {
                  await googleSignIn();
                  navigate('/')
                  console.log('SignUp Sussceed')
            } catch (error) {
                  console.log(error);
            }
      };

      useEffect(() => {
            if (user3 != null) {
                  console.log('User', user3)

            }
      }, [user3]);
      return (
            <div>

                  <button className={style.GoogleContainer} onClick={handleGoogleSignUp}>
                        <span className={style.GoogleIcon}></span>
                        <span className={style.GooglePara}>Signup & Login </span>
                  </button>
            </div>
      )
}
