import Link from 'next/link';
import React from 'react';

const signup = () => {


    const handleSignup =()=>{

    }
    return (
        <div className='flex flex-col min-h-screen my-auto justify-center items-center '>
            <p className='text-primary text-center uppercase text-xl font-bold tracking-[.3em]'>sign up</p>
            <div className=' card shadow-xl'>
                <form onSubmit={handleSignup} className="card-body w-[350px] lg:w-[400px] mx-auto">
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Email</span>
                        </label>
                        <input type="text" placeholder="email" name='email' className="input input-bordered" required />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Password</span>
                        </label>
                        <input type="text" name='password' placeholder="password" className="input input-bordered" required />
                        {/* {errorElement} */}

                        <p className=''>have an account?
                            <Link className='text-primary' href='/login'>please login </Link></p>
                    </div>
                    <div className="form-control mt-6">
                        <input className='btn btn-primary' type="submit" value="login" />
                    </div>
                </form>
            </div>
            <div className="divider w-[350px] lg:w-[400px] mx-auto mt-10">OR</div>
            <div className='mb-[100px]'>
                {/* <SocialLogin /> */}
            </div>
        </div>
    );
};

export default signup;