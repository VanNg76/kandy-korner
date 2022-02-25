import React, { useEffect, useState } from "react"
import { countCustomerPurchase } from "../ApiManager"


export const CustomerList = () => {
    const [customers, addCustomer] = useState([])

    useEffect(
        () => {
            countCustomerPurchase()
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
                    return <p key={`customer--${customer.id}`}>{customer.name} bought {customer.purchases.length} {" "}
                    {customer.purchases.length === 0 || customer.purchases.length === 1 ? "candy" : "candies"}</p>
                })
            }
        </>
    )
}

