import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Items from './components/Items';
import Arrange from './components/Arrange';
import Header from './components/Header';
import Nav from './components/Nav';
import sortColor from "./functions/sortColor";
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
          lastWeekBeginning: this.getWeekBeginning(-7),
          thisWeekBeginning: this.getWeekBeginning(),
          nextWeekBeginning: this.getWeekBeginning(7),
          colors: ['color0', 'color1', 'color2', 'color3', 'color4', 'color5', 'color6', 'color7', 'color8', 'color9'],
          days: ['M','T','W','T','F','S','S']
      }
      this.sortColor = sortColor.bind(this);
  }

  componentDidMount() {
      this.getItems();
      this.getWeeks();
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
          const items = JSON.parse(localStorage.getItem('items'));
          sortColor(items);
          this.setState({
              items: [...items]
          });
      }
  }

  getWeeks = () => {
      if (localStorage.getItem('weeks')) {
          const weeks = JSON.parse(localStorage.getItem('weeks'));
          this.setState({
              weeks: [...weeks]
          });
      }
  }

  getWeekBeginning = (addWeek = 0) => {
      let newDate = new Date();
      let day = newDate.getDay();
      function padZero(n){ return n < 10 ? '0' + n : n}
      if (day > 1) {
          newDate.setDate(newDate.getDate() - day + 1 + addWeek);
      } else if (day === 0) {
          newDate.setDate(newDate.getDate() - 6 + addWeek);
      } else {
          newDate.setDate(newDate.getDate() + addWeek);
      }
      return newDate.getFullYear() + '/' + padZero(newDate.getMonth() + 1) + '/' + padZero(newDate.getDate());
  }

  addItemToWeek = (id, week) => {
      let weeks = [...this.state.weeks];
      let currentWeek = weeks.find(needle => needle.date === week);
      if (currentWeek === undefined) {
          let newWeek = {
              date: week,
              items: [[id, [0,0,0,0,0,0,0]]]
          }
          weeks.push(newWeek);
      } else {
          currentWeek.items.push([id, [0,0,0,0,0,0,0]]);
      }
      localStorage.setItem('weeks', JSON.stringify(weeks));
      this.setState({
          weeks: [...weeks]
      });
  }

  removeItemFromWeek = (id, week) => {
      let weeks = [...this.state.weeks];
      let currentWeek = weeks.find(needle => needle.date === week);
      let newWeekItems = currentWeek.items.filter(needle => needle[0] !== id);
      currentWeek.items = [...newWeekItems];
      localStorage.setItem('weeks', JSON.stringify(weeks));
      this.setState({
          weeks: [...weeks]
      });
  }

  changeDayInState = (event, week) => {
      let weeks = [...this.state.weeks];
      let currentWeek = weeks.find(needle => needle.date === week);
      let item = currentWeek.items.find(item => item[0] === event.currentTarget.id);
      let day = event.currentTarget.dataset.day;
      item[1][day] = (item[1][day] > 0 ? 0 : 1);
      localStorage.setItem('weeks', JSON.stringify(weeks));
      this.setState({
          weeks: [...weeks]
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
                  <Route path='/Arrange'>
                      <Arrange
                          scida={this.state}
                          onChangeDay={this.changeDayInState}
                          onAddItemToWeek={this.addItemToWeek}
                          onRemoveItemFromWeek={this.removeItemFromWeek}
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
