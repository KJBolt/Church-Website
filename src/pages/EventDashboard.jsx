import React from 'react';
import Navbar from "../components/Navbar";
import Sidebar from "../components/Dashboard/Sidebar";
import {DataGrid} from "@mui/x-data-grid";
import {rows2} from "../Data";
import {Link} from "react-router-dom";
import {AiOutlineDelete} from 'react-icons/ai';
import {AiOutlineEdit} from 'react-icons/ai';

const columns = [
    { field: 'id', headerName: 'ID', width: 70 },
    { field: 'Author', headerName: 'Author', width: 150 },
    { field: 'Title', headerName: 'Title', width: 230 },
    { field: 'Date', headerName: 'Date', width: 180 },
    { field: 'Time', headerName: 'Time', width: 100 },
    { field: 'Location', headerName: 'Location', width: 200 },
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
                    <Link to={'/dashboard/events/'+params.row.id} style={{textDecoration:'none'}}>
                        <AiOutlineEdit style={{fontSize: 20, color:'green', cursor:'pointer'}}/>
                    </Link>

                </div>
            )
        }
    },
];

function EventDashboard() {
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
                                    rows={rows2}
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

export default EventDashboard;