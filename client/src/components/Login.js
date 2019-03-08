import React from 'react';

const Login = (props) => (
    <form>
        <input onChange={props.handleLogin} name="email" value={props.email}></input>
        <input onChange={props.handleLogin} name="password" value={props.password}></input>
        <button className='btn btn-warning' onClick={props.handleLoginButton}>Login</button>
    </form>
);

export default Login;