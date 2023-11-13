import React from "react";
import { Button, Form, FormGroup, Input, Label } from "reactstrap";
import axios from "axios";
import { API_URL } from "../constants";

class NewDataForm extends React.Component {
  state = {
    data1: "",
    data2: ""
  };

  componentDidMount() {
    if (this.props.data) {
      const { pk, data1, data2 } = this.props.data;
      this.setState({ pk, data1, data2 });
    }
  }

  onChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  createData = (e) => {
    const data = { "data1": this.state.data1, "data2": this.state.data2 };
    e.preventDefault();
    axios.post(API_URL, data).then(() => {
      this.props.resetState();
      this.props.toggle();
    });
    console.log("test");
  
  };
  editData = (e) => {
    e.preventDefault();
    axios.put(API_URL + this.state.pk, this.state).then(() => {
      this.props.resetState();
      this.props.toggle();
    });
    console.log("test1");
  };

  defaultIfEmpty = (value) => {
    return value === "" ? "" : value;
  };
  //ggfghfdytfd

  render() {
    return (
      <Form onSubmit={this.props.data ? this.editData : this.createData}>
        <FormGroup>
        <Label for="data1">Data 1:</Label>
  <Input
    type="text"
    name="data1"
    onChange={this.onChange}
    value={this.defaultIfEmpty(this.state.data1)}
  />
        </FormGroup>
        <FormGroup>
        <Label for="data2">Data 2:</Label>
  <Input
    type="text"
    name="data2"
    onChange={this.onChange}
    value={this.defaultIfEmpty(this.state.data2)}
  />
        </FormGroup>
        <Button>Send</Button>
      </Form>
    );
  }
}

export default NewDataForm;