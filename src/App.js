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
          weeks: [
              {
                  date: '2020/12/28',
                  items: [
                      ['9b7ef609-bd19-4bac-9e10-9ffaadcdf80f', [0,0,1,0,0,1,0]],
                      ['ab2f37b0-c271-4f09-b667-7d19609182aa', [0,1,0,0,1,0,0]],
                      ['9693fe04-48a9-46a9-adb5-7f4c992a23c9', [0,1,1,1,1,1,0]]
                  ]
              }
          ],
          colors: ['color0', 'color1', 'color2', 'color3', 'color4', 'color5', 'color6', 'color7', 'color8', 'color9']
      }
  }

  componentDidMount() {
      this.getItems();
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
      if (prevProps !== this.props) {
          this.getItems();
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

  getItems = () => {
      if (localStorage.getItem('items')) {
          const storedItems = JSON.parse(localStorage.getItem('items'));
          this.setState({
              items: [...storedItems]
          });
      }
  }

  changeDay = (event) => {
      let newDay = [...this.state.weeks];
      let id = newDay[0].items.findIndex(item => item[0] === event.currentTarget.dataset.id);
      let day = event.currentTarget.dataset.day;
      newDay[0].items[id][1][day] = (newDay[0].items[id][1][day] > 0 ? 0 : 1);
      this.setState({
          weeks: [...newDay]
      });
  }

  addItemToWeek = (event) => {
      let newWeekItems = [...this.state.weeks];
      newWeekItems[0].items.push([event.target.id, [0,0,0,0,0,0,0]]);
      this.setState({
          weeks: newWeekItems
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
                          weeks={this.state.weeks}
                          colors={this.state.colors}
                          onChangeDay={this.changeDay}
                          onAddItemToWeek={this.addItemToWeek}
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
