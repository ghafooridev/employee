import React, {useState} from "react"
import {Paper, Typography,Button} from "@material-ui/core"
import {styles} from "./EmployeeStyle"
import EMPLOYEE_IMAGE from "./img.png"

const EmployeeCard = function ({employee,onCompareEmployee}) {
    const {employee_name, employee_salary, employee_age} = employee
    const classes = styles()
    const [selected,setSelected]=useState(false)

    const onCompare=function (){
        setSelected(true)
        onCompareEmployee(employee)
    }

    return (
        <Paper className={classes.card}>
            <Button variant="contained" color="primary" className={classes.button} onClick={onCompare}>
                {selected?"Remove":"Compare"}
            </Button>
            <img alt="employeeImage" src={EMPLOYEE_IMAGE}/>
            <div className="title">
                <Typography variant="body1">{employee_name}</Typography>
                <Typography variant="body2" color="primary">{employee_salary}$</Typography>
            </div>
            <div className="subtitle">
                <Typography variant="caption" color="textSecondary">{employee_age}</Typography>
            </div>
        </Paper>
    );
}

export default EmployeeCard;
