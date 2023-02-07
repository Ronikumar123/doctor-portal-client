import React from 'react';
import fluoride from '../../../assets/images/fluoride.png'
import cavity from '../../../assets/images/cavity.png'
import whitening from '../../../assets/images/whitening.png'
import Service from './Service';

const Services = () => {
    const servicesData =[
        {
            id:1,
            name: 'Fluoride Treatment',
            description: 'Fluoride is a common health care product that contains high levels of fluoride that a dental hygienist will try to improve health and reduce the risk of caries.',
            img: fluoride
        },
        {
            id:2,
            name: 'Cavity Filling',
            description: 'A filling is used to treat a small birth defect in a curd. To repair a cavity, a dentist removes decayed dead tissue and then fills the space with a filling material.',
            img: cavity
        },
        {
            id:3,
            name: 'Teeth Whiting',
            description: 'Bleaching your teeth to make them whiter. It can not whiten your bright white, it can brighten the existing color by different shades.',
            img: whitening
        },
    ]
    return (
        <div className='mt-16'>
            <div className='text-center'>
                <h3 className='text-xl font-bold text-primary uppercase'>Our Services</h3>
                <h2 className='text-3xl'>Services We Provide</h2>
           </div>
           <div className='grid gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
               {
                servicesData.map(service =><Service
                key={service.id}
                service={service}
                
                
                ></Service>)
               }
           </div>
        </div>
    );
};

export default Services;