import * as React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import Home from './components/home/Home';
import About from './components/about/About';
import BuyBoost from './components/buyBoost/BuyBoost';
import './App.css';
import Menu from './components/navmenu/Menu';

class App extends React.Component {
  public render() {
    return (
      <BrowserRouter>
        <div className="App">
        <Menu />
          <Route path='/' exact strict component={Home} />
          <Route path='/about' exact strict component={About} />
          <Route path='/buy-boost' exact strict component={BuyBoost} />
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
