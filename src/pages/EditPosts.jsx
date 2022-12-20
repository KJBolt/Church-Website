import React,{useState} from 'react';
import Navbar from "../components/Navbar";
import Sidebar from "../components/Dashboard/Sidebar";
import { CKEditor } from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import parse from 'html-react-parser';

function EditPosts() {
    const [text, setText] = useState("");
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
                            <div className="eu-container">
                                <div className='eu-wrapper'>
                                    <div className="eu-title">
                                        <h6>Edit Post</h6>
                                    </div>

                                    <div className="eu-form">
                                        <input type="file" />
                                        <input type="text" placeholder='Title'/>
                                        <CKEditor
                                            editor={ ClassicEditor }
                                            className='ckeditor'
                                            style={{height:200}}
                                            data={text}
                                            onChange={ ( event, editor ) => {
                                                const data = editor.getData();
                                                setText(parse(data));
                                            }}
                                        />
                                        <input className='eu-btn' type="button" value='Update'/>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default EditPosts;