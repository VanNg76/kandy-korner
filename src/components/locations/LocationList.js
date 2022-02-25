import React, { useEffect, useState } from "react"
import { getAllLocations } from "../ApiManager"

export const LocationList = () => {
    const [locations, createLocations] = useState([])

    useEffect(
        () => {
            getAllLocations()
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

