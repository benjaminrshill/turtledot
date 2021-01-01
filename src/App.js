import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Header from './components/Header';
import Nav from './components/Nav';
import Items from './components/Items';
import Arrange from './components/Arrange';
import './app.css';

class App extends React.Component {

  constructor(props) {
      super(props);
      this.state = {
          items: [],
          colors: ['color0', 'color1', 'color2', 'color3', 'color4', 'color5', 'color6', 'color7', 'color8', 'color9']
      };
  }

  componentDidMount() {
      if (localStorage.getItem('items')) {
          const storedItems = JSON.parse(localStorage.getItem('items'));
          this.setState({
              items: [...storedItems]
          });
      }
      // setTimeout(() => console.log(this.state), 500);
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
      if (prevProps !== this.props && localStorage.getItem('items')) {
          const storedItems = JSON.parse(localStorage.getItem('items'));
          this.setState({
              items: [...storedItems]
          });
          // setTimeout(() => console.log(this.state), 500);
      }
  }

  newItemToState = (item) => {
      this.setState({
         items: [...this.state.items, item]
      });
  }

  updateState = (items) => {
      this.setState({
         items: [...items]
      });
  }

  render() {
      return (
          <Router>
              <Header />
              <Switch>
                  <Route path='/Items'>
                      <Items
                          items={this.state.items}
                          colors={this.state.colors}
                          onNewItemToState={this.newItemToState}
                          onUpdateState={this.updateState}
                      />
                  </Route>
                  <Route path='/'>
                      <Arrange
                          items={this.state.items}
                          colors={this.state.colors}
                          onNewItemToState={this.newItemToState}
                      />
                  </Route>
              </Switch>
              <Nav />
          </Router>
      );
  }
}

export default App;
