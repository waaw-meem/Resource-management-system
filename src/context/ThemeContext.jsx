import { createContext, useState } from "react";

const ThemeContext = createContext();

const ThemeProvider = ({ children }) => {

    const [darkMode, setDarkMode] = useState(false);

    const valueToShare = {
        darkMode,
        setDarkMode
    }

    return (
        <ThemeContext.Provider value={valueToShare}>
            {children}
        </ThemeContext.Provider>
    );
}

export { ThemeProvider };
export default ThemeContext;