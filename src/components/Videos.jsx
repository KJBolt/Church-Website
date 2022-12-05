import React from 'react';
import { Link } from 'react-router-dom';
import {steachings} from '../Data';

function Videos() {
  return (
    <div>
         <div className='container'>
            <div className="st-wrapper">
                <div className="title">
                    Videos
                </div>
                
                <div className="st-content">
                    <div className="row">
                        {steachings.map((teaching) => (
                                <div className="content col-lg-4 col-md-6 col-sm-6 col-12" key={teaching.id}>
                                    <Link  to='/post' style={{ textDecoration:'none', color:'black' }}>
                                    <div className="content-wrapper shadow-sm">
                                        <div className="image">
                                        <iframe
                                            src="https://www.facebook.com/plugins/video.php?height=314&href=https%3A%2F%2Fweb.facebook.com%2Fpapa.ike.980%2Fvideos%2F663149874529181%2F&show_text=false&width=560&t=0"
                                            width="560" height="314" style={{border:'none', overflow:'hidden'}} scrolling="no" frameBorder="0"
                                            allowFullScreen={true}
                                            allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
                                            title="myFrame"
                                        />
                                        </div>
                                        <div className="date">
                                            <h4>{teaching.date}</h4>
                                        </div>
                                        <div className="desc-title">
                                            <p>
                                                {teaching.title}
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
    </div>
  )
}

export default Videos