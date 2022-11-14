import { React, Component } from "react"; 

      const defaultState = {
        email: "",
        password: ""
      };
class Signupform extends Component {
  constructor() {
    super();
    this.state = defaultState;
    this.handleInputChange = this.handleInputChange.bind(this);
  }
  handleInputChange(event) {
    this.setState({
      [event.target.name]: event.target.value,
    });
  }
  errors(){
    let emailError = "";
    let passwordError = "";
    const reg = /^\w+([-]?\w+)*@\w+([-]?\w+)*(\.\w{2,3})+$/;
    if (!this.state.email || reg.test(this.state.email) === false) {
      emailError = "Email Field is Invalid ";
    }
    if (!this.state.password) {
      passwordError = "Please provide your password";
    }
    if (emailError || passwordError) {
      this.setState({ emailError, passwordError });
      return false;
    }
    return true;
  }
  submit() {
    if (this.errors()) {
      this.props.onSubmit([this.state]);
      this.setState(defaultState); 
    }
  }
  render() {
    return (
      <div className="formfinal">
        <div className="row">
          <div className="form-row">
            <div className="mb-3">
              <input
                type="email"
                name="email"
                placeholder="Email Address"
                value={this.state.email}
                className="email1"
                onChange={this.handleInputChange}
              />
              <p className="text-danger">{this.state.emailError}</p>
            </div>
          </div>
          <div className="form-row">
            <div className="mb-3">
              <input
                type="password"
                placeholder="password"
                name="password"
                value={this.state.password}
                onChange={this.handleInputChange}
                className="password"   
              />
              <p className="text-danger">{this.state.passwordError}</p>
            </div>
          </div> 
          <br />
          <div className="form-row">
            <div className="col-xs-4text-center">
              <button
                type="submit"
                className="btn-primary"
                onClick={() => this.submit()}
              >
                Login With Email
              </button>
            </div>
          </div>
        </div>
      </div>
    );  
  }
}
export default Signupform;
