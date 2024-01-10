import React, {useState} from 'react'
import { Form, useSearchParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { registerUser, loginUser, LoginWithGoogle } from '../../store/auth-actions';
import { Link } from 'react-router-dom';
import { FcGoogle } from "react-icons/fc";
import './AuthForm.css';
function AuthForm() {
    const [searchParams] = useSearchParams();
    const isLogin = searchParams.get('mode') === 'login';
    const [email,setEmail] = useState('')
    const [password, setPassword] = useState('');
    const dispatch = useDispatch();
    const auth = useSelector(store => store.auth);
    const onSumbitForm = (e) => {
        e.preventDefault()
        if(isLogin) dispatch(loginUser(email, password))
        else dispatch(registerUser(email,password))
    }
    return (
        <div className='authform'>  
        <h1>{isLogin ? 'Login' : 'Sign up'} to your account</h1>
        <Form method="post" onSubmit={onSumbitForm}>
      {auth.error.errorMessage &&   <label htmlFor=""><p>Error Code:{auth.error.errorCode}</p> <p>Error Message: {auth.error.errorMessage}</p></label>}
        <input type="email" placeholder='Enter you email' value={email} onChange={(e) => setEmail(e.currentTarget.value)} />
        <input type="password" placeholder='Enter you password' value={password} onChange={(e) => setPassword(e.target.value)} />
       <div>
        <button onClick={() => dispatch(LoginWithGoogle())}><FcGoogle /></button>
        <button type='submit'>{isLogin ? 'Login': 'Sign Up'}</button>
       </div>
       <Link className='form_link' to={`?mode=${isLogin ? 'signup' : 'login'}`}>  {isLogin ? 'Create new user' : 'Login to account'}</Link>
    </Form>
    </div>)
}

export default AuthForm
