import React, { useState } from "react";

export default function Sidebar() {
    const [selectedLink, setSelectedLink] = useState(null);

    const links = [
        { id: 1, img: "./Images/Dashboard.svg",subImg : "./Images/Dashboard-active.svg", href: "#1" },
        { id: 2, img: "./Images/Project-list.svg",subImg : "./Images/Project-list-active.svg", href: "#2" },
        { id: 3, img: "./Images/create-project.svg",subImg : "./Images/create-project-active.svg", href: "#3" },
    ];

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
                            <a href={value.href} onClick={() => handleClick(value.id)}>
                               {selectedLink === value.id ?  <img src={value.subImg} alt={`${value.subImg} Not Found!`} /> : <img src={value.img} alt={`${value.img} Not Found!`} />}
                            </a>
                        </div>
                    ))}
                </div>
                <div className="logout">
                    <a href="#logout"><img src="./Images/Logout.svg" alt="Logout" /></a>
                </div>
            </div>
        </div>
    </>
  )
}