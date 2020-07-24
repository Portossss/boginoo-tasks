import React, { useEffect } from 'react';
import { createContext, useState} from 'react';
import { useFirebase } from '../firebase';

export const Context = createContext ({
    user: null,
    url: '',
    shortenedurl: '',
    logged: false
});

export const Provider = ({children}) => {
    const { auth } = useFirebase();
    const [user, setUser] = useState(null);
    const [url, setUrl] = useState('');
    const [shortenedurl, setShortenedurl] = useState('');
    const [logged, setLogged] = useState(false);
    console.log('aa')


    auth.onAuthStateChanged((user) => {
        setUser(user);
        console.log('context ', user)
      });

    return (
        <Context.Provider value={{user, url, shortenedurl}}>
            {children}
        </Context.Provider>
    )
}