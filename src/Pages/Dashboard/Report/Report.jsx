import React from 'react';
import Iframe from 'react-iframe';

const Report = () => {
    return (
        <div className='mt-5 mb-5'>

            <h2 className='text-5xl text-center mb-5 '>Report</h2>
            <div className='iframe-container'>
            <Iframe styles={{background: '#FFFFFF',border: 'none',borderRadius: '4px',boxShadow: '0 2px 10px 0 rgba(70, 76, 79, .2)',width:'1300px',  height:'700px'}} url='https://charts.mongodb.com/charts-doctors_portal_database-scsmu/embed/charts?id=64804c9d-f3f7-4cd8-8e24-05feae547bc1&maxDataAge=3600&theme=light&autoRefresh=true'></Iframe>
            <Iframe styles={{background: '#FFFFFF',border: 'none',borderRadius: '4px',boxShadow: '0 2px 10px 0 rgba(70, 76, 79, .2)',width:'1300px',  height:'700px'}} url='https://charts.mongodb.com/charts-doctors_portal_database-scsmu/embed/charts?id=6491e85c-7539-431a-87ce-fc3420b0cf91&maxDataAge=3600&theme=light&autoRefresh=true'></Iframe>

            </div>
            
        </div>
    );
};

export default Report;