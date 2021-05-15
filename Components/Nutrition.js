import React, { Component } from "react";
import SearchBar from './SearchBar';
import Api from '../api/Api';
 
class Contact extends Component {

  state = { showing: true };

  render() {
    const { showing } = this.state;
    return (
      <div>
      <Api />
    </div>
    );
  }
}
 
export default Contact;