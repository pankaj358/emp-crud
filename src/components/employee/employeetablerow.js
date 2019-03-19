import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import axios from 'axios';

class EmployeeTableRow extends Component {

    constructor(props) {
        super(props);
        this.delete = this.delete.bind(this);
    }

    delete(){
        axios.delete('http://localhost:8080/emp-mgmt/employee/' + this.props.employee.id)
        .then(console.log('Deleted'))
        .catch(err => console.log(err));
        console.log(this.props)
    }

    render(){
        return(
            <tr>
                <td>
                   {this.props.employee.id} 
                </td>
                <td>
                    {this.props.employee.firstName}
                </td>
                <td>
                    {this.props.employee.lastName}
                </td>
                <td>
                    {this.props.employee.organisation}
                </td>
                <td>
                    <Link to={"/edit/"+this.props.employee.id} className="btn btn-primary">Edit</Link>
                </td>
                <td>
                    <button onClick={this.delete} className="btn btn-danger">Delete</button>
                </td>
            </tr>
        );
    }
}

export default EmployeeTableRow;