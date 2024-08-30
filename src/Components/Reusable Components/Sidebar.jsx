import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";

import dashboard from "../../Images/Dashboard.svg";
import projectList from "../../Images/Project-list.svg";
import createProject from "../../Images/create-project.svg";
import activeDashboard from "../../Images/Dashboard-active.svg";
import activeProjectList from "../../Images/Project-list-active.svg";
import activeCreateProject from "../../Images/create-project-active.svg";
import logout from "../../Images/Logout.svg";

export default function Sidebar() {
    const location = useLocation();
    const [selectedLink, setSelectedLink] = useState(null);

    const links = [
        { id: 1, img: dashboard, subImg: activeDashboard, href: "/dashboard" },
        { id: 2, img: projectList, subImg: activeProjectList, href: "/dashboard/projectData" },
        { id: 3, img: createProject, subImg: activeCreateProject, href: "/dashboard/createProject" },
    ];

    useEffect(() => {
        const activeLink = links.find((page) => page.href === location.pathname);
        if (activeLink) {
            setSelectedLink(activeLink.id);
        }
    }, [location.pathname]);

    function handleClick(id) {
        setSelectedLink(id);
    }

    return (
        <>
            <div className="dashboard">
                <div className="sidebar">
                    <div className="links">
                        {links.map((value) => (
                            <div key={value.id}>
                                {selectedLink === value.id && <span className="box"></span>}
                                <Link to={value.href} onClick={() => handleClick(value.id)}>
                                    {selectedLink === value.id ? <img src={value.subImg} alt={`${value.subImg} Not Found!`} /> : <img src={value.img} alt={`${value.img} Not Found!`} />}
                                </Link>
                            </div>
                        ))}
                    </div>
                    <div className="logout">
                        <Link to="/"><img src={logout} alt="Logout" /></Link>
                    </div>
                </div>
            </div>
        </>
    );
}
