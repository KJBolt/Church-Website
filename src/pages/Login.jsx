import React from 'react';
import {Link} from 'react-router-dom';

function Login() {
    return (
        <div className='login-container'>
           <div className="login-wrapper">
                <div className="row">
                    <div className="left col-md-6 col-sm-12 col-12">
                        <div className="content">
                            <h5>Act 11:26</h5>
                            <h3>LET THE BIBLE SPEAK</h3>
                        </div>
                    </div>
                    <div className="right col-md-6 col-sm-12 col-12">
                       <h5>The Christians</h5>
                        <p>Let the bible speak</p>
                        <div className="login-inputs">
                            <input type="text" placeholder='Email Address'/>
                            <input type="text" placeholder='Password'/>
                            <br/>
                            <button className='btn1'>Login</button>
                            <br/>
                            <button className='btn2'>
                                <img src={require('../assets/google.png')} alt='' height={30} width={30}/>
                                Sign in with Google
                            </button>

                            <div className="link">
                                <p>Not a user? <Link to='/register' style={{textDecoration:'none', color:'#f45d48'}}>Register</Link></p>
                            </div>
                        </div>
                    </div>
                </div>
           </div>
        </div>
    );
}

export default Login;