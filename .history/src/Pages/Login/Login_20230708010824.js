import React from 'react';
import { useForm } from 'react-hook-form';
import { FcGoogle } from 'react-icons/fc';
import { Link } from 'react-router-dom';

const Login = () => {
    const { register, formState: { errors }, handleSubmit } = useForm()

    const handleLogin = data => {
        console.log(data)
    }
    return (
        <div className="h-[700px] flex justify-center items-center">
            <div className='w-96 p-7 card shadow-xl'>
                <h2 className='text-xl text-center font-bold'>Login</h2>
                <form onSubmit={handleSubmit(handleLogin)}>
                    <div className="form-control w-full max-w-xs">
                        <label className="label">
                            <span className="label-text">Email</span>
                        </label>
                        <input type="text"
                            {...register("email", { required: "Email Address is required" })}
                            className="input input-bordered w-full" />
                        {errors.email && <p className="text-red-600">{errors.email?.message}</p>}
                    </div>

                    <div className="form-control w-full max-w-xs">
                        <label className="label">
                            <span className="label-text">Password</span>
                        </label>
                        <input type="password"
                            {...register("password", {
                                required: "Password is required",
                                minLength: { value: 6, message: "Must be 6 character or more" }
                            })}
                            className="input input-bordered w-full" />
                        {errors.password && <p className="text-red-600">{errors.password?.message}</p>}
                    </div>
                    <label className="label">
                        <span className="label-text">Forget Password?</span>
                    </label>

                    <input className='btn btn-accent w-full' type="submit" value="Login" />
                    {/*  <div>
                        {loginError && <p className='text-red-600'>{loginError}</p>}
                    </div> */}
                </form>
                <p>New to Doctors Portal <Link to="/signup" className='text-secondary'>Create new Account </Link></p>
                <div className='divider'>OR</div>
                <button className='btn btn-outline w-full'><FcGoogle className='w-10 h-5'></FcGoogle> CONTINUE WITH GOOGLE</button>
            </div>
        </div>
    );
};

export default Login;