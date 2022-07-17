import { createContext, useContext, useEffect, useState } from "react";

const ThemeContext = createContext();

const useTheme = () => useContext(ThemeContext);

const ThemeProvider = ({children}) =>{
    const [ theme, setTheme ] = useState(
        JSON.parse(localStorage.getItem("theme-item")) ?? false
    )
    
    const themeToggle = () => {
        setTheme(prevValue => !prevValue) 
    }

    useEffect(()=>{
        localStorage.setItem("theme-item", JSON.stringify(theme))
    },[theme])

    return (
        <ThemeContext.Provider value={{theme, themeToggle}}>
            {children}
        </ThemeContext.Provider>
    )
}

export { useTheme, ThemeProvider }