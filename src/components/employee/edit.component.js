import React, { Component } from 'react';
import axios from 'axios';


export default class Edit extends Component {
    constructor(props){
        super(props);
        this.onChangeFirstName = this.onChangeFirstName.bind(this);
        this.onChangeLastName = this.onChangeLastName.bind(this);
        this.onChangeOrganisation = this.onChangeOrganisation.bind(this);
        this.onSubmit = this.onSubmit.bind(this);

        this.state = {
            firstName : '',
            lastName : '',
            organisation : ''
        }
    }

    componentDidMount(){
        axios.get('http://localhost:8080/emp-mgmt/employee/' + this.props.match.params.id)
        .then(response=>{
            this.setState({
               firstName : response.data.firstName,
               lastName : response.data.lastName,
               organisation : response.data.organisation
            }) 
        }).catch(function(error){
            console.error(error);
        });;
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

    onSubmit(event){
        event.preventDefault();
        const employee = {
            firstName : this.state.firstName,
            lastName : this.state.lastName,
            organisation : this.state.organisation
        };

        axios.put('http://localhost:8080/emp-mgmt/employee/' + this.props.match.params.id, employee)
        .then(response => console.log(response.data));
        this.props.history.push('/index');
    }
    
    render(){
        return (
            <div style={{marginTop : 10}}>
            <h3>Update employee</h3>
            <form onSubmit={this.onSubmit}>
              <div className="form-group">
                <label>First Name </label>
                <input
                  type="text"
                  className="form-control"
                  value={this.state.firstName}
                  onChange={this.onChangeFirstName}/>
              </div>
              <div className="form-group">
                 <label>Last Name </label>
                 <input type="text" className="form-control" value={this.state.lastName} onChange={this.onChangeLastName}/>
              </div>
              <div className="form-group">
                <label>Organisation</label>
                <input type="text" className="form-control" value={this.state.organisation} onChange={this.onChangeOrganisation}/>
              </div>
              <div className="form-group">
                <input
                  type="submit"
                  value="Update"
                  className="btn btn-primary"/>
              </div>
            </form>
            </div>
        );
    }
}
