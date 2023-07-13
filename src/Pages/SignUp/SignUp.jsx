import React, { useContext, useState } from 'react';
import { useForm } from 'react-hook-form';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../contexts/AuthProvider';
import { error } from 'daisyui/src/colors';
import { toast } from 'react-hot-toast';
import useToken from '../../hooks/useToken';

const SignUp = () => {
    const {register, handleSubmit, formState:{errors}} = useForm();
    const {createUser, updateUser} = useContext(AuthContext);
    const [signUpError, setSignUpError] = useState('');
    const [createdUserEmail, setCreatedUserEmail] = useState('');
    const [token] = useToken(createdUserEmail);

    const navigate = useNavigate();

    // if(token){
    //     navigate('/');
    // }

    const handleSignUp = (data) =>{

    
    setSignUpError('');
    console.log(errors);
    createUser(data.email, data.password)
    .then(result =>{
        const user = result.user;
        console.log(user);
        toast('User Created Successfully.')
        const userInfo = {
            displayName: data.name
        }
        updateUser(userInfo)
        .then(()=>{
            saveUser(data.name, data.email);
        })
        .catch(err => console.log(err));
    })
    .catch(error =>
        { 

            console.log(error)
            setSignUpError(error.message);
        
        });
    }

    const saveUser = (name,email) =>{
        const user ={name,email};
        fetch('http://localhost:5000/users', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body:JSON.stringify(user)
        })
        .then(res => res.json())
        .then(data =>{
            // setCreatedUserEmail(email);
            navigate('/');
        })
    }
    


    return (
        <div className='h-[800px] flex justify-center items-center'>
            <div className='w-96 p-8 bg-slate-100 shadow-2xl'>
                <h2 className='text-4xl text-center font-bold'>Sign Up</h2>

                <form onSubmit={handleSubmit(handleSignUp)}>

                    <div className="form-control w-full max-w-xs">
                        <label className="label">
                            <span className="label-text">Name</span>
                        </label>
                        <input type="text" {...register("name",{
                            required: "Name is required*"
                        })} className="input input-bordered input-info w-full max-w-xs" />
                        {errors.name && <p className='text-red-600 font-thin'>{errors.name.message}</p>}
                     
                     </div>
                    <div className="form-control w-full max-w-xs">
                        <label className="label">
                            <span className="label-text">Email</span>
                        </label>
                        <input type="email" {...register("email",{
                            required:"Email is required*"
                        })} className="input input-bordered input-info w-full max-w-xs" />
                        {errors.email && <p className='text-red-600 font-thin'>{errors.email.message}</p>}
                    
                     </div>
                    <div className="form-control w-full max-w-xs">
                        <label className="label">
                            <span className="label-text">Password</span>
                        </label>
                        <input type="password" {...register("password",{
                            required:"Password is required*",
                            minLength: {value:6, message: "Password must be 6 characters or longer"},
                            pattern: {value: /(?=.*[A-Z])(?=.*[!@#$&*])(?=.*[0-9])/, message:'Password must be strong'}
                        })}
                         className="input input-bordered input-info w-full max-w-xs" />
                        {errors.password && <p className='text-red-600 font-thin'>{errors.password.message}</p>}
                    </div>
                    
                    <input className='btn mt-6 btn-accent w-full' value="Sign Up" type="submit" />
                    {signUpError && <p className='text-red-600'>{signUpError}</p>}
                </form>
                <p>Already have an account? <Link className='text-primary' to="/login">Please Login</Link></p>
                <div className='divider'>OR</div>
                <button className='btn btn-outline w-full'>CONTINUE WITH GOOGLE</button>
            </div>
        </div>
    );
};

export default SignUp;