import React from 'react';

const Service = ({service}) => {
    const {name, description , img} = service;
    return (
        <div className="card  bg-base-100 shadow-2xl">
            <figure className="pt-10">
                <img src={img} alt="Shoes" className="rounded-xl" />
            </figure>
            <div className="card-body items-center text-center">
                <h2 className="card-title text-center font-bold text-[#10b981]">{name}</h2>
                <p className='text-start font-semibold'>{description}</p>
                
            </div>
        </div>
    );
};

export default Service;