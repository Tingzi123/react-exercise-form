import React, {Component} from 'react';
import './myProfile.less';

class MyProfile extends Component {
  state = {
    name: "",
    gender: "",
    description:""
  };

  handleFieldChange = (field, e) => {
    this.setState({
      [field]:e.target.value
    })
  };

  handleFormSubmit = (e) => {
    e.preventDefault(e);
    console.log(JSON.stringify(this.state));
  };


  render() {
    return (
      <div className="container">
        <h1>My MyProfile</h1>
        <form className="my-profile" onSubmit={this.handleFormSubmit}>
          <div className="form-group">
            <label htmlFor="name">name</label>
            <input
              type="text"
              className="form-control"
              id="name"
              value={this.state.name}
              onChange={(e)=>this.handleFieldChange("name",e)}
            ></input>
          </div>

          <div className="form-group">
            <label htmlFor="Gender">Gender</label>
            <select className="form-control" 
            id="gender"
            value={this.state.gender}
            onChange={(e)=>this.handleFieldChange("gender",e)}
            >
                <option>Male</option>
                <option>Female</option>
            </select>
          </div>

          <div className="form-group">
                <label htmlFor="Description">Description</label>
                <textarea className="form-control" aria-label="With textarea" 
                id="description"
                value={this.state.description}
                onChange={(e)=>this.handleFieldChange("description",e)}>Description about yourself</textarea>  
          </div>
          <input type="submit" 
          value="Submit" 
          disabled={!this.state.name || !this.state.gender || !this.state.description}
          className="btn btn-primary" />
        </form>
      </div>
    );
  }
}
export default MyProfile;