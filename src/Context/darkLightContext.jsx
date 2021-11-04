import React, { createContext, useState } from "react";
import './darkLightContext.scss';

export const DarkLightContext = createContext();

const DarkLightContextProvider = (props) => {
    const valueLocal = JSON.parse(localStorage.getItem('theme'))
    let bol;
    if (valueLocal === true) {
        bol = false
    }
    else if (valueLocal === null) {
        localStorage.setItem("theme", true)
    } else if (valueLocal === false) {
        bol = true
    }

    const [theme, setTheme] = useState(bol);

    const toggleTheme = () => {
        localStorage.setItem("theme", bol)
        setTheme(!theme);
    }

    return (
        <DarkLightContext.Provider value={{ theme, toggleTheme }}>
            <div className={theme ? "light" : "dark"}>
                {props.children}
            </div>
        </DarkLightContext.Provider>
    )
}

export default DarkLightContextProvider;