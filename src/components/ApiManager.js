export const getAllCustomers = () => {
    return (
        fetch("http://localhost:8088/customers")
                .then(res => res.json())
    )
}

export const getAllCategories = () => {
    return (
        fetch("http://localhost:8088/categories")
                .then(res => res.json())
    )
}

export const getAllEmployees = () => {
    return (
        fetch("http://localhost:8088/employees?_expand=location")
                .then(res => res.json())
    )
}

export const deleteAnEmployee = (id) => {
    return (
        fetch(`http://localhost:8088/employees/${id}`, {
            method: "DELETE"
        })
    )
}

export const getAllProducts = () => {
    return (
        fetch("http://localhost:8088/products?_expand=category&_sort=categoryId")
                .then(res => res.json())
    )
}

export const getAllLocations = () => {
    return (
        fetch("http://localhost:8088/locations")
                .then(res => res.json())
    )
}

export const getAllPurchases = () => {
    return (
        fetch("http://localhost:8088/purchases?_expand=product&_expand=customer")
            .then(res => res.json())
    )
}

export const countCustomerPurchase = () => {
    return (
        fetch("http://localhost:8088/customers?_embed=purchases")
            .then(res => res.json())
    )
}

