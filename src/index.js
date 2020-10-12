import React from 'react'
import ReactDOM from 'react-dom';
import App from './components/App'
import About from './components/About'
import { BrowserRouter as Router, Route } from 'react-router-dom';
import {createStore} from 'redux';
import {Provider} from 'react-redux'
import allReducers from './components/reducers/reducer';


const store = createStore(allReducers);

ReactDOM.render((
  <Provider store={store}>
     <Router>
      <Route exact path="/" component={App} />
      <Route exact path="/About" component={About} />
    </Router>
  </Provider>
   

    

), document.getElementById('root'));





