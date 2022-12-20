import React from 'react';
import Navbar from "../components/Navbar";
import Home from "../components/Dashboard/Home";
import Chart from "../components/Dashboard/Chart";
import {data} from '../Data'
import Details from "../components/Dashboard/Details";
import Sidebar from "../components/Dashboard/Sidebar";

function Dashboard() {
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
                            <Home />
                            <Chart data={data} title='New Users Analytics'/>
                            <Details/>
                        </div>
                    </div>
                </div>
            </div>
            
        </div>
    );
}

export default Dashboard;