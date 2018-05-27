import * as React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import Home from './components/home/Home';
import './App.css';
import Menu from './components/navmenu/Menu';

class App extends React.Component {
  public render() {
    return (
      <BrowserRouter>
    
        <div className="App">
        <Menu />
          <Route path='/' exact strict component={Home} />
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
