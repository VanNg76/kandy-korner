import React, { useEffect, useState } from "react"
import { useHistory } from "react-router-dom/cjs/react-router-dom.min"

export const CustomerList = () => {
    const [customers, addCustomer] = useState([])
    const history = useHistory()

    useEffect(
        () => {
            fetch("http://localhost:8088/customers")
                .then(res => res.json())
                .then(customerData => {
                    addCustomer(customerData)
                    })
        },
        []
    )

    return (
        <>
            {
                customers.map(customer => {
                    return <p key={`customer--${customer.id}`}>{customer.name}</p>
                })
            }
        </>
    )
}

