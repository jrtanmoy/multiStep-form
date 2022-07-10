import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { chooseAdress, chooseAge, chooseEmail, chooseFirstName, chooseGender, chooseLastName, choosePassword, choosePhoneNumber } from './rootSlice';

const Submit = () => {
    const state = useSelector(state => state)

    const dispatch = useDispatch()
    const myFuntion = () => {
        dispatch(chooseFirstName(""));
        dispatch(chooseLastName(""));
        dispatch(chooseEmail(""));
        dispatch(choosePassword(""));
        dispatch(chooseAge(""));
        dispatch(chooseGender(""));
        dispatch(choosePhoneNumber(""));
        dispatch(chooseAdress(""));
    }


    return (
        <div>
            <pre className='text-center'>{JSON.stringify(state, null, 2)}</pre>

            <div>
                <Link  className='flex justify-center' to="/">
                    <button className='mt-4 btn w-full max-w-xs text-white' onClick={() => myFuntion()}>Start again</button>
                </Link>

            </div>



        </div>
    );
};

export default Submit;