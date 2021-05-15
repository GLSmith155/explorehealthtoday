import React, { Component } from 'react';
import { Dropdown, Menu, Segment } from 'semantic-ui-react'
import FitnessContent from './FitnessContent';
import {
    NavLink,
    HashRouter
  } from "react-router-dom";



export default class FitnessDropdown extends Component {

  state = { activeItem: 'home' }

  handleItemClick = (e, { name }) => this.setState({ activeItem: name })


  render() {
    const { activeItem } = this.state

    return (
  <h1>
  <h2 className="center">
  <Menu horizontal>
    <Dropdown text='Upperbody' pointing='down' className='link item'>
<Dropdown.Menu>

        <Dropdown.Item>Benchpress</Dropdown.Item>

        <NavLink to="/fitness/curls">
        <Dropdown.Item style={{color: "#000"}} >Curls</Dropdown.Item>
        </NavLink>

        <NavLink to="/fitness/Diamond-pushups">
        <Dropdown.Item style={{color: "#000"}}>Diamond Push-Ups</Dropdown.Item>
        </NavLink>
  
        <Dropdown.Item>Dips</Dropdown.Item>

        <Dropdown.Item>Farmer's Carry</Dropdown.Item>
        <Dropdown.Item>Kneeling One Arm Row</Dropdown.Item>
        <Dropdown.Item>Overhead Press</Dropdown.Item>
        <Dropdown.Item>Pull Ups</Dropdown.Item>
        <Dropdown.Item>Pushups</Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>

    <Dropdown text='Lowerbody' pointing='down' className='link item'>
      <Dropdown.Menu>
      <Dropdown.Item>Bulgarian Split Squats</Dropdown.Item>
      <Dropdown.Item>Deadlift</Dropdown.Item>
      <Dropdown.Item>Lunges</Dropdown.Item>
      <Dropdown.Item>Squats</Dropdown.Item>
        

      </Dropdown.Menu>
      </Dropdown>


    <Dropdown text='Core' pointing='down' className='link item'>
      <Dropdown.Menu>
        <Dropdown.Item>90-90 Crunch</Dropdown.Item>
        <Dropdown.Item>Burpees</Dropdown.Item>
        <Dropdown.Item>Starfish Crunch</Dropdown.Item>
        <Dropdown.Item>Plank</Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>
  </Menu>
  </h2>

          
  </h1>
)}}