import React, { useEffect, useState } from "react"
import { useHistory } from "react-router-dom/cjs/react-router-dom.min"
import { getAllProducts } from "../ApiManager"


export const ProductList = () => {
    const [products, createProducts] = useState([])

    const history = useHistory()

    useEffect(
        () => {
            getAllProducts()
                .then(productData => {
                    createProducts(productData)
                    })
        },
        []
    )

    const savePurchase = (event) => {

        event.preventDefault()
        
        const newPurchase = {
            productId: parseInt(event.target.id),
            customerId: parseInt(localStorage.getItem("kandy_customer"))
        }
        
        const fetchOption = {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(newPurchase)
        }

        return fetch("http://localhost:8088/purchases", fetchOption)
            .then(() => {
                history.push("/myOrders")
            })
    }

    return (
        <>
            {
                products.map(product => {
                    return (
                        <div key={`product--${product.id}`}>
                            <p>{product.name} ({product.category.name}) sells at {product.price}
                                <button id={product.id} onClick={ savePurchase }>Purchase</button>
                            </p>
                        </div>
                    )
                })
            }
        </>
    )
}

