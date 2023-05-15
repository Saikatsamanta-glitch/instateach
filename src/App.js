import React from 'react'
import NavScrollExample from './Components/Appbar'
import Herosec from './Components/Herosec'
import { useGoogleOneTapLogin } from 'react-google-one-tap-login';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


export default function App() {
  useGoogleOneTapLogin({
    onError: error => console.log(error),
    onSuccess: response => {
      toast.success("User logged in");
    },
    googleAccountConfigs: {
      client_id: '972994991215-m2ukou91nme4cuti07kk69u1mo0q3445.apps.googleusercontent.com'
    },
  });
  return (
    <>
    <ToastContainer />
    <NavScrollExample/>
    <Herosec/>
    </>
  )
}
