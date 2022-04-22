import React from 'react';
import '../../index';
import { loginUrl } from '../../data';

function Login() {
    return (
        <div className='login'>
            <h1>login page</h1>
            <img 
                src="https://getheavy.com/wp-content/uploads/2019/12/spotify2019-830x350.jpg"
                alt=""
            />
            {/* {login button} */}
            <a href={loginUrl}>LOGIN SPOTIFY</a>
        </div>
    );
}

export default Login