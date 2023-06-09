import React, { useEffect } from 'react'
import style from '../ModuleCSS/SignPartStyle.module.css'
import { useNavigate } from 'react-router-dom';
import { GithubUserAuth } from '../ContextComponent/GithubSignUp';



export default function GitHubButton() {
      const { GithubSigIn, user2 } = GithubUserAuth()

      const navigate = useNavigate();

      const handleGithubSignUp = async () => {
            try {
                  await GithubSigIn();
                  navigate('/')
                  console.log('SignUp Sussceed')
            } catch (error) {
                  console.log(error)
            }
      }

      useEffect(() => {
            if (user2 != null) {
                  console.log('User', user2)
                  // navigate('/signup');
            }
      }, [user2]);
      return (
            <div>
                  <button className={style.GoogleContainer} onClick={handleGithubSignUp}>
                        <span className={style.GithubIcon}></span>
                        <span className={style.GooglePara}>Signup & Login </span>
                  </button>
            </div>
      )
}
