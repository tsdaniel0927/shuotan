import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

function PrivateRoute({ children }) {

    const userAnswer = localStorage.getItem('userAnswer');
    console.log(localStorage)
    const navigate = useNavigate();

    useEffect(() => { 
        if (!userAnswer) {
            navigate('/error', { replace: true });
        }
    }, [navigate, userAnswer]);

    setTimeout(()=>{ 
        localStorage.removeItem('userAnswer')
    },10000)  // need to change the session expired time here

    return children;
}

export default PrivateRoute;

