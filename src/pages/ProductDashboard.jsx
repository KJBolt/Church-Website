import React from 'react';
import Navbar from "../components/Navbar";
import Sidebar from "../components/Dashboard/Sidebar";
import {DataGrid} from "@mui/x-data-grid";
import {rows1} from "../Data";
import {Link} from "react-router-dom";
import {AiOutlineDelete} from 'react-icons/ai';
import {AiOutlineEdit} from 'react-icons/ai';

const columns = [
    { field: 'id', headerName: 'ID', width: 70 },
    { field: 'Author', headerName: 'Author', width: 130 },
    { field: 'Post', headerName: 'Post', width: 400 },
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
                    <Link to={'/dashboard/posts/'+params.row.id} style={{textDecoration:'none'}}>
                        <AiOutlineEdit style={{fontSize: 20, color:'green', cursor:'pointer'}}/>
                    </Link>

                </div>
            )
        }
    },
];

function ProductDashboard() {
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
                                    rows={rows1}
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

export default ProductDashboard;