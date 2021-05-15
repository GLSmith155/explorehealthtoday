import React, { Component } from "react";
import FitnessDropdown from "./FitnessDropdown";
import { Dropdown, Menu, Segment } from 'semantic-ui-react'

export default class FitnessContent extends Component {

    render() {
        return ( 
            <div className="center">
            <div className="centercolumn2">
        
        <div className="FitnessImage">
            <div className="video-responsive">
            <iframe
      width="853"
      height="480"
      src={`https://www.youtube.com/embed/ykJmrZ5v0Oo`}
      frameBorder="0"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      allowFullScreen
      title="Embedded youtube"
    />
            </div>
        </div>

            <div className="FitnessDescription">
                    <div className="header2">
           {/* }          <h1 className="header2"><a><strong>C</strong>urls</a></h1>
                    <div><br></br></div>
             <div className="FitnessDescription2">
                        <h1 className="FitnessDescription2" style={{ fontSize: '12px' }}> <i>Face palms forward.
Keeping your upper arms stable and shoulders relaxed, bend at the elbow and lift the weights so that the dumbbells approach your shoulders. Your elbows should stay tucked in close to your ribs.</i></h1>
                    </div>

            */}
                    </div>
            </div>
            
      
        </div>
        </div>
        )
    }
}

export class DiamondPushups extends Component {

    render() {
        return ( <div className="content2">DiamondPushups</div>
        )
    }
}