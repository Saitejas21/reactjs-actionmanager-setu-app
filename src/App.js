import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';
import Configured from 'components/Configured';

import './App.css';
import './fonts.css';

class App extends Component {
  render() {
    return (
      <Router hashType="noslash" basename={process.env.BASE_PATH}>
        <Switch>
          <Route exact path="/">
            <div>
              pxCode Screen List: <br />
              <Link to="/Configured">Configured</Link>
            </div>
          </Route>

          <Route exact path="/Configured" component={Configured} />
        </Switch>
      </Router>
    );
  }
}

export default App;
