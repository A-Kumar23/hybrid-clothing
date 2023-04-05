import React from 'react'
import { signInWithGooglePopup, createUserDocumentFromAuth } from '../../utils/firebase/firebase'

const SignIn = () => {

    const logGoogleUser = async () => {
        const { user } = await signInWithGooglePopup();
        const userDocRef = await  createUserDocumentFromAuth(user);
    }

  return (
    <>
    <div>SignIn</div>
    <button
        onClick={logGoogleUser}
    >Google</button>
    </>
    
  )
}

export default SignIn