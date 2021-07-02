import React, { Component } from 'react';

class welcome extends Component {
    constructor(props){
        super(props)

        this.state={
            employees:[]
        }
        this.loginEmployee=this.loginEmployee.bind(this);
        this.registerEmployee=this.registerEmployee.bind(this);
    }
    loginEmployee(){
        this.props.history.push("/employees");
    }
    registerEmployee()
    {
        this.props.history.push("/add-employee");
    }
    render() {
        return (
            <div>
            <div className='container'>
                <div className="row">
                    <div className="card col-md-6 offset-md-3 offset-md-3">
                        <h3 className="text-center">Login</h3>
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
                                
                 <button className="btn btn-success" onClick={this.loginEmployee}>Login</button>
                 <button className="btn btn-info" style={{margin:"10px"}} onClick={this.registerEmployee}>Register</button>
                
         
                            </form>
                        </div>
                    </div>
                </div>
            </div>
         </div>
        );
    }
}

export default welcome;