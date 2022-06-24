import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
    const handleLink = (e) => {
        e.preventDefault();
        const link = e.target.inputLink.value;
        console.log(link);
    }
    return (
        <div className='container mx-auto w-full h-screen flex items-center'>
            <div className="card shadow-xl w-3/5 mx-auto">
                <div className="card-body">
                    <h1 className='text-3xl font-semibold'>Link Shortner</h1>
                    <form onSubmit={handleLink}>
                        <div className="form-control">
                            <label className="input-group my-2">
                                <input name='inputLink' type="text" placeholder="Enter Your Link" className="input input-bordered w-full" />
                                <button className='btn btn-primary'>Shorten</button>
                            </label>
                            <label className="input-group my-2">
                                <input type="text" placeholder="Enter Your Link" className="input input-bordered w-full" />
                                <button className='btn btn-primary'>Copy to clipboard</button>
                            </label>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Home;