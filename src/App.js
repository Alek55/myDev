import React, {Component} from 'react';
import Menu from "./screen/Menu";
import Home from "./screen/Home";
import './App.css';

class App extends Component {

  constructor(props) {
    super(props)
  }

  render() {
    return (
        <main>
          <Menu className={false} />
          <div id="content">
              <Home />
          </div>
        </main>
    )
  }
}

export default App;
