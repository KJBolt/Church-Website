import React from 'react';
import Navbar from "../components/Navbar";
import Sidebar from "../components/Dashboard/Sidebar";

function EditEvent() {
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
                                        <h6>Edit Event</h6>
                                    </div>

                                    <div className="eu-form">
                                        <input type="text" placeholder='Title'/>
                                        <input type="date"/>
                                        <input type="time"/>
                                        <input type="text" placeholder='Location'/>
                                        <input className='eu-btn' type="button" value='Update'/>
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

export default EditEvent;