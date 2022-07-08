import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

const Submit = () => {
    const state = useSelector(state => state)
    return (
        <div>
            <pre>{JSON.stringify(state, null, 2)}</pre>
      <Link to="/">
      <input className='mt-4 btn w-full max-w-xs text-white' type="submit" value="Start again" /></Link>
        </div>
    );
};

export default Submit;