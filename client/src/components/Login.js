import React from 'react';

const Login = (props) => (
    <form>
        <br></br>
        <div className="col-12 input-group mb-3">
            <input className="form-control form-rounded" placeholder='name@email.com'
                onChange={props.handleLogin} name="email" value={props.email}>
            </input>
            <input className="form-control" type='password' placeholder='password'
                onChange={props.handleLogin} name="password" value={props.password}>
            </input>
            <div className="input-group-append">
                <button className='btn  btn-outline-primary'
                    onClick={props.handleLoginButton}>
                    <i className="fa fa-sign-in" aria-hidden="true"></i> Login
                </button>
            </div>
        </div>
    </form>
);

export default Login;