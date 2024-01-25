import "./lib.css";
import React, { useEffect, useState, useRef } from 'react'
import Layout from './Layout'
import axios from 'axios';
import { Modal } from 'antd';


export default function Library() {
    const itemList = [
        "Apple",
        "Orange",
        "Banana",
        "Cherry",
        "Milk",
        "Peanuts",
        "Butter",
        "Tomato"
    ];

    const [filteredList, setFilteredList] = new useState(itemList);

    const [visible, setVisible] = useState(false)
    const [filename, setFilename] = useState('')
    const [user, setUser] = useState(JSON.parse(localStorage.getItem('user')))
    const [icon, setIcon] = useState(0)
    const [string, setString] = useState('')
    const fileInputRef = useRef(null);
    const [file, setFile] = useState(null);

    const handleFileChange = (e) => {

        setFile(e.target.files[0]);
        uploadFile(e.target.files[0]);
    };

    const uploadFile = (selectedFile) => {
        if (selectedFile) {
            const formData = new FormData();
            formData.append('file', selectedFile);

            axios.post(`${REACT_APP_API}/api/upload/library/`, formData)
                .then(response => {
                    console.log(response.data);
                    alert("File uploaded successfully");
                    setFile(null);
                })
                .catch(error => {
                    console.error(error);
                });
        } else {
            console.warn('Please select a file before uploading.');
        }
    };

    const filterBySearch = (event) => {
        // Access input value
        const query = event.target.value;
        // Create copy of item list
        var updatedList = [...itemList];
        // Include all elements which includes the search query
        updatedList = updatedList.filter((item) => {
            return item.toLowerCase().indexOf(query.toLowerCase()) !== -1;
        });
        // Trigger render with updated values
        setFilteredList(updatedList);
    };

    return (
        <Layout>
            <div className='page p-4'>
                <div className="App">
                    <h1>Library</h1>
                    <div className="input-group flex-nowrap my-4">
                        <input
                            type="text"
                            className="form-control"
                            placeholder="Search Resources"
                            aria-label="Username"
                            aria-describedby="addon-wrapping"
                            onChange={filterBySearch}
                        />
                        <button type="button" class="btn btn-primary mx-2" onClick={() => { setVisible(true); setFilename(''); setString('Resource'); setIcon(6) }}>Upload File</button>
                    </div>

                    <div id="item-list">
                        <ul class="list-group">
                            {filteredList.map((item, index) => (
                                <li key={index} class="list-group-item myflex" style={{ justifyContent: 'space-between' }}>
                                    <h6 className='m-2'>{item}</h6>
                                    <span>Created by : {"Rex"}</span>
                                    <a className='btn btn-primary' href={"google.com"} target='_blank'>Open</a>
                                </li>
                            ))}
                        </ul>
                    </div>

                </div>
            </div>
            <input
                type="file"
                ref={fileInputRef}
                style={{ display: 'none' }}
                onChange={handleFileChange}
            />
            <Modal styles={{ height: 'fit-content' }} onCancel={() => { setVisible(false); setFilename('') }} footer={null} open={visible} >
                <div className='d-flex ' style={{ flexDirection: 'column' }}>
                    <p style={{ fontSize: '20px' }}> Upload a new file : </p>

                    <input value={filename} onChange={(e) => { setFilename(e.target.value) }} id="form2Example1" className="form-control m-2" placeholder='FileName?' required />


                    <span style={{ display: 'flex', justifyContent: 'space-around' }}>
                        <button onClick={() => { setVisible(false) }} className='btn btn-secondary'>
                            Cancel
                        </button>
                        <button onClick={(e) => { fileInputRef.current.click(); setVisible(false) }} className='btn btn-outline-primary'>
                            CREATE
                        </button>
                    </span>
                </div>
            </Modal>
        </Layout>
    );
}