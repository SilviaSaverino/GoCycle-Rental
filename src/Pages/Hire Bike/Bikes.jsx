import React from "react"

export default function RentBikes() {
   
    
    React.useEffect(() => {
        fetch("/api/bicycles")
        .then(res=> res.json())
        .then(data => console.log(data))
    }, [])



    return (
        <h1>Rent a Bike page</h1>
    )
}