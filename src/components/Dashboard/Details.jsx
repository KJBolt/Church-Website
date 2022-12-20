import React from 'react';
import {users} from "../../Data";
import {Link} from 'react-router-dom';
import {MdDeleteOutline} from 'react-icons/md';
import {FiEdit} from 'react-icons/fi';

function Details() {
    return (
        <div className='dcontainer'>
            <div className="dwrapper">
                <div className="row">
                    <div className="dleft col-md-4 col-sm-12 col-12">
                        <div className="dtitle">
                            <h6>New Members</h6>
                            <Link to='/dashboard/users' style={{textDecoration:'none'}}>
                                <button className='dbtn'>View All</button>
                            </Link>
                        </div>


                        {users.map((user) => (
                            <div className="user-details" key={user.id}>
                                <div className="one">
                                    <img src={user.image} alt=""/>
                                </div>
                                <div className="two">
                                    <p>{user.name}</p>
                                    <p>Software Developer</p>
                                </div>
                                <div className="btn-icons">
                                    <MdDeleteOutline style={{fontSize:20, color:'red', cursor:'pointer'}} />
                                    <FiEdit style={{fontSize:20, color:'green', cursor:'pointer'}}/>
                                </div>
                            </div>
                        ))}
                    </div>
                    <div className="dright col-md-7 col-sm-12 col-12">
                        <div className="dtitle">
                            <h6>Latest Posts</h6>
                            <Link to='/dashboard/posts' style={{textDecoration:'none'}}>
                                <button className='dbtn'>View All</button>
                            </Link>

                        </div>

                        <div className="post-details">
                            <table className="table caption-top">
                                <thead>
                                <tr>
                                    <th scope="col">ID</th>
                                    <th scope="col">User</th>
                                    <th scope="col">Post</th>
                                    <th scope="col">Time</th>
                                </tr>
                                </thead>
                                <tbody>
                                <tr>
                                    <th scope="row">1</th>
                                    <td>Mark Appiah</td>
                                    <td>Jesus Christ is God</td>
                                    <td>1 day ago</td>
                                </tr>
                                <tr>
                                    <th scope="row">2</th>
                                    <td>Jacob Nartey</td>
                                    <td>Woman Preaching</td>
                                    <td>2 hrs ago</td>
                                </tr>
                                <tr>
                                    <th scope="row">3</th>
                                    <td>Larry Mensah</td>
                                    <td>Tithes</td>
                                    <td>1 month ago</td>
                                </tr>
                                <tr>
                                    <th scope="row">4</th>
                                    <td>John Bolt</td>
                                    <td>Giving</td>
                                    <td>2 month ago</td>
                                </tr>
                                <tr>
                                    <th scope="row">5</th>
                                    <td>Kenneth Rockson</td>
                                    <td>Judgment</td>
                                    <td>3 days ago</td>
                                </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Details;