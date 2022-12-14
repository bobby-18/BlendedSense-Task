import React, { Component, Fragment } from "react";
import {
  Button,
  Modal,
  ModalHeader,
  ModalBody,
  Form,
  FormGroup,
  Input,
  Label,
} from "reactstrap";
import Axios from "axios";

class CompanyModal extends Component {
  constructor(props) {
    super(props);
    this.state = {
      modal: props.initialModalState,
      id: "",
      title: "",
      address: "",
      phoneNumber: "",
      email: "",
    };
    this.toggle = this.toggle.bind(this);
  }

  componentDidMount() {
    if (this.props.company) {
      const { id, title, address, phoneNumber, email } = this.props.company;
      this.setState({ id, title, address, phoneNumber, email });
    }
  }
  onChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  submitNew = (e) => {
    e.preventDefault();
    Axios.post("localhost:44394/api/companies/Create", this.state)
      .then((res) => {
        console.log(res);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  submitEdit = (e) => {
    e.preventDefault();
    Axios.put(
      `localhost:44394/api/companies/update/${this.state.id}`,
      this.state
    )
      .then((res) => {
        console.log(res);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  toggle() {
    this.setState({
      modal: !this.state.modal,
    });
  }

  render() {
    const isNew = this.props.isNew;

    let title = "Edit Company";
    let button = "";
    if (isNew) {
      title = "Add Company";

      button = (
        <Button
          color="success"
          onClick={this.toggle}
          style={{ minWidth: "200px" }}
        >
          Add Company
        </Button>
      );
    } else {
      button = (
        <Button
          className="btn-icon btn-round"
          size="sm"
          color="warning"
          onClick={this.toggle}
        >
          <i className="fa fa-edit" />
        </Button>
      );
    }

    return (
      <Fragment>
        {button}
        <Modal
          isOpen={this.state.modal}
          toggle={this.toggle}
          className={this.props.className}
        >
          <ModalHeader toggle={this.toggle}>{title}</ModalHeader>
          <ModalBody>
            <Form
              onSubmit={this.props.company ? this.submitEdit : this.submitNew}
            >
              <FormGroup>
                <Label for="name">Name:</Label>
                <Input
                  type="text"
                  name="title"
                  onChange={this.onChange}
                  value={this.state.Title === "" ? "" : this.state.Title}
                />
              </FormGroup>
              <FormGroup>
                <Label for="address">Address:</Label>
                <Input
                  type="text"
                  name="address"
                  onChange={this.onChange}
                  value={this.state.address === null ? "" : this.state.company}
                />
              </FormGroup>
              <FormGroup>
                <Label for="phoneNumber">Phone Number:</Label>
                <Input
                  type="number"
                  name="phoneNumber"
                  onChange={this.onChange}
                  value={
                    this.state.phoneNumber === null
                      ? ""
                      : this.state.phoneNumber
                  }
                />
              </FormGroup>
              <FormGroup>
                <Label for="email">Email:</Label>
                <Input
                  type="email"
                  name="email"
                  onChange={this.onChange}
                  value={this.state.email === null ? "" : this.state.email}
                />
              </FormGroup>
              <Button type="submit">Submit</Button>
            </Form>
          </ModalBody>
        </Modal>
      </Fragment>
    );
  }
}
export default CompanyModal;
