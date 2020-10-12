import React, { Component, Fragment } from 'react'
import '../components/App.scss'
import 'bootstrap/dist/css/bootstrap.css'
import Media from 'react-media'
import Calendar from './Calendar';
import Top from './Top';

class App extends Component {
   render() {
      return (
         <div className="container-fluid">
            <Top />
            <Media queries={{
               small: "(max-width: 768px)",
               medium: "(min-width: 769px)"
            }}>
               {matches => (
                  <Fragment>
                     {matches.small &&
                        <div className="main row">
                           <div className="col-12">
                              <img className="img-fluid" src={require("./Untitled-1Artboard 1 copy.jpg")}></img>
                              <div className="card-img-overlay ml-0">
                                 <h3 className="card-title">Choose the day<br /> for the meeting</h3>
                                 <p className="card-text">We encourage you to book your<br></br> appointment online.<br></br> This will save you time.</p>
                              </div>
                           </div>

                           <div className="row pt-3 pb-3 m-auto">
                              <Calendar />
                           </div>
                        </div>
                     }
                     {matches.medium &&
                        <div className="main row">
                           <div className="col-8">
                              <img className="img-fluid" src={require("./Untitled-1Artboard 1 copy.jpg")}></img>
                              <div className="card-img-overlay ml-0">
                                 <h3 className="card-title">Choose the day<br /> for the meeting</h3>
                                 <p className="card-text">We encourage you to book your<br></br> appointment online.<br></br> This will save you time.</p>
                              </div>
                           </div>

                           <div className="col-4 m-auto">
                              <Calendar />
                           </div>
                        </div>
                     }
                  </Fragment>
               )}
            </Media>

         </div>



      );
   }
}

export default App