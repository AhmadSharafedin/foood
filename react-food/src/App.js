
import React, { Component } from "react";
import { BrowserRouter as Router, Route } from 'react-router-dom';
import axios from 'axios';
import Search from './component/Search'
import Nav from './component/Nav'
import About from './component/About'
import Home from './component/Home'
import Contact from './component/Contact'

//////////ahmad
import SignUp from "./component/SignUp";
import SignIn from "./component/SignIn";
///////////
//import Counter from './component/Counter'
import Input from './component/Input'
import PostItem from './component/PostItem'
import Footer from './component/Footer'

export default class App extends Component {
    state = {
      user:[],
      linkLogin: "/Input",

    };
  
    ////////////ahmad/////signup
    newuser=(firstName,lastName,phone,email,password,e)=>{
      e.preventDefault();
      axios.post(`/user/${firstName}/${lastName}/${phone}/${email}/${password}`)
      .then(response => {
        // this.setState({ user: response.data });
        alert( `sucssfuly to Creat the new acount`)
      });
   
  };

  ///////////ahmad ///login
  getlogin=(firstName,email,password)=>{
    console.log("getUser");
    console.log('firstName', firstName)
    console.log(email);
    console.log(password)
    axios.get(`/user/${firstName}/${email}/${password}`)
    .then(response => {
      this.setState({ user: response.data });
      if (this.state.user.length > 0) {
        console.log(this.state.user)
        window.location = this.state.linkLogin;
      }  
  });

};



    




    render() {
      return(
        // <>
      <Router  >

        <Nav/>

  <Route path="/" exact component={Home} />
  <Route path="/About"  component={About} />
  <Route path="/Contact"  component={Contact} />
  <Route path="/Input"  component={Search} />
  <Route path="/Input"  component={Input} />
  <Route path="/Input"  component={PostItem} />



{/* //////////////Ahmad */}
 <div className="App">
          <div className="App__Aside">
          </div>

          <div className="App__Form">
           

            <Route exact path="/" component={() => <SignUp newuser={this.newuser}/>} />
            <Route path="/sign-in" component={() => <SignIn getlogin={this.getlogin}/>}/>
          </div>
        </div>





        <Footer/>

     
     </Router>
      // </>
      ); 
    }
  }
