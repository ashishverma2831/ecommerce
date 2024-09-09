import { enqueueSnackbar } from 'notistack';
import { createContext, useContext, useEffect, useState } from 'react'; 
import { useNavigate } from 'react-router-dom';

const AppContext = createContext();

export const AppProvider = ({children}) => {

    const navigate = useNavigate();
    const [token, setToken] = useState(
        localStorage.getItem('token') || null
    );
    console.log('token:'+token);

    const [currentUser, setCurrentUser] = useState(null);
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [isAdmin, setIsAdmin] = useState(false);

    const getUser = async() => {
        const res = await fetch('http://localhost:3000/api/users/user-info', {
            method: 'GET',
            headers: {
                'Authorization': token
            },
        });
        const data = await res.json();
        setCurrentUser(data);
        setIsLoggedIn(data !== null);
        setIsAdmin(data?.role === 1);
    }

    const logout = async() => {
        const res = await fetch('http://localhost:3000/api/users/logout', {
            method: 'GET',
            headers: {
                'Authorization': token
            },
        });
        const data = await res.json();
        if(data) {
            localStorage.removeItem('token');
            setCurrentUser(null);
            setIsLoggedIn(false);
            setIsAdmin(false);
            enqueueSnackbar('Logged out Successfully', {variant: 'success'});
            navigate('/login');
        }
    }

    useEffect(() => {
        getUser();
    }, [token]);
    
    return <AppContext.Provider value={{currentUser,setCurrentUser,isLoggedIn,setIsLoggedIn,isAdmin,setIsAdmin,logout}}>
        {children}
    </AppContext.Provider>
}

const useAppContext = () => useContext(AppContext);
export default useAppContext;