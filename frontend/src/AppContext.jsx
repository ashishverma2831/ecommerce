import { enqueueSnackbar } from 'notistack';
import { createContext, useContext, useEffect, useLayoutEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

const AppContext = createContext();

export const AppProvider = ({ children }) => {

    const navigate = useNavigate();
    const [token, setToken] = useState(
        localStorage.getItem('token') || null
    );
    
    const [currentUser, setCurrentUser] = useState(null);
    const [isLoggedIn, setIsLoggedIn] = useState(token !== null);
    const [isAdmin, setIsAdmin] = useState(false);
    

    useEffect(() => {
        getUserByToken();        
    }, []);

    const getUserByToken = async () => {
        try {
            const token = localStorage.getItem('token');
            const response = await fetch('http://localhost:3000/api/users/user-info', {
                method: 'GET',
                headers: {
                    'Authorization': token
                }
            });
            const data = await response.json();
            // console.log(data);
            if (data.msg) {
                setIsLoggedIn(false);
                setIsAdmin(false);
                setCurrentUser(null);
                return;
            }
            setCurrentUser(data);
            setIsLoggedIn(true);
            if (data.role === 1) {
                setIsAdmin(true);
            }
        } catch (error) {
            console.log(error);
        }
    }

    const logout = async () => {
        await fetch('http://localhost:3000/api/users/logout', {
            method: 'GET'
        });
        localStorage.clear();
        setIsAdmin(false);
        setIsLoggedIn(false);
        setCurrentUser(null);
        setToken(null);
        enqueueSnackbar('Logged out', { variant: 'success' });
        navigate('/');
    }

    return <AppContext.Provider value={{token,getUserByToken, currentUser, setCurrentUser, isLoggedIn, setIsLoggedIn, isAdmin, setIsAdmin, logout }}>
        {children}
    </AppContext.Provider>
}

const useAppContext = () => useContext(AppContext);
export default useAppContext;