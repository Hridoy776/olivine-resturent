import Image from 'next/image';
import Link from 'next/link';
import Router, { useRouter } from 'next/router';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import SocialLogin from '../components/SocialLogin';
import ls from '../public/images/login-signup.jpg'
import { loginUser } from '../redux/slices/auth/authSlice';

const Login = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const dispatch = useDispatch()
    const router=useRouter()
    const handleLogin = (e) => {
        e.preventDefault()
        dispatch(loginUser({ email, password }))
        router.push('/home')

    }
    return (
        <div

            className='p-16 pb-64 min-h-screen h-full'>
            <p className='text-primary text-center uppercase font-bold tracking-widest text-xl'>login to your account</p>
            <div className='flex  justify-center items-center'>
                <div className=' m-8 flex-1'>
                    <div className='lg:w-[400px] w-[300px] mx-auto '>
                        <SocialLogin />

                    </div>
                    <form onSubmit={handleLogin} className="card-body w-[350px] lg:w-[450px] mx-auto">

                        <div className="divider w-full mx-auto mt-10">OR</div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input
                                type="text"
                                placeholder="email"
                                name='email'
                                onChange={(e) => setEmail(e.target.value)}
                                className="input rounded-none input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input 
                            type="text" 
                            name='password' 
                            placeholder="password" 
                            onChange={(e) => setPassword(e.target.value)}
                            className="input rounded-none input-bordered" required />
                            {/* {errorElement} */}

                            <p className=''>are you new ?
                                <Link className='text-primary' href='/signup'>please sign up</Link></p>
                        </div>
                        <div className="form-control mt-6">
                            <input className='btn rounded-none   btn-primary' type="submit" value="login" />
                        </div>
                    </form>
                </div>

                <div className='flex-1 w-[400px] h-full'>
                    <Image src={ls} alt='sample' />
                </div>
            </div>

        </div>
    );
};

export default Login;