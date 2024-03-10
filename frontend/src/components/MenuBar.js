import {  FileCheck2, FilePlus2, FileX2, Home, ListTodo, LogOut, ScanEye, Settings, UnlockKeyhole, UserX } from "lucide-react";
import { OverlayPanel } from "primereact/overlaypanel";
import React, { useRef } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const MenuBar = () => {
    const op = useRef(null);
    const isDarkMode = useSelector((state) => state.isDarkMode);

    return (
        <div className="menu-container" >
            <Link to="/user/home" className="menu-link" style={{color: `${isDarkMode ? '#fff' : 'black'}` }}><Home size={20} />&nbsp;&nbsp;Home</Link>
            {/* <div className="menu-item"> */}
                <Link to="/user/add-task" className="menu-link" style={{color: `${isDarkMode ? '#fff' : 'black'}` }}><FilePlus2  size={20} />&nbsp;&nbsp;Add Task</Link>
            {/* </div> */}

            {/* <div className="menu-item"> */}
                <Link to="/user/view-tasks" className="menu-link" style={{color: `${isDarkMode ? '#fff' : 'black'}` }}><ScanEye size={20} />&nbsp;&nbsp;View Tasks</Link>
            {/* </div> */}

            {/* <div className="menu-item"> */}
                <Link to="/user/pending-tasks" className="menu-link" style={{color: `${isDarkMode ? '#fff' : 'black'}` }}><ListTodo size={20} />&nbsp;&nbsp;Pending Tasks</Link>
            {/* </div> */}

            {/* <div className="menu-item"> */}
                <Link to="/user/deleted-tasks" className="menu-link" style={{ color: `${isDarkMode ? '#fff' : 'black'}` }}><FileX2 size={20} />&nbsp;&nbsp;Deleted Tasks</Link>
            {/* </div> */}

            {/* <div className="menu-item"> */}
                <Link to="/user/complated-tasks" className="menu-link" style={{color: `${isDarkMode ? '#fff' : 'black'}` }}><FileCheck2 size={20} />&nbsp;&nbsp;Complated Tasks</Link>
            {/* </div> */}

            <div className="bottom-icon-container">
                <hr />
                {/* <div className="bottom-icon" > */}
                    <Link className="menu-link" onClick={(e) => op.current.toggle(e)} style={{ color: `${isDarkMode ? '#fff' : 'black'}` }}><Settings size={20} />&nbsp;&nbsp;Setting</Link>
                {/* </div> */}

            </div>



            <OverlayPanel ref={op} style={{width: '350px', backgroundColor: `${isDarkMode ? '#2f3349' : '#fff'}`, color: `${isDarkMode ? '#fff' : 'black'}` }}>
                <div className="menu-container" >
                    {/* <div className="menu-item"> */}
                        <Link to="/user/change-password" className="menu-link" style={{ color: `${isDarkMode ? '#fff' : 'black'}` }}><UnlockKeyhole size={20} />&nbsp;&nbsp;Change Password</Link>
                    {/* </div> */}

                    {/* <div className="menu-item"> */}
                        <Link  className="menu-link" style={{ color: `${isDarkMode ? '#fff' : 'black'}` }}><LogOut size={20} />&nbsp;&nbsp;Log Out</Link>
                    {/* </div> */}

                    {/* <div className="menu-item"> */}
                        <Link  className="menu-link" style={{ color: `${isDarkMode ? '#fff' : 'black'}` }}><UserX size={20} />&nbsp;&nbsp;Delete Account</Link>
                    {/* </div> */}
                </div>

            </OverlayPanel>
        </div>
    )
}

export default MenuBar;