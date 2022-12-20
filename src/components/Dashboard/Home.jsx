import React from 'react';
import {AiOutlineArrowUp} from 'react-icons/ai';
import {AiOutlineArrowDown} from 'react-icons/ai';

function Home() {
    return (
        <div className="increment">
            <div className="row">
                <div className="inc-left col-sm-4 col-12 shadow-sm">
                    <h5>New Users</h5>

                    <div className="inc-left-content">
                        <p>20</p>
                        <p>-5% <AiOutlineArrowDown style={{color: 'red', fontSize:20}}/></p>
                    </div>

                    <p>Compared to last month</p>
                </div>
                <div className="inc-right col-sm-4 col-12 shadow-sm">
                    <h5>New Posts</h5>

                    <div className="inc-right-content">
                        <p>100</p>
                        <p>10% <AiOutlineArrowUp style={{color: 'green', fontSize:20}}/></p>
                    </div>

                    <p>Compared to last month</p>
                </div>
                <div className="inc-right col-sm-4 col-12 shadow-sm">
                    <h5>New Events</h5>

                    <div className="inc-right-content">
                        <p>30</p>
                        <p>10% <AiOutlineArrowUp style={{color: 'green', fontSize:20}}/></p>
                    </div>

                    <p>Compared to last month</p>
                </div>
            </div>
        </div>
    );
}

export default Home;