import React from "react"

export default function Dashboard_card() {

    const data = [
        { id: 1, name: "Total Projects", total: 8 },
        { id: 2, name: "Closed", total: 2 },
        { id: 3, name: "Running", total: 3 },
        { id: 4, name: "Closure", total: 2 },
        { id: 5, name: "Cancelled", total: 3 }
    ]

    return (
        <>
            <div className="card-container">
                {
                    data.map((value) => {
                        return (
                            <>
                                <div className="dashboard-card" key={value.id}>
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