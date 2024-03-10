import { CheckCircle, Moon, Sun } from "lucide-react";
import React, { useEffect } from "react";
import { Navbar, NavbarBrand } from "reactstrap";
import { setDarkMode, toggleDarkMode } from "../redux/actions";
import { useDispatch, useSelector } from "react-redux";

const LoginTopBar = () => {
    const dispatch = useDispatch();
    const isDarkMode = useSelector((state) => state.isDarkMode);

    const handleToggle = () => {
        dispatch(toggleDarkMode());
    };

    useEffect(() => {
        // Check dark mode preference from local storage on component mount
        const storedDarkMode = localStorage.getItem('darkMode');
        if (storedDarkMode !== null) {
            dispatch(setDarkMode(storedDarkMode === 'true'));
        }
    }, [dispatch]);

    useEffect(() => {
        // Update local storage when dark mode state changes
        localStorage.setItem('darkMode', JSON.stringify(isDarkMode));
    }, [isDarkMode]);

    return (
        <div className={`fixed-top top ${isDarkMode ? 'dark-mode' : 'light-mode'}`}>
            <Navbar className="navbar navbar-expand-md bg-gainsboro">
                <NavbarBrand to="/" className="ms-5" ><h3 className={`${isDarkMode ? 'dark-mode' : 'light-mode'}`}><CheckCircle color="blue" size={30} />&nbsp;TaskManager</h3></NavbarBrand>
                <div className="d-flex">

                    <div className="justify-content-end">
                        <div onClick={handleToggle} style={{ cursor: 'pointer' }}>
                            {isDarkMode ? <Moon color={`${isDarkMode ? 'white' : 'black'}`} /> : <Sun color={`${isDarkMode ? 'white' : 'black'}`} />}
                        </div>

                    </div>
                    <div></div>
                </div>

            </Navbar>
        </div>
    );
};
export default LoginTopBar;
