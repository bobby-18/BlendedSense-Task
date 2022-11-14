import React from "react";
const defaultState = {

  email: "",
  password: "",
  emailError: "",
  passwordError: "",
};
class FormValidationComponent extends React.Component {
  constructor() {
    super();
    this.state = defaultState;
    this.handleInputChange = this.handleInputChange.bind(this);
  }
  handleInputChange(event) {
    const target = event.target;
    var value = target.value;
    const name = target.name;
    this.setState({
      [name]: value,
    });
  }
  validate() {
 
    let emailError = "";
    let passwordError = "";
 
    const mail= /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if (!this.state.email || mail.test(this.state.email) === false) {
      emailError = "please provide a valid email address ";
    }
    if (!this.state.password) {
      passwordError = "Password field is required";
    }
    if (emailError ||  passwordError) {
      this.setState({  emailError, passwordError });
      return false;
    }
    return true;
  }
  submit() {
    if (this.validate()) {
      this.props.onSubmit([this.state]);

      this.setState(defaultState);
    }
  }
  render() {
    return (
      <div>
        <div >
          <div >
            <br />
            <div class="form-group">
              <div style={{ width: "70%" }}>
                <input
                   class="form-control "
                  type="email"
                
                  placeholder="Email address"
                  name="email"
                  value={this.state.email}
                  onChange={this.handleInputChange}
                />
                <span className="text-danger">{this.state.emailError}</span>
              </div>
              <br />
            </div>
            <div className="form-row">
              <div className="form-group col-md-6" style={{ width: "70%" }}>
                <input
                  type="password"
                  className="form-control"
                  placeholder="password"
                  name="password"
                  value={this.state.password}
                  onChange={this.handleInputChange}
                />
                <span className="text-danger">{this.state.passwordError}</span>
              </div>
            </div>
            <div className="form-row">
              <br />
              <div className="col-md-12 text-center">
                <button
                  type="submit"
                  className="btn btn-primary"
                  onClick={() => this.submit()}
                >
                  Submit
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default FormValidationComponent;
