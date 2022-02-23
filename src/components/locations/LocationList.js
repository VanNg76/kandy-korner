import React, { useEffect, useState } from "react"

export const LocationList = () => {
    const [locations, createLocations] = useState([])

    useEffect(
        () => {
            fetch("http://localhost:8088/locations")
                .then(res => res.json())
                .then(locationData => {
                    createLocations(locationData)
                    })
        },
        []
    )

    return (
        <>
            {
                locations.map(location => {
                    return <p key={`location--${location.id}`}>{location.name}</p>
                })
            }
        </>
    )
}

