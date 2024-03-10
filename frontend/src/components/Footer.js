import React from "react";
import { useSelector } from "react-redux";

const Footer = () => {
    const isDarkMode = useSelector((state) => state.isDarkMode);

    return (
        <div>
            <hr/>
            <footer className={`footer ${isDarkMode ? 'dark-mode' : 'light-mode'}`}>
                <p>&copy; 2024 | Swapnil Sudrik | Task Management</p>
            </footer>
        </div>
    )
}

export default Footer;