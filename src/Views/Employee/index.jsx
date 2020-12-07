import React, {useEffect, useState} from "react"
import EmployeeCard from "./EmployeeCard";
import CompareTable from "./CompareTable";
import {getEmployees} from "../../Repositories/EmployeeRepository"
import {styles} from "./EmployeeStyle";

const Employee = function () {
    const [employeeList, setEmployeeList] = useState([])
    const [compareList, setCompareList] = useState([])
    const classes = styles()

    const fetchData = async function () {
        const list = await getEmployees()
        setEmployeeList(list.data)
    }

    const onCompareEmployee = function (employee) {
        setCompareList([...compareList, employee])
    }

    useEffect(() => {
        fetchData()
    }, [])

    return (
        <div className={classes.root}>
            <div className={classes.list}>
                {employeeList.length && employeeList.map((employee, index) => {
                    return (
                        <EmployeeCard
                            key={index}
                            employee={employee}
                            onCompareEmployee={onCompareEmployee}
                        />
                    )
                })}
            </div>
            <div className={classes.table}>
                {compareList.length
                ?
                <CompareTable
                    compareList={compareList}
                />
:null
                }
            </div>
        </div>
    );
}

export default Employee;
