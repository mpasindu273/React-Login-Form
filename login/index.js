import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

class NameForm extends React.Component {
  constructor(props) {
    super(props); 
    this.state = {
		          username: '',
	              password: ''
	             };

    this.handleChange = this.handleChange.bind(this);	
    this.login = this.login.bind(this);
  }

  handleChange(event) {
    this.setState({ [event.target.name]: event.target.value });
  }
  
  login(event) {
    if(this.state.username==="pasindu" && this.state.password==="p"){
	  alert("Login Successful!");
    }
    else{
	  alert("Login Failed!");  
    }
     event.preventDefault();
  }
  
  render() {
    return (
	  <div className="container">
	  <form onSubmit={this.login}>	
	    <div className="title">Login</div> 
		<div className="input-box">
          Username:<input type="text" name="username" value={this.state.uname} onChange={this.handleChange} />
		  Password:<input type="password" name="password" value={this.state.value} onChange={this.handleChange} />
        </div>	
        <div className="btns">		
		  <input type="reset" value="Clear" />
		  <input type="submit" value="Submit" />	
        </div>		  
        </form>
	  </div>
    );
  }
}
ReactDOM.render(<NameForm/>, document.getElementById('root'));