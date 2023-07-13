import { useQuery } from '@tanstack/react-query';
import React from 'react';
import { useForm } from 'react-hook-form';
import Loading from '../../Shared/Loading/Loading';
import { toast } from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';

const AddDoctor = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const imageHostKey = process.env.REACT_APP_imgbb_key;
    
    const navigate = useNavigate();

    const { data: specialties, isLoading} = useQuery({
        queryKey: ['specialty'],
        queryFn: async () =>{
          const res = await fetch('https://doctors-portal-server-three-rho.vercel.app/appointmentSpecialty')
          const data =await res.json();
          return data;
        }
    })
    const handleAddDoctor = data => {
        const image = data.image[0];
        const formData = new FormData();
        formData.append('image', image);
        const url = `https://api.imgbb.com/1/upload?key=${imageHostKey}`
        fetch(url, {
            method: 'POST',
            body: formData
        })
        .then(res => res.json())
        .then(imgData => {
            if(imgData.success) {
                console.log(imgData.data.url);
                const doctor = {
                    name: data.name,
                    email: data.email,
                    specialty: data.specialty,
                    image:imgData.data.url
                }

                fetch('https://doctors-portal-server-three-rho.vercel.app/doctors', {
                    method: 'PUT',
                    headers: {
                        'content-type': 'application/json',
                        authorization: `bearer ${localStorage.getItem('accessToken')}`
                    },

                    body: JSON.stringify(doctor)

                })

                .then(res => res.json())
                .then(result =>{
                    console.log(result);
                    toast.success(`${data.name} is added successfully`)
                    navigate('/dashboard/manageDoctors')
                })
            }
            
        })
    }

    if(isLoading){
        return <Loading></Loading>
    }

    return (
        <div className='w-96 p-7'>

            <h2 className="text-4xl">Add A Doctor</h2>
            <form onSubmit={handleSubmit(handleAddDoctor)}>

                <div className="form-control w-full max-w-xs">
                    <label className="label">
                        <span className="label-text">Name</span>
                    </label>
                    <input type="text" {...register("name", {
                        required: "Name is required*"
                    })} className="input input-bordered input-info w-full max-w-xs" />
                    {errors.name && <p className='text-red-600 font-thin'>{errors.name.message}</p>}

                </div>
                <div className="form-control w-full max-w-xs">
                    <label className="label">
                        <span className="label-text">Email</span>
                    </label>
                    <input type="email" {...register("email", {
                        required: "Email is required*"
                    })} className="input input-bordered input-info w-full max-w-xs" />
                    {errors.email && <p className='text-red-600 font-thin'>{errors.email.message}</p>}

                </div>
                <div className="form-control w-full max-w-xs">
                    <label className="label">
                        <span className="label-text">Specialty</span>

                    </label>
                    <select 
                    {...register('specialty')}
                    
                    class="select select-info w-full max-w-xs">
                        
                       {
                        specialties.map(specialty => <option
                        key= {specialties._id}
                        value= {specialties.name}
                        
                        >{specialty.name}</option>)
                       }
                    </select>

                </div>
                <div className="form-control w-full max-w-xs">
                    <label className="label">
                        <span className="label-text">Photo</span>
                    </label>
                    <input type="file" {...register("image", {
                        required: "Photo is required*"
                    })} className="input  w-full max-w-xs" />
                    {errors.img && <p className='text-red-600 font-thin'>{errors.img.message}</p>}

                </div>

                <input className='btn mt-6 btn-accent w-full' value="Add Doctor" type="submit" />
            </form>
        </div>
    );
};

export default AddDoctor;