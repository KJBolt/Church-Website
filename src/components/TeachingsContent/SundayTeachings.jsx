import React from 'react';
import { Link } from 'react-router-dom';
import {steachings} from '../../Data';

function SundayTeachings() {
  return (
    <>
        <div className='container'>
            <div className="st-wrapper">
                <div className="title">
                    Sunday Teachings
                </div>
                
                <div className="st-content">
                    <div className="row">
                        {steachings.map((teaching) => (
                                <div className="content col-lg-4 col-md-6 col-sm-6 col-12" key={teaching.id}>
                                    <Link  to='/post' style={{ textDecoration:'none', color:'black' }}>
                                    <div className="content-wrapper shadow-sm">
                                        <div className="image">
                                            <img src={teaching.image} alt="Network Error" />
                                        </div>
                                        <div className="date">
                                            <h4>{teaching.date}</h4>
                                        </div>
                                        <div className="desc-title">
                                            <p>
                                                {teaching.title}
                                            </p>
                                        </div>

                                        <div className="desc">
                                            <p>
                                                {teaching.desc}
                                            </p>
                                        </div>
                                    </div>
                                    </Link>
                                </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    </>
  )
}

export default SundayTeachings