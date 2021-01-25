import React from "react";
import { Button, Form, FormGroup, Input, Label } from "reactstrap";

import axios from "axios";

import { API_URL } from "../constants";

class NewPostsForm extends React.Component {
  state = {
    id: 0,
    title: "",
    text: "",
    dateAdded: "",
  };

  componentDidMount() {
    if (this.props.posts) {
      const { id, title, text, dateAdded } = this.props.posts;
      this.setState({ id, title, text, dateAdded });
    }
  }

  onChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  createPosts = e => {
    e.preventDefault();
    axios.post(API_URL, this.state).then(() => {
      this.props.resetState();
      this.props.toggle();
    });
  };

  editPosts = e => {
    e.preventDefault();
    axios.put(API_URL + this.state.id, this.state).then(() => {
      this.props.resetState();
      this.props.toggle();
    });
  };

  defaultIfEmpty = value => {
    return value === "" ? "" : value;
  };

  render() {
    return (
      <Form onSubmit={this.props.posts ? this.editPosts : this.createPosts}>
        <FormGroup>
          <Label for="title">title:</Label>
          <Input
            type="text"
            name="title"
            onChange={this.onChange}
            value={this.defaultIfEmpty(this.state.title)}
          />
        </FormGroup>
        <FormGroup>
          <Label for="text">text:</Label>
          <Input
            type="text"
            name="text"
            onChange={this.onChange}
            value={this.defaultIfEmpty(this.state.text)}
          />
        </FormGroup>
        <Button>Send</Button>
      </Form>
    );
  }
}

export default NewPostsForm;