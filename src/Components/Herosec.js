import React from 'react'
import logo from '../Resources/Capture-removebg-preview.png'
import { useLinkedIn } from 'react-linkedin-login-oauth2';
import  GoogleLogin  from 'react-google-login';
import { toast } from 'react-toastify';
export default function Herosec() {


  const { linkedInLogin } = useLinkedIn({
    clientId: '865f5a679spj0j',
    redirectUri: `http://localhost:3000/`, // for Next.js, you can use `${typeof window === 'object' && window.location.origin}/linkedin`
    onSuccess: (code) => {
      toast.success('Logged in using LinkedIn')
    },
    onError: (error) => {
      console.log(error);
    },
  });
const responseGoogle =(response)=>{
  console.log(response);
}


  return (
    <div className='herosec'>
      <div className="form">
        <img src={logo} height='50px' alt="" />
        <form >
          <input type="email" className="email" />
          <input type="password" className='password' />
          <button className="btn btn-warning">SignIn</button>
        </form>
        <div className="social_login">
          <img onClick={linkedInLogin} src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/ca/LinkedIn_logo_initials.png/800px-LinkedIn_logo_initials.png" alt="" height="40px" />
          <GoogleLogin
            clientId="972994991215-m2ukou91nme4cuti07kk69u1mo0q3445.apps.googleusercontent.com"
            render={renderProps => (
            <img onClick={renderProps.onClick} disabled={renderProps.disabled} src="https://www.freepnglogos.com/uploads/google-logo-png/google-logo-png-google-icon-logo-png-transparent-svg-vector-bie-supply-14.png" alt="Google" height="40px" />
            )}
            buttonText="Login"
            onSuccess={responseGoogle}
            onFailure={responseGoogle}
            cookiePolicy={'single_host_origin'}
          />
        </div>
      </div>
    </div>
  )
}
