import React, { Component } from 'react';
import axios from 'axios';

export default class Create extends Component{

    constructor(props){
        super(props);
        
        this.onChangeFirstName = this.onChangeFirstName.bind(this);
        this.onChangeLastName = this.onChangeLastName.bind(this);
        this.onChangeOrganisation = this.onChangeOrganisation.bind(this);
        this.onChangeSubmit = this.onChangeSubmit.bind(this);

        this.state = {
            firstName : '',
            lastName  : '',
            organisation : ''
        }
    }

    onChangeFirstName(event){
        this.setState({
          firstName : event.target.value
        });
    }

    onChangeLastName(event){
        this.setState({
            lastName : event.target.value
        });
    }

    onChangeOrganisation(event){
        this.setState({
            organisation : event.target.value
        });
    }
    
    onChangeSubmit(event){
        event.preventDefault();
        console.log(`Values are ${this.state.firstName}, ${this.state.lastName}, ${this.state.organisation}`);
        
        const employee = {
          firstName : this.state.firstName,
          lastName : this.state.lastName,
          organisation : this.state.organisation
        };

        axios.post('http://localhost:8080/emp-mgmt/employee', employee)
        .then(res => console.log(res.data));

        this.setState({
          firstName : '',
          lastName  : '',
          organisation : ''
        });
    }
    
    render(){
       return (
        <div style={{marginTop : 10 }}>
          <h3>Add  employee</h3>
          <form onSubmit={this.onChangeSubmit}>
            <div className="form-group">
              <label>First Name  </label>
              <input type="text" className="form-control" value={this.state.firstName} onChange={this.onChangeFirstName}/>
            </div>
            <div className="form-group">
              <label>Last Name </label>
              <input type="text" className="form-control" value={this.state.lastName} onChange={this.onChangeLastName}/>
            </div>
            <div className="form-group">
               <label>Organisation </label>
               <input type="text" className="form-control" value={this.state.organisation} onChange={this.onChangeOrganisation}/>
            </div>
            <div className="form-group">
               <input type="submit" value="Add" className="btn btn-primary"/>
            </div>
          </form>
        </div>
       );
    }
}

