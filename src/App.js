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
                  date: '',
                  items: []
              }
          ],
          thisWeekBeginning: '',
          colors: ['color0', 'color1', 'color2', 'color3', 'color4', 'color5', 'color6', 'color7', 'color8', 'color9']
      }
  }

  componentDidMount() {
      this.getItems();
      this.getWeeks();
      this.getThisWeekBeginning();
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
      if (prevProps !== this.props) {
          this.getItems();
          this.getWeeks();
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

  getWeeks = () => {
      if (localStorage.getItem('weeks')) {
          const storedWeeks = JSON.parse(localStorage.getItem('weeks'));
          this.setState({
              weeks: [...storedWeeks]
          });
      }
  }

  getThisWeekBeginning = () => {
      let newDate = new Date();
      let day = newDate.getDay();
      if (day > 1) {
          newDate.setDate(newDate.getDate() - day + 1);
      } else if (day === 0) {
          newDate.setDate(newDate.getDate() - 7);
      }
      let week = newDate.getFullYear() + '/' + (newDate.getMonth() + 1) + '/' + newDate.getDate();
      this.setState({
          thisWeekBeginning: week
      });
  }

  changeDayInState = (event) => {
      let newDay = [...this.state.weeks];
      let id = newDay[0].items.findIndex(item => item[0] === event.currentTarget.dataset.id);
      let day = event.currentTarget.dataset.day;
      newDay[0].items[id][1][day] = (newDay[0].items[id][1][day] > 0 ? 0 : 1);
      this.setState({
          weeks: [...newDay]
      });
  }

  addItemToWeek = (id) => {
      let newWeekItems = [...this.state.weeks];
      newWeekItems[0].items.push([id, [0,0,0,0,0,0,0]]);
      this.setState({
          weeks: [...newWeekItems]
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
                          thisWeekBeginning={this.state.thisWeekBeginning}
                          onChangeDay={this.changeDayInState}
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
