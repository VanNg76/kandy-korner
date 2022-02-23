import React, { useEffect, useState } from "react"
import { useHistory } from "react-router-dom/cjs/react-router-dom.min"

export const EmployeeList = () => {
    const [employees, createEmployee] = useState([])
    const history = useHistory()

    useEffect(
        () => {
            fetch("http://localhost:8088/employees?_expand=location")
                .then(res => res.json())
                .then(employeeData => {
                    createEmployee(employeeData)
                    })
        },
        []
    )

    return (
        <>
            <div>
                <button onClick={() => history.push("/employees/hiring")}>Hire New Employee</button>
            </div>

            {
                employees.map(employee => {
                    return <p key={`employee--${employee.id}`}>{employee.name} is
                    working {employee.fulltime ? "fulltime" : "part-time"} at {employee.location.name}
                    . {employee.name} is {employee.manager ? "a manager" : "not a manager"}.</p>
                })
            }
        </>
    )
}

