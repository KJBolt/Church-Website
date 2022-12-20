import React from 'react';
import {Link} from "react-router-dom";

function Register() {
    return (
        <div className='login-container'>
            <div className="login-wrapper">
                <div className="row">
                    <div className="left col-sm-6 col-12">
                        <div className="content">
                            <h5>Act 11:26</h5>
                            <h3>LET THE BIBLE SPEAK</h3>
                        </div>
                    </div>
                    <div className="right col-sm-6 col-12">
                        <h5>The Christians</h5>
                        <p>Let the bible speak</p>
                        <div className="login-inputs">
                            <input type="text" placeholder='Username'/>
                            <input type="text" placeholder='Email Address'/>
                            <input type="text" placeholder='Password'/>
                            <br/>
                            <button className='btn1'>Register</button>
                            <div className="link">
                                <p>Not a user? <Link to='/login' style={{textDecoration:'none', color:'#f45d48'}}>Login</Link></p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Register;