import React from 'react';
import Navbar from "../components/Navbar";
import Sidebar from "../components/Dashboard/Sidebar";
import { DataGrid } from '@mui/x-data-grid';
import {AiOutlineDelete} from 'react-icons/ai';
import {AiOutlineEdit} from 'react-icons/ai';
import {rows} from "../Data";
import {Link} from 'react-router-dom';

const columns = [
    { field: 'id', headerName: 'ID', width: 70 },
    { field: 'firstName', headerName: 'First name', width: 130 },
    { field: 'lastName', headerName: 'Last name', width: 130 },
    {
        field: 'Email',
        headerName: 'Email Address',
        type: 'number',
        width: 250,
    },
    {
        field: 'Actions',
        headerName: 'Actions',
        description: 'This column has a value getter and is not sortable.',
        sortable: false,
        width: 160,
        renderCell: (params) => {
            return (
                <div style={{display:'flex'}}>
                    <AiOutlineDelete style={{fontSize: 20, color:'red', marginRight:10, cursor:'pointer'}}/>
                    <Link to={'/dashboard/users/'+params.row.id} style={{textDecoration:'none'}}>
                        <AiOutlineEdit style={{fontSize: 20, color:'green', cursor:'pointer'}}/>
                    </Link>

                </div>
            )
        }
    },
];


function UserDashboard() {
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
                            <div style={{ height: 600, width: '100%' }}>
                                <DataGrid
                                    rows={rows}
                                    columns={columns}
                                    pageSize={8}
                                    rowsPerPageOptions={[5]}
                                    checkboxSelection
                                    disableSelectionOnClick
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default UserDashboard;