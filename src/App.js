import React from 'react';
import { Redirect, BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Items from './components/Items';
import Arrange from './components/Arrange';
import Doit from "./components/Doit";
import Archive from "./components/Archive";
import Nav from './components/Nav';
import Header from './components/Header';
import Settings from './components/Settings';
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

  componentDidMount = () => {
      this.getItems();
      this.getWeeks();
  }

  componentDidUpdate = (prevProps, prevState, snapshot) => {
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
      let newDate = new Date(),
          day = newDate.getDay();
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
      let weeks = [...this.state.weeks],
          currentWeek = weeks.find(needle => needle.date === week);
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

  addAllItemsToWeek = (ids, week) => {
      let weeks = [...this.state.weeks],
          currentWeek = weeks.find(needle => needle.date === week);
      if (currentWeek === undefined) {
          let newWeek = {
              date: week,
              items: []
          }
          ids.forEach(id => newWeek.items.push([id, [0,0,0,0,0,0,0]]));
          weeks.push(newWeek);
      } else {
          ids.forEach(id => currentWeek.items.push([id, [0,0,0,0,0,0,0]]));
      }
      localStorage.setItem('weeks', JSON.stringify(weeks));
      this.setState({
          weeks: [...weeks]
      });
  }

  copyAllFromThisWeek = (week, copyWeek) => {
      let weeks = [...this.state.weeks],
          currentWeek = weeks.find(needle => needle.date === week);
      if (currentWeek === undefined) {
          let newWeek = {
              date: week,
              items: [...copyWeek]
          }
          weeks.push(newWeek);
      } else {
          currentWeek.items = [...copyWeek];
      }
      localStorage.setItem('weeks', JSON.stringify(weeks));
      this.setState({
          weeks: [...weeks]
      });
  }

  moveItemInWeek = (dragged, dropped, week) => {
      let weeks = [...this.state.weeks],
          currentWeek = weeks.find(needle => needle.date === week),
          rowToDrop = currentWeek.items.splice(dragged, 1);
      console.log(currentWeek)
      currentWeek.items.splice(dropped, 0, ...rowToDrop);
      localStorage.setItem('weeks', JSON.stringify(weeks));
      this.setState({
          weeks: [...weeks]
      });
  }

  removeItemFromWeek = (id, week) => {
      let weeks = [...this.state.weeks],
          currentWeek = weeks.find(needle => needle.date === week),
          newWeekItems = currentWeek.items.filter(needle => needle[0] !== id);
      currentWeek.items = [...newWeekItems];
      localStorage.setItem('weeks', JSON.stringify(weeks));
      this.setState({
          weeks: [...weeks]
      });
  }

  changeDay = (event, week, closed = 0) => {
      let weeks = [...this.state.weeks],
          currentWeek = weeks.find(needle => needle.date === week),
          item = currentWeek.items.find(item => item[0] === event.currentTarget.id),
          day = event.currentTarget.dataset.day;
      if (closed > 0) {
          if (item[1][day] > 0) item[1][day] = (item[1][day] === 1 ? 100 : 1);
      } else {
          item[1][day] = (item[1][day] > 0 ? 0 : 1);
      }
      localStorage.setItem('weeks', JSON.stringify(weeks));
      this.setState({
          weeks: [...weeks]
      });
  }

  clearItems = () => {
      if (window.confirm('Really delete all items? This cannot be undone!')) {
          localStorage.removeItem('items');
          this.setState({
              items: []
          });
      }
  }

  clearWeeks = () => {
      if (window.confirm('Really delete all weeks? This cannot be undone!')) {
          localStorage.removeItem('weeks');
          this.setState({
              weeks: [
                  {
                      date: '',
                      items: []
                  }
              ]
          });
      }
  }

  clearAll = () => {
      if (window.confirm('Really delete all data? This cannot be undone!')) {
          localStorage.clear();
          this.setState({
              items: [],
              weeks: [
                  {
                      date: '',
                      items: []
                  }
              ]
          });
      }
  }

  render() {
      return (
          <Router basename={process.env.PUBLIC_URL}>
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
                          onChangeDay={this.changeDay}
                          onAddItemToWeek={this.addItemToWeek}
                          onAddAllItemsToWeek={this.addAllItemsToWeek}
                          onCopyAllFromThisWeek={this.copyAllFromThisWeek}
                          onMoveItemInWeek={this.moveItemInWeek}
                          onRemoveItemFromWeek={this.removeItemFromWeek}
                      />
                  </Route>
                  <Route path='/Doit'>
                      <Doit
                          scida={this.state}
                          onChangeDay={this.changeDay}
                      />
                  </Route>
                  <Route path='/Archive'>
                      <Archive
                          scida={this.state}
                      />
                  </Route>
                  <Route path='/Settings'>
                      <Settings
                          onClearItems={this.clearItems}
                          onClearWeeks={this.clearWeeks}
                          onClearAll={this.clearAll}
                      />
                  </Route>
                  <Route path='/'>
                      <Redirect to='/Doit' />
                  </Route>
              </Switch>
              <Nav />
          </Router>
      );
  }
}

export default App;
