import React from 'react';
import { GoogleAuthProvider, signInWithPopup } from 'firebase/auth';
import { auth } from '../firebase/FirebaseConfig'; // Ensure Firebase is configured
import GoogleIcon from '@mui/icons-material/Google';


const Auth = () => {
  const signInWithGoogle = async () => {
    const provider = new GoogleAuthProvider();
    try {
      const result = await signInWithPopup(auth, provider);
      console.log("User logged in:", result.user); // Successful login
      // You can handle further actions, like redirecting the user
    } catch (error) {
      console.error("Error during Google sign-in:", error.message); // Handle error
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className=" p-8 rounded-lg  max-w-sm w-full">
        
        
        <button
          onClick={signInWithGoogle}
          className="w-full bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded flex items-center justify-center"
        >
          <span className='px-2'><GoogleIcon/></span>
         
          Sign in with Google
        </button>
      </div>
    </div>
  );
};

export default Auth;
