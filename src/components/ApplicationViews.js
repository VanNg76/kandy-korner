import React from "react"
import { Route } from "react-router-dom"
import { ProductList } from "./products/ProductList"
import { LocationList } from "./locations/LocationList"
import { EmployeeList } from "./employees/EmployeeList"
import { HiringForm } from "./employees/HiringForm"
import { CustomerList } from "./customers/CustomerList"


export const ApplicationViews = () => {
    return (
        <>
            <Route path="/locations">
                <LocationList />
            </Route>

            <Route path="/products">
                <ProductList />
            </Route>

            <Route exact path="/employees">
                <EmployeeList />
            </Route>

            <Route path="/employees/hiring">
                <HiringForm />
            </Route>

            <Route path="/customers">
                <CustomerList />
            </Route>

        </>
    )
}