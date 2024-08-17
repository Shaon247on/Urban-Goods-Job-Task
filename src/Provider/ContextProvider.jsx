import { createContext, useEffect, useState } from 'react';

export const StateContext = createContext(null)

const ContextProvider = ({ children }) => {
    const [currentPage, setCurrentPage] = useState(1)
    const [totalPage, setTotalPage] = useState(null)

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
        currentPage, 
        setCurrentPage,
        totalPage, 
        setTotalPage
    }

    return (
        <StateContext.Provider value={info}>
            {children}
        </StateContext.Provider>
    );
};

export default ContextProvider;