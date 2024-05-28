// src/hooks/useCustomNavigate.js
import {useNavigate} from 'react-router-dom';

const useCustomNavigate = () => {
    const navigate = useNavigate();

    const goBack = () => {
        // Potentially add logging here
        // console.log('Navigating back');
        navigate(-1);
    };

    const goToHomePage = () => {
        // Potentially add logging here
        console.log('Navigating to home');
        navigate('/');
    };

    return {goBack, goToHomePage};
};

export default useCustomNavigate;
