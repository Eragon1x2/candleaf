import React, {useState} from 'react'
import AuthForm from '../../components/Auth/AuthForm';
function Auth() {
    return(
        <><AuthForm></AuthForm></>
    )
}

export default Auth;
// export async function action({ request }) {
//     const searchParams = new URL(request.url).searchParams;
//     const mode = searchParams.get('mode') || 'login';
//     // console.log(mode)
  
//     // if (mode !== 'login' && mode !== 'signup') {
//     //   throw json({ message: 'Unsupported mode.' }, { status: 422 });
//     // }
  
//     // const data = await request.formData();
//     //  console.log(data);
//   }