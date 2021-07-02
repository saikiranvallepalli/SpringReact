import React, { Component } from 'react';
import EmployeeService from './services/EmployeeService';

class ViewEmployeeComponent extends Component {
    constructor(props){
        super(props)

        this.state={
            empId:this.props.match.params.empId,
            employee:[]
        }
       
    }

    componentDidMount()
    {
        EmployeeService.getEmployeeById(this.state.empId).then(res => {
            let employee=res.data;
            this.setState({empName:employee.empName,empMobile:employee.empMobile});
        })
    }

    render() {
        return (
            <div>
             <div className="card col-md-6 offset-md-3">
                 <h3 className="text-center">View Employee</h3>
                 <div className="card-body">
                     <div className="row">
                         <label>Employee Name:</label>
                         <div>{this.state.empName}</div>
                     </div>
                     <div className="row">
                         <label>Employee Mobile:</label>
                         <div>{this.state.empMobile}</div>
                     </div>
                 </div>
             </div>
            </div>
        );
    }
}

export default ViewEmployeeComponent;