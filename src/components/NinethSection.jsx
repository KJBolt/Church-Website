import React from 'react';

function NinethSection() {
    return (
        <div style={{height:'auto'}}>
            <div className="container">
                <div className="n-section">
                    <div className="content">
                        <div className="title">
                            <p>Contact</p>
                        </div>
                        <div className="subtitle">
                            <p>Kindly reach out to us</p>
                        </div>
                    </div>

                    <div className="name">
                        <p>Name:</p>
                        <input type="text"/>
                    </div>

                    <div className="name">
                        <p>Email:</p>
                        <input type="email"/>
                    </div>

                    <div className="name">
                        <p className='message'>Message:</p>
                        <textarea rows={3} cols={30}  />
                    </div>

                    <div className="button">
                        <button>SEND MESSAGE</button>
                    </div>

                </div>
            </div>
        </div>
    );
}

export default NinethSection;