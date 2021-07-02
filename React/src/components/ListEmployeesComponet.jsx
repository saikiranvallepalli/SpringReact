import React, { Component } from 'react'
import EmployeeService from './services/EmployeeService'

 class ListEmployeesComponet extends Component {
     constructor(props){
         super(props)

         this.state={
             employees:[]
         }
         this.editEmployee=this.editEmployee.bind(this);
          this.deleteEmployee=this.deleteEmployee.bind(this);
          this.viewEmployee=this.viewEmployee.bind(this);
     }

     editEmployee(empId)
     {
        this.props.history.push(`/update-employee/${empId}`);
     }

     viewEmployee(empId)
     {
        this.props.history.push(`/view-employee/${empId}`);
     }

     deleteEmployee(empId){
       // e.preventDefault();
        let employee={empName:this.state.empName,empMobile:this.state.empMobile}
        console.log("employe==>"+JSON.stringify(employee));
        EmployeeService.deleteEmployee(empId).then(res =>{
        this.setState({employees:this.state.employees.filter(employee => employee.empId!==empId)});
        });
     }

     componentDidMount(){
         EmployeeService.getEmployees().then((res) => {
             this.setState({employees:res.data});

         });
     }
     
    render() {
        return (
            <div>
            <h2 className="text-center">Employees List</h2>    
                <div className="row">
                    <table className='table table-striped table-bordered'>
                        <thead>
                            <tr>
                                <th>Employee Name </th>
                                <th>Employee Mobile</th>
                                <th> Actions</th>
                            </tr>

                        </thead>

                        <tbody>
                            {
                                this.state.employees.map(

                                    employee=>
                                    <tr key={employee.empId}>
                                    <td>{employee.empName}</td>
                                    <td>{employee.empMobile}</td>
                                    <td>
     <button onClick={() => this.editEmployee(employee.empId)} className="btn btn-info">Update</button>
     <button onClick={() => this.deleteEmployee(employee.empId)} style={{marginLeft:"10px"}} className="btn btn-danger">Delete</button>
     <button onClick={() => this.viewEmployee(employee.empId)} style={{marginLeft:"10px"}} className="btn btn-info">View</button>  
                                           </td>
                                    </tr>
                                )
                            }
                        </tbody>
                    </table>
                </div>
            </div>
        )
    }
}
export default ListEmployeesComponet