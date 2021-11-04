import React, { useContext } from 'react';
import { DarkLightContext } from '../../Context/darkLightContext';
import './btnToggle.scss'

const BtnToggle = () => {
    const { toggleTheme, theme } = useContext(DarkLightContext);

    return (
        <button onClick={toggleTheme} className="btn-toggle">
            {theme ? "light" : "sombre"}
        </button>
    )
}
export default BtnToggle;