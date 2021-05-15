import React, { Component } from "react";
import {
    Route,
    NavLink,
    HashRouter
  } from "react-router-dom";
  import News from "./News";
  import Fitness from "./Fitness";
  import Nutrition from "./Nutrition";
  import canieatit from '../api/canieatit';

  import NavBar from './NavBar';
  import { Menu } from 'semantic-ui-react'
  import FitnessContent, { DiamondPushups } from './FitnessContent';

class Main extends Component {

  state = { images: [] };

  onSearchSubmit = async (term) => {
      const response = await canieatit.get('/?json=search&q={q}&page={page}&apikey=l94rmkdc5fz3qrue75om', {
          params: { query: term }
      });
          
      this.setState({ text: response.data.results });
  };


  render() {
    return (
        <HashRouter>
        <div>



        <div className="header2">
          <h1 className="header2"> <a><strong>E</strong>xplore <strong>H</strong>ealth <strong>T</strong>oday</a></h1>
         
         
 
        </div>
          <NavBar />
          <div>
            <Route path="/news" component={News}/>
            <Route path="/fitness" component={Fitness}/>
            <Route path="/nutrition" component={Nutrition}/>
            <Route path="/fitness/curls" component={Fitness, FitnessContent}/>
            <Route path="/fitness/Diamond-pushups" component={Fitness, DiamondPushups}/>
          </div>
        </div>
        </HashRouter>
        
    );
  }
}
 
export default Main;