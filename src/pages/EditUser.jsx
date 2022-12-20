import React from 'react';
import Navbar from "../components/Navbar";
import Sidebar from "../components/Dashboard/Sidebar";


function EditUser() {
    return (
        <div>
            <Navbar/>

            <div className="dashboard-container">
                <div className="dashboard-wrapper">
                    <div className="row">
                        <div className="left col-md-3 col-sm-12 col-12">
                            <Sidebar/>
                        </div>
                        <div className="right col-md-9 col-sm-12 col-12">
                            <div className="eu-container">
                                <div className='eu-wrapper'>
                                    <div className="eu-title">
                                        <h6>Edit User</h6>
                                    </div>

                                    <div className="eu-form">
                                        <input type="text" placeholder='Username'/>
                                        <input type="text" placeholder='Email Address'/>
                                        <input type="text" placeholder='Password'/>
                                        <input className='eu-btn' type="button" value='Update User'/>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default EditUser;