import React, { useState, useEffect } from "react"
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";

export const HiringForm = () => {

    const [locations, setLocation ] = useState([ ])
    const [employee, addEmployee] = useState({ });

    useEffect(
        () => {
            fetch("http://localhost:8088/locations")
                .then(res => res.json())
                .then(locationData => {
                    setLocation(locationData)
                    })
        },
        []
    )
    

    const history = useHistory()

    const saveEmployee = (event) => {

        event.preventDefault()
        
        const newEmployee = {
            name: employee.name,
            locationId: employee.locationId,
            manager: employee.manager,
            fulltime: employee.fulltime,
            hourlyRate: employee.hourlyRate
        }
        
        const fetchOption = {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(newEmployee)
        }

        return fetch("http://localhost:8088/employees", fetchOption)
            .then(() => {
                history.push("/employees")
            })
    }

    return (
        <form className="hiringForm">
            <h2 className="hiringForm__title">Hiring Employee</h2>
            <fieldset>
                <div className="form-group">
                    <label htmlFor="name">Employee Name: </label>
                    <input
                        required autoFocus
                        type="text"
                        className="form-control"
                        placeholder="Enter Fullname"
                        onChange={
                            (evt) => {
                                const copy = {...employee}
                                copy.name = evt.target.value
                                addEmployee(copy)
                            }
                        } />
                </div>
            </fieldset>

            <fieldset>
                <div className="form-group">
                    <label htmlFor="location">Choose a location: </label>
                    <select id="location" onChange={
                        (evt) => {
                            const copy = {...employee}
                            copy.locationId = parseInt(evt.target.value)
                            addEmployee(copy)
                        }
                    }>
                        <option className="form-control" value="select">Please Select</option>
                        {locations.map(location => {
                            return <option key={`location--${location.id}`} value={location.id}>{location.address}</option>
                        }

                        )}
                    </select>

                    {/* <label htmlFor="location">Location Id (1=West, 2=East, 3=North, 4=South): </label>
                    <input 
                        required autoFocus
                        type="number"
                        min={1}
                        max={4}
                        className="form-control"
                        placeholder="1-4"
                        onChange={
                            (evt) => {
                                const copy = {...employee}
                                copy.locationId = evt.target.value
                                addEmployee(copy)
                            }
                        } /> */}
                </div>
            </fieldset>

            <fieldset>
                <div className="form-group">
                    <label htmlFor="manager">Manager: </label>
                    <input type="checkbox"
                        onChange={
                            (evt) => {
                                const copy = {...employee}
                                copy.manager = evt.target.checked
                                addEmployee(copy)
                            }
                        } />
                </div>
            </fieldset>

            <fieldset>
                <div className="form-group">
                    <label htmlFor="fulltime">Fulltime: </label>
                    <input type="checkbox"
                        onChange={
                            (evt) => {
                                const copy = {...employee}
                                copy.fulltime = evt.target.checked
                                addEmployee(copy)
                            }
                        } />
                </div>
            </fieldset>

            <fieldset>
                <div className="form-group">
                    <label htmlFor="hourlyRate">Hourly Rate: </label>
                    <input 
                        required autoFocus
                        type="number"
                        className="form-control"
                        placeholder="Enter Hourly Rate"
                        onChange={
                            (evt) => {
                                const copy = {...employee}
                                copy.hourlyRate = evt.target.value
                                addEmployee(copy)
                            }
                        } />
                </div>
            </fieldset>
            
            <button className="btn btn-primary" onClick={saveEmployee}>
                Hire Employee
            </button>
        </form>
    )
}