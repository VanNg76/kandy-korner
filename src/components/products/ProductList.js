import React, { useEffect, useState } from "react"

export const ProductList = () => {
    const [products, createProducts] = useState([])

    useEffect(
        () => {
            fetch("http://localhost:8088/products?_expand=category")
                .then(res => res.json())
                .then(productData => {
                    createProducts(productData)
                    })
        },
        []
    )

    return (
        <>
            {
                products.map(product => {
                    return <p key={`product--${product.id}`}>{product.name} ({product.category.name}) sells at {product.price}</p>
                })
            }
        </>
    )
}

