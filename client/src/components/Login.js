import React from 'react';

const Login = (props) => (
    <div className="container-fluid homePageStyle">

        <div id="signIn">
            <div id="logo">
                <h3 className="navbar-brand loginLogo text-info">
                    sozial
                </h3>
            </div>
            <div id="signInContain">
            <div className="input-group-prepend homeInput">
                <span className="input-group-text" id="basic-addon1"> <i className="fas fa-user-circle"></i> </span>
                <input type="email" className="form-control" placeholder="Enter Email/Username" onChange={props.handleLogin} name="email" value={props.email} aria-label="Username" aria-describedby="basic-addon1" />
            </div>
            <div className="input-group-prepend homeInput">
                <span className="input-group-text" id="basic-addon1"><i className="fas fa-key"></i></span>
                <input type="password" className="form-control" placeholder="Enter Password" onChange={props.handleLogin} name="password" value={props.password} aria-label="Password" aria-describedby="basic-addon1" />
            </div>
            <br></br>
            <button type="button" className="btn btn-dark" onClick={props.handleLoginButton}>Sign in</button>
        </div>
        </div>

        <div id="register">
            <div className="input-group-prepend homeInput">
                <span className="input-group-text" id="basic-addon1"><i className="fas fa-user-plus"></i></span>
                <input type="text" className="form-control" placeholder="Username" aria-label="Username" aria-describedby="basic-addon1"
                    onChange={props.handleRegister} 
                    name='regEmail'
                    value={props.regEmail}
                />
            </div>

            <div className="input-group-prepend homeInput">
                <span className="input-group-text" id="basic-addon1"><i className="fas fa-key"></i></span>
                <input type="text" className="form-control" placeholder="Password" aria-label="Password" aria-describedby="basic-addon1" 
                    onChange={props.handleRegister} 
                    name='regPss'
                    value={props.regPss}
                />
            </div>
            <br></br>
            <button type="button" id="registerBtnStyle" className="btn btn-dark"
                onClick={props.handleRegisterClick}
            >Register</button>
        </div>

    </div>
);

export default Login;