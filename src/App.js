import React from 'react';
import './App.css';
import CountryList from './components/CountryList'
import {Provider} from 'react-redux'
import store from './redux/store'
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import SingleCountry from './pages/SingleCountry';
import NavBar from './components/NavBar';

function App() {
  return (
    <Router>
      <Provider store={store}>        
        <NavBar/>
        <div className="container">
          <Switch>
            <Route path="/" exact>
              <CountryList/>
            </Route>
            <Route path="/singleCountry" exact>
              <SingleCountry/>
            </Route>
          </Switch>
        </div>
      </Provider>
    </Router>
  );
}

export default App;
