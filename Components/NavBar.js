import React, { Component } from 'react';
import { Menu, Segment } from 'semantic-ui-react';
import {
    NavLink,
    HashRouter
  } from "react-router-dom";

export default class NavBar extends Component {
  state = { activeItem: 'home' }

  handleItemClick = (e, { name }) => this.setState({ activeItem: name })

  render() {
    const { activeItem } = this.state

    return (
        <h2 className="center" >
      <Segment inverted>
      <HashRouter>
        <Menu secondary>

        <NavLink to="/news">
        <Menu.Item
            name='Explore News'
            active={activeItem === 'Explore News'}
            onClick={this.handleItemClick}/></NavLink>
        
        <NavLink to="/fitness">
          <Menu.Item
            name='Explore Fitness'
            active={activeItem === 'Explore Fitness'}
            onClick={this.handleItemClick}
          /> </NavLink>

          <NavLink to="/nutrition">
          <Menu.Item
            name='Explore Nutrition'
            active={activeItem === 'Explore Nutrition'}
            onClick={this.handleItemClick}
          /> </NavLink>
        </Menu>
        
        </HashRouter>
      </Segment>
      </h2>

    )
  }
}