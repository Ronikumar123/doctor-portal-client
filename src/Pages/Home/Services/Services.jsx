import React from 'react';
import fluoride from '../../../assets/images/fluoride.png'
import cavity from '../../../assets/images/cavity.png'
import whitening from '../../../assets/images/whitening.png'
import cleaning from '../../../assets/images/cleaning.png'
import canal from '../../../assets/images/canal.png'
import venner from '../../../assets/images/veneer.png'
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

        {
            id:4,
            name: 'Teeth Cleaning',
            description: 'Teeth cleaning is part of oral hygiene and involves the removal of dental plaque from teeth with the intention of preventing cavities (dental caries), gingivitis, and periodontal disease.',
            img: cleaning
        },
        {
            id:5,
            name: 'Root Canal',
            description: 'Root canal is a treatment to repair and save a badly damaged or infected tooth instead of removing it. The term "root canal" comes from cleaning of the canals inside a tooth root.',
            img: canal
        },
        {
            id:6,
            name: 'Veneers Teeth',
            description: 'Veneers are custom-made shells that fit over teeth to improve their appearance and create a beautiful smile.',
            img: venner
        },
    ]
    return (
        <div className='pt-16'>
            <div className='text-center pb-12'>
                <h3 className='text-4xl font-bold text-primary uppercase'>Our Services</h3>
                <h2 className='text-xl'>Services We Provide</h2>
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