import React from 'react';



function Events() {
    return (
        <div className="event-container">
            <div className="row">
                <div className="left col-md-4 col-sm-12 col-12 shadow-sm">
                    <div className="image">
                        <img src={require('../assets/bible4.jpg')} alt=""/>
                    </div>

                    <div className="time">
                        <div className="one">
                            <div className="hours">
                                <p>0</p>
                            </div>
                            <div className="desc">
                                <p>Days</p>
                            </div>
                        </div>

                        <div className="one">
                            <div className="hours">
                                <p>00</p>
                            </div>
                            <div className="desc">
                                <p>Hours</p>
                            </div>
                        </div>

                        <div className="one">
                            <div className="hours">
                                <p>00</p>
                            </div>
                            <div className="desc">
                                <p>Minutes</p>
                            </div>
                        </div>

                        <div className="one">
                            <div className="hours">
                                <p>00</p>
                            </div>
                            <div className="desc">
                                <p>Seconds</p>
                            </div>
                        </div>

                    </div>

                    <div className="other-details">
                        <div className="title">
                            <p>Sunday Gatherings</p>
                        </div>
                        <div className="desc">
                            <p>On Sundays, at 09:00 AM at</p>
                            <p>Bubiashie Otisahele Street, Ghana</p>
                        </div>
                    </div>

                </div>
                <div className="right col-md-8 col-sm-12 col-12">
                    <div className="header">
                        <div className="up-event">
                            <h3>Upcoming Events</h3>
                            <hr className={{width:'10%'}}/>
                        </div>
                    </div>

                    <div className="gallery-body">
                        <div className="gb-content">
                            <div className="gb-left">
                                <div className="gb-time">
                                    <p>18</p>
                                    <p>Dec, 2022</p>
                                </div>
                                <div className="gb-event">
                                    <p>Anually Gathering</p>
                                    <p><i className="fa fa-clock-o" aria-hidden="true"></i> Sunday, 10:00 AM</p>
                                    <p><i className="fa fa-map-marker" aria-hidden="true"></i> Bubiashie, Accra</p>
                                </div>
                            </div>

                            <div className="gb-left">
                                <div className="gb-time">
                                    <p>10</p>
                                    <p>June, 2022</p>
                                </div>
                                <div className="gb-event">
                                    <p>Fasting and Prayers</p>
                                    <p><i className="fa fa-clock-o" aria-hidden="true"></i> Sunday, 10:00 AM</p>
                                    <p><i className="fa fa-map-marker" aria-hidden="true"></i> Bubiashie, Accra</p>
                                </div>
                            </div>

                            <div className="gb-left">
                                <div className="gb-time">
                                    <p>22</p>
                                    <p>Dec, 2022</p>
                                </div>
                                <div className="gb-event">
                                    <p>All Night Service</p>
                                    <p><i className="fa fa-clock-o" aria-hidden="true"></i> Mondays, 7:30 PM</p>
                                    <p><i className="fa fa-map-marker" aria-hidden="true"></i> Bubiashie, Accra</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
}

export default Events;