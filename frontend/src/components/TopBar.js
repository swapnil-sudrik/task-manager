import { CheckCircle, Moon, MoreVertical, Sun, User } from "lucide-react";
import React, { useEffect, useState } from "react";
import { Sidebar } from 'primereact/sidebar';
import { Button, Form, Input, Navbar, NavbarBrand } from "reactstrap";
import MenuBar from "./MenuBar";
import { useDispatch, useSelector } from "react-redux";
import { setDarkMode, toggleDarkMode } from "../redux/actions";
const TopBar = () => {
    const [visible, setVisible] = useState(false);
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

    const SearchBar = () => {
        return (

            <Form className="d-flex" role="search">
                <Input
                    className="form-control me-2"
                    type="search"
                    aria-label="Search"
                    style={{ backgroundColor: `${isDarkMode ? '#2f3349' : '#fff'}`, color: `${isDarkMode ? '#fff' : 'black'}` }}
                />
                <Button className="btn" color="primary" type="submit">
                    Search
                </Button>
            </Form>
        )
    }

    const SideMenu = () => {
        return (
            <div className="flex justify-content-center" style={{ backgroundColor: `${isDarkMode ? '#2f3349' : '#fff'}`, color: `${isDarkMode ? '#fff' : 'black'}` }}>
                <Sidebar visible={visible} onHide={() => setVisible(false)} style={{ backgroundColor: `${isDarkMode ? '#2f3349' : '#fff'}`, color: `${isDarkMode ? '#fff' : 'black'}` }}>
                    <h2>TaskManager</h2>
                    <MenuBar />
                </Sidebar>
            </div>
        )
    }

    return (
        <div className={`fixed-top top ${isDarkMode ? 'dark-mode' : 'light-mode'}`}>
            <Navbar className="navbar navbar-expand-md bg-gainsboro ">
                <NavbarBrand to="/" className="ms-5" style={{ backgroundColor: `${isDarkMode ? '#2f3349' : '#fff'}`, color: `${isDarkMode ? '#fff' : 'black'}` }}
                ><h3><CheckCircle color="blue" size={30} />&nbsp;TaskManager</h3></NavbarBrand>
                <div className="d-flex">
                    <div className="me-4 d-none d-sm-none d-md-block d-lg-block justify-content-end">
                        <div onClick={handleToggle} style={{ cursor: 'pointer' }}>
                            {isDarkMode ? <Moon color={`${isDarkMode ? 'white' : 'black'}`} /> : <Sun color={`${isDarkMode ? 'white' : 'black'}`} />}
                        </div>

                    </div>
                    <div className="user-name me-5" style={{ color: `${isDarkMode ? '#fff' : 'black'}` }}>
                        <User size={21} />&nbsp;Welcome Swapnil
                    </div>
                    <div className="d-none d-sm-none d-md-block d-lg-block justify-content-end">
                        <SearchBar />
                    </div>
                    <div className="d-block d-sm-block d-md-block d-lg-none justify-content-end">
                        <MoreVertical size={20} onClick={() => setVisible(true)} />
                    </div>
                </div>

            </Navbar>
            <div className="my-2 d-block d-sm-block d-md-none d-lg-none ">
                <SearchBar />
            </div>
            <SideMenu />
        </div>
    );
};
export default TopBar;
