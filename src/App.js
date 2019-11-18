import React from 'react';
import './App.css';
import Home from './pages/Home'
import Gallery from './pages/Gallery'
import SingleHousePage from './pages/SingleHousePage'
import Error from './component/Error'
import { Route, Switch } from 'react-router-dom'
function App() {
  return (
    <div>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/Gallery" component={Gallery} />
        <Route exact path="/property/:slug" component={SingleHousePage} />
        <Route component={Error} />
      </Switch>
    </div>
  );
}

export default App;
