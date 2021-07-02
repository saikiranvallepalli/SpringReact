import React, { Component } from 'react';
import EmployeeService from './services/EmployeeService';

class UpdateEmployeeComponet extends Component {
    constructor(props){
        super(props)
        this.state={
            empId:this.props.match.params.empId,
            empName:'',
            empMobile:''  
        }
        this.changeEmpNameHandler=this.changeEmpNameHandler.bind(this);
        this.changeEmpMobileHandler=this.changeEmpMobileHandler.bind(this);
        this.updateEmployee=this.updateEmployee.bind(this);
        
       
    }
    componentDidMount(){
        EmployeeService.getEmployeeById(this.state.empId).then(res=>{
            let employee=res.data;
            this.setState({empName: employee.empName,empMobile:employee.empMobile});
        })
    }
    updateEmployee =(e) =>{
        e.preventDefault();
        let employee={empName:this.state.empName,empMobile:this.state.empMobile}
        console.log("employe==>"+JSON.stringify(employee));
        EmployeeService.updateEmployee(employee,this.state.empId).then(res =>{
            this.props.history.push('/employees');
        });
    }
    changeEmpNameHandler=(event)=>{
        this.setState({empName:event.target.value})
    }

    changeEmpMobileHandler=(event)=>{
        this.setState({empMobile:event.target.value})
    }
    cancel()
    {
        this.props.history.push("/");
    }
    render() {
        return (
            <div>
               <div className='container'>
                   <div className="row">
                       <div className="card col-md-6 offset-md-3 offset-md-3">
                           <h3 className="text-center">Update</h3>
                           <div className="card-body">
                               <form>
                                   <div className="form-group">
                                       <label>NAME</label>
                                    <input placeholder="Enter Name" name="empName" className="form-control"
                                    value={this.state.empName} onChange={this.changeEmpNameHandler}/>
                                   </div>
                                   <div className="form-group">
                                       <label>Mobile</label>
                                    <input placeholder="Enter Mobile" name="empMobile" className="form-control"
                                    value={this.state.empMobile} onChange={this.changeEmpMobileHandler}/>
                                   </div>
                                   
                    <button className="btn btn-success" onClick={this.updateEmployee}>Update</button>
                    <button className="btn btn-danger" onClick={this.cancel.bind(this)} style={{marginLeft:"10px"}}>Cancel</button>
            
                               </form>
                           </div>
                       </div>
                   </div>
               </div>
            </div>
        );
    }
}

export default UpdateEmployeeComponet;