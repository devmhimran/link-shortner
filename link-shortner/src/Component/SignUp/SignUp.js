import React from 'react';

const SignUp = () => {
    return (
        <div className='container mx-auto'>
            <div class="card w-96 bg-base-100 shadow-xl  mx-auto mt-36">
                <div className="card-body">
                    <h1 className='text-2xl text-left font-bold'>Sing Up</h1>
                    <form className=' text-left mt-5'>
                        <small className='text-left'>Name</small>
                        <input type="text" placeholder="Enter your name" class="input input-bordered w-full max-w-xs my-2" />
                        <small className='text-left'>Email Address</small>
                        <input type="email" placeholder="Enter your email" class="input input-bordered w-full max-w-xs my-2" />
                        <small className='text-left'>Password</small>
                        <input type="password" placeholder="Enter your password" class="input input-bordered w-full max-w-xs my-2" />
                        <input type="submit" class="btn btn-secondary my-2" value='Sign up' />
                    </form>
                </div>
            </div>
        </div>
    );
};

export default SignUp;