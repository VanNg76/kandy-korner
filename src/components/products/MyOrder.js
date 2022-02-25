import React, { useEffect, useState } from "react"
import { getAllCategories } from "../ApiManager"

export const MyOrder = () => {
    const [purchases, addPurchases] = useState([])
    const [categories, addCategories] = useState([])

    useEffect(
        () => {
            getAllCategories()
                .then(cat => {
                    addCategories(cat)
                })
                .then(
                    () => {
                        return fetch("http://localhost:8088/purchases?_expand=product")
                    }
                )
                .then(res => res.json())
                .then(purchase => {
                    addPurchases(purchase)
                })
        },
        []
    )

    return (
        <>
            {
                purchases.map(purchase => {
                    const findCategory = categories.find(cat => cat.id === purchase.product.categoryId)
                    return <p key={`purchase--${purchase.id}`}>{purchase.product.name} ({findCategory.name}): ${purchase.product.price} </p>
                })
            }
        </>
    )
}

