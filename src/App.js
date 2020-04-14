import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom';

import FactoryExample from './pages/Factory/FactoryExample';
import MainMenu from './components/MainMenu/MainMenu';

function App() {
  return (
    <Router>
      <div className="App">
        <MainMenu />
        <Switch>
          <Route path="/factory" component={FactoryExample} />
          <Route path="/" exact>
            <div>Choose something from menu above</div>
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
