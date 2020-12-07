import React from 'react';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import {styles} from "./EmployeeStyle"

const compareTable = function ({compareList}) {
    const classes = styles();

    return (
        <TableContainer component={Paper}>
            <Table className={classes.table} aria-label="simple table">
                <TableHead>
                    <TableRow>
                        <TableCell>Employee Name</TableCell>
                        <TableCell>Employee Salary</TableCell>
                        <TableCell>Employee Age</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {compareList.map((employee) => (
                        <TableRow key={employee.id} hover>
                            <TableCell>{employee.employee_name}</TableCell>
                            <TableCell>{employee.employee_salary}</TableCell>
                            <TableCell>{employee.employee_age}</TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    );
}
export default compareTable