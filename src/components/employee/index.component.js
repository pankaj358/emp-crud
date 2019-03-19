import React, { Component } from 'react';
import axios from 'axios';
import EmployeeTableRow from './employeetablerow';
import { Link } from 'react-router-dom';

export default class Index extends Component{

    constructor(props){
     super(props);
     this.state = {employees: []};
    }

    componentDidMount(){
      axios.get('http://localhost:8080/emp-mgmt/employee')
      .then(response =>{
          console.log(response)
          this.setState({employees : response.data});
      })
      .catch(function(error){
          console.error(error);
      })
    }

    tabRow(){
        return this.state.employees.map(function(employee, index){
            return <EmployeeTableRow employee={employee} key={index}/>;
        });
    }


    render(){
        return(
            <div>
               <h3 align="center">Employee List</h3>
               <div style={{marginTop : 10}}>
                 <Link to={"/create"} className="link"> +Add New Employee</Link>
               </div>
               <table className="table table-striped" style={{marginTop : 20}}>
                 <thead>
                     <tr>
                         <th>Employee Id </th>
                         <th>First Name</th>
                         <th>Last Name</th>
                         <th>Organisation</th>
                         <th colSpan="2">Action</th>
                     </tr>
                 </thead>
                 <tbody>
                  { this.tabRow() }
                 </tbody>
               </table>
            </div>
        );
    }
}