import React, { useEffect, useState } from "react"
import { useHistory } from "react-router-dom/cjs/react-router-dom.min"
import { deleteAnEmployee, getAllEmployees } from "../ApiManager"

export const EmployeeList = () => {
    const [employees, createEmployee] = useState([])
    const history = useHistory()

    useEffect(
        () => {
            getAllEmployees()
                .then(employeeData => {
                    createEmployee(employeeData)
                    })
        },
        []
    )

    const deleteEmployee = (id) => {
        deleteAnEmployee(id)

        // update new employees state
        const copy = employees.filter(employee => employee.id != id)
        createEmployee(copy)
    }

    return (
        <>
            <div>
                <button onClick={() => history.push("/employees/hiring")}>Hire New Employee</button>
            </div>

            {
                employees.map(employee => {
                    return <p key={`employee--${employee.id}`}>
                        {employee.name} is working {employee.fulltime ? "fulltime" : "part-time"} at {employee.location.name}
                        . {employee.name} is {employee.manager ? "a manager" : "not a manager"}.
                        
                        <button onClick={() => {
                            deleteEmployee(employee.id)
                        }}>Fire Employee</button>

                    </p>
                })
            }
        </>
    )
}

