import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import CopyToClipboard from 'react-copy-to-clipboard';
import { Link } from 'react-router-dom';
import './Home.css';

const Home = () => {
    const [shortenLink, setShortenLink] = useState('');
    const [copied, setCopied] = useState(false);
    // console.log(shortenLink.result.short_link3);
    const handleLink = (e) => {
        e.preventDefault();
        const link = e.target.inputLink.value;

        fetch(`https://api.shrtco.de/v2/shorten?url=${link}`, {
            method: 'POST'
        })
            .then(res => res.json())
            .then(des => setShortenLink(des))

        console.log(shortenLink);
    }
    const handleCopyLink = (e) => {

    }
    return (
        <div className='link__shortner__container container mx-auto w-full h-screen flex items-center'>
            <div className="card shadow-xl w-3/5 mx-auto rounded-none">
                <div className="card-body">
                    <h1 className='text-3xl font-semibold text-white'>Link Shortner</h1>
                    <form onSubmit={handleLink}>
                        <div className="form-control">
                            <label className="input-group my-2 rounded-none">
                                <input name='inputLink' type="text" placeholder="Enter Your Link" className="link_input input input-bordered text-white w-full" />
                                <button className='btn btn-primary'>Shorten</button>
                            </label>

                        </div>
                    </form>
                    <>
                        {
                            shortenLink &&
                            (<form onSubmit={handleCopyLink}>
                                <div className="form-control">
                                    <label className="input-group my-2 rounded-none justify-center">
                                        <input type="text" placeholder="Enter Your Link" defaultValue={shortenLink.result.short_link3} className="link_output input input-bordered text-white w-1/2 " />
                                        <button className='btn btn-primary' disabled>Copy to clipboard</button>

                                    </label>
                                </div>
                            </form>)
                            
                        }
                    </>
                </div>
            </div>
        </div>
    );
};

export default Home;