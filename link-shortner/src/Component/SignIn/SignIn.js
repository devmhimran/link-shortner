import React from 'react';
import { Link } from 'react-router-dom';

const SignIn = () => {
    const handleSingIn = (e)=>{
        e.preventDefault();
        const email = e.target.email.value;
        const password = e.target.password.value;
        console.log(email, password);
    }
    return (
        <div className='container mx-auto'>
            <div class="card w-96 bg-base-100 shadow-xl  mx-auto mt-36">
                <div className="card-body">
                    <h1 className='text-2xl text-left font-bold'>Sing In</h1>
                    <form onSubmit={handleSingIn} className=' text-left mt-5'>
                        <small className='text-left'>Email Address</small>
                        <input type="email" name='email' placeholder="Enter your email" class="input input-bordered w-full max-w-xs my-2" />
                        <small className='text-left'>Password</small>
                        <input type="password" name='password' placeholder="Enter your password" class="input input-bordered w-full max-w-xs my-2" />
                        <input type="submit" class="btn btn-secondary my-2" value='Sign in' />
                        <small>Please register <Link to='/signup'></Link ></small>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default SignIn;