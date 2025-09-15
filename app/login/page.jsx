'use client';

import { signIn } from 'next-auth/react';
import { useRouter } from 'next/navigation';

const Login = () => {
  const router = useRouter();

  const handleGoogleSignIn = async () => {
    try {
      const result = await signIn('google', { 
        redirect: false,
        callbackUrl: '/'
      });

    } catch (error) {
      console.error('Error during sign-in:', error);
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="p-8 bg-white shadow-lg rounded-lg max-w-sm w-full text-center">
        <h2 className="text-2xl font-bold mb-6">Log In</h2>
        <button
          onClick={handleGoogleSignIn}
          className="flex items-center justify-center w-full px-4 py-2 text-white bg-blue-500 rounded-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-colors duration-300"
        >
          <img src="https://www.svgrepo.com/show/355037/google.svg" alt="Google logo" className="w-6 h-6 mr-2" />
          Sign in with Google
        </button>
      </div>
    </div>
  );
};

export default Login;