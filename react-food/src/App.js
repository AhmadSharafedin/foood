
import React, { Component } from "react";
import axios from "axios";
import Abdalla from './component/Abdallareact/Abdulla';
// import Haya from './component/Hayareact/Haya';
import Yasmin from './component/yasminreact/Yasmin';

import {Router, Route, browserHistory} from 'react-router-dom'

export default class App extends Component {
    state = {};
  
    render() {
      return(
     <div >

        
     {/* <Router> */}
<Abdalla/>
      {/* </Router> */}
      </div>
      ); 
    }
  }
  
