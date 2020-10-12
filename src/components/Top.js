import React, { Component } from 'react'
import '../components/App.scss'
import 'bootstrap/dist/css/bootstrap.css'
import { Link } from 'react-router-dom'

class Top extends Component {
   render() {
      return (
            
               <div className="header row m-auto align-items-center">
                  <div className="col-4"><img className="header-img img-fluid" src={require("./Logo original RGB.svg")}></img></div>
                  <div className="col-8">
                     <ul className="nav justify-content-end">
                        <li className="nav-item">
                           <Link to="/" className="nav-link">Home</Link>
                        </li>
                        <li className="nav-item">
                           <Link to="/About" className="nav-link">About us</Link>
                        </li>
                     </ul>
                  </div>
               </div>
               
      )
   }
}

export default Top