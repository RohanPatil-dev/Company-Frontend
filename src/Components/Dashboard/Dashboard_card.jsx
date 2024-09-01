import axios from "axios"
import React,{useEffect, useState} from "react"

export default function Dashboard_card() {

    const token = localStorage.getItem("uid")

    const [userData, setUserData] = useState({closureDelay : "",totalCancelled : "",totalClosed : "",totalProjects : "",totalRunning : ""})

    console.log(userData);

    const data = [
        { id: 1, name: "Total Projects", total: userData.totalProjects },
        { id: 2, name: "Closed", total: userData.totalClosed },
        { id: 3, name: "Running", total: userData.totalRunning },
        { id: 4, name: "Closure", total: userData.closureDelay },
        { id: 5, name: "Cancelled", total: userData.totalCancelled }
    ]

    useEffect(()=>{
      showData()
    },[])

    async function showData() {

         await axios.get("http://localhost:8081/project/getData",{
            headers : {
                Authorization : `Bearer ${token}`
            }
         }).then(value =>{
            console.log(value);
            setUserData({closureDelay : value.data.closureDelay,totalCancelled : value.data.totalCancelled,totalClosed : value.data.totalClosed,totalProjects : value.data.totalProjects,totalRunning : value.data.totalRunning})
            
         })
     }

    return (
        <>
            <div className="card-container">
                {
                    data.map((value,index) => {
                        return (
                            <>
                                <div className="dashboard-card" key={index}>
                                    <p className="card-name">{value.name}</p>
                                    <p className="card-total">{value.total}</p>
                                </div>
                            </>
                        )
                    })
                }
            </div>
        </>
    )
}