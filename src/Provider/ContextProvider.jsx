import { createContext, useEffect, useState } from 'react';

export const StateContext = createContext(null)

const ContextProvider = ({ children }) => {

    //      ----------------- Theme related state -----------------------

    const [theme, setTheme] = useState('cupcake')

    useEffect(() => {
        localStorage.setItem('theme', theme)
        const localTheme = localStorage.getItem('theme')
        document.querySelector('html').setAttribute('data-theme', localTheme)
    }, [theme])
    //      ----------------- Context Values -----------------------

    const info = {
        theme,
        setTheme,
    }

    return (
        <StateContext.Provider value={info}>
            {children}
        </StateContext.Provider>
    );
};

export default ContextProvider;