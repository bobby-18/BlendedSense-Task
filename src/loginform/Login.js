import { Component } from "react";
import FormValidationComponent from "./Loginform";

class Login extends Component {
  constructor() {
    super();
    this.state = {
      formValues: "",
    };
  }

  onFormSubmit = (event) => {
    this.setState({ formValues: JSON.stringify(event) });
  };

  render() {
    return (
      <div className="App container">
        <FormValidationComponent onSubmit={this.onFormSubmit} />
      </div>
    );
  }
}
export default Login;
