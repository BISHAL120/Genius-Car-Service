import React from 'react';
import google from '../../../../images/Social/google.png';
import facebook from '../../../../images/Social/facebook.png';
import github from '../../../../images/Social/github.png';
import { useAuthState, useSignInWithFacebook, useSignInWithGithub, useSignInWithGoogle } from 'react-firebase-hooks/auth';
import auth from '../../../Shared/firebase.init';
import { useNavigate } from 'react-router-dom';

const SocialLogin = () => {

    const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);
    const [signInWithFacebook, user1, loading1, error1] = useSignInWithFacebook(auth);
    const [signInWithGithub, user2, loading2, error2] = useSignInWithGithub(auth);
    // const [user] = useAuthState(auth);
    let errorelement;
    const navigate = useNavigate();

    if (error || error1 || error2) {
        errorelement = <div>
            <p className='text-danger'>Error: {error?.message} {error1?.message} {error2?.message}</p>
        </div>;
    }

    if (user || user1 || user2) {
        navigate('/');
    }

    const handlegooglesingin = () => {
        signInWithGoogle();

    }

    const handlefacebooksingin = () => {
        signInWithFacebook();
}

const handlegithubsingin = () => {
    signInWithGithub();
}

return (
    <div>
        <div className='d-flex align-items-center'>
            <div style={{ height: '1.7px', background: 'rgb(127, 127, 127, 0.5)' }} className='w-50 '></div>
            <div className='mt-2 px-3'><p>or</p></div>
            <div style={{ height: '1.7px', background: 'rgb(127, 127, 127, 0.5)' }} className='w-50 '></div>
        </div>
        {errorelement}
        <div className='d-flex justify-content-center mt-3'>
            <button onClick={handlegooglesingin} className='btn btn-primary w-50 aline-center d-flex aling-items-center justify-content-center'>
                <img className='mx-3' style={{ width: '25px', height: '25px' }} src={google} alt="" />
                Google Sing In
            </button>
        </div>
        <div className='d-flex justify-content-center mt-3'>
            <button onClick={handlefacebooksingin} className='btn btn-primary w-50 aline-center d-flex aling-items-center justify-content-center'>
                <img className='mx-3' style={{ width: '25px', height: '25px' }} src={facebook} alt="" />
                Facebook Sing In
            </button>
        </div>
        <div className='d-flex justify-content-center mt-3'>
            <button onClick={handlegithubsingin} className='btn btn-primary w-50 aline-center d-flex aling-items-center justify-content-center'>
                <img className='mx-3' style={{ width: '30px', height: '30px' }} src={github} alt="" />
                Github Sing In
            </button>
        </div>
    </div>
);
};

export default SocialLogin;