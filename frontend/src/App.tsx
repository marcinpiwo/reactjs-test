import * as React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import Home from './components/home/Home';
import './App.css';

class App extends React.Component {
  public render() {
    return (
      <BrowserRouter>
        <div className="App">
          <Route path='/' exact strict component={Home} />
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
