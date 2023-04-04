import React from 'react'
import { signInWithGooglePopup } from '../../utils/firebase/firebase'

const SignIn = () => {

    const logGoogleUser = async () => {
        const response = await signInWithGooglePopup();
        console.log(response);
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