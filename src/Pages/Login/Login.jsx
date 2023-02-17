import React from 'react';
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';

const Login = () => {
    const { register,formState: { errors }, handleSubmit } = useForm()
    const handleLogin = data =>{
        console.log(data);
    }
    return (
        <div className='h-[800px] flex justify-center items-center'>
            <div className='w-96 p-8 bg-slate-100 shadow-2xl'>
                <h2 className='text-4xl text-center font-bold'>Login</h2>

                <form onSubmit={handleSubmit(handleLogin)}>

                    <div className="form-control w-full max-w-xs">
                        <label className="label">
                            <span className="label-text">Email</span>
                        </label>
                        <input type="text" 
                        {...register("email", 
                        {
                            required:"Email Address is required*"
                        })} 
                        className="input input-bordered input-info w-full max-w-xs" />
                         {errors.email && <p className='text-red-600 font-thin'>{errors.email?.message}</p>}
                     </div>
                    <div className="form-control w-full max-w-xs">
                        <label className="label">
                            <span className="label-text">Password</span>
                        </label>
                        <input type="password" 
                        {...register("password", 
                        {
                            required:"Password is required*",
                            minLength: { value: 6, message: 'Password must be 6 characters or longer'}
                        })} 
                        className="input input-bordered input-info w-full max-w-xs" />
                         {errors.password && <p className='text-red-600 font-thin'>{errors.password?.message}</p>}
                        <label className="label">
                            <span className="label-text">Forget Password?</span>
                        </label>
                     </div>
                    
                    <input className='btn btn-accent w-full' value="Login" type="submit" />
                </form>
                <p>New to Dental House? <Link className='text-primary' to="/ signup">Create new Account</Link></p>
                <div className='divider'>OR</div>
                <button className='btn btn-outline w-full'>CONTINUE WITH GOOGLE</button>
            </div>
        </div>
    );
};

export default Login;