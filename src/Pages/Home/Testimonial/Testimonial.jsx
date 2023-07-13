import React from 'react';
import quote from '../../../assets/icons/quote.svg'
import people1 from '../../../assets/images/people1.png'
import people2 from '../../../assets/images/people2.png'
import people3 from '../../../assets/images/people3.png'
import jarin from '../../../assets/images/jarin.png'
import johon from '../../../assets/images/johon.png'
import tabasum from '../../../assets/images/tabasum.png'
import Review from './Review';

const Testimonial = () => {
    const reviews =[
        {
            _id:1,
            name:'Kabir',
            img: people1  ,
            review:'The staff was very friendly and helpful and the dentist was honest and straight forward. I have been to other dentists that exaggerated what my needs were in order to make more money.',
            location: 'Bangladesh'
        },
        {
            _id:2,
            name:'Priyanka',
            img:  people2 ,
            review:'Very friendly and professional Dental house.Dental house is very patient-friendly and professional. Great Care',
            location: 'Bangladesh'
        },
        {
            _id:3,
            name:'Rafsan',
            img:  people3 ,
            review:'The best dental house I have ever experienced! Professional, courteous, and friendly staff made me feel like family… would highly recommend to anyone!!!',
            location: 'Bangladesh'
        },

        {
            _id:4,
            name:'Jarin',
            img: jarin,
            review:'Very friendly and professional Dental house.Dental house is very patient-friendly and professional. Great Care',
            location: 'Bangladesh'
        },
        {
            _id:5,
            name:'Johon',
            img:  johon,
            review:'The best dental house I have ever experienced! Professional, courteous, and friendly staff made me feel like family… would highly recommend to anyone!!!',
            location: 'Bangladesh'
        },
        {
            _id:6,
            name:'Tabasum',
            img:  tabasum ,
            review:'The staff was very friendly and helpful and the dentist was honest and straight forward. I have been to other dentists that exaggerated what my needs were in order to make more money.',
            location: 'Bangladesh'
        },
    ]
    return (
        <section className='my-16'>
            <div  className='flex justify-between'>
                <div>
                    <h4 className='text-4xl text-primary font-bold'>Patient Feedback</h4>
                    <h2 className='text-2xl'>What Our Patients Says</h2>
                 </div>
                 <figure>
                    <img className='w-28 lg:w-48' src={quote} alt="" />
                 </figure>
            </div>
            <div className='grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
             {
                reviews.map(review => <Review
                key={review._id}
                review={review}
                
                
                ></Review>)
             }
            </div>
        </section>
    );
};

export default Testimonial;