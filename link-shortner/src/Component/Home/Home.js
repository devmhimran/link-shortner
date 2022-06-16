import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
    return (
        <div>
            home
            <Link to='/signin'>Sign In</Link>
            <Link to='/signup'>Sign Up</Link>
        </div>
    );
};

export default Home;