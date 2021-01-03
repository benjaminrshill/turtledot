import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Items from './components/Items';
import Arrange from './components/Arrange';
import Week from "./components/Week";
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
          thisWeekBeginning: '',
          nextWeekBeginning: '',
          colors: ['color0', 'color1', 'color2', 'color3', 'color4', 'color5', 'color6', 'color7', 'color8', 'color9'],
          days: ['M','T','W','T','F','S','S']
      }
  }

  componentDidMount() {
      this.getItems();
      this.getWeeks();
      this.setState({
          thisWeekBeginning: this.getWeekBeginning(),
          nextWeekBeginning: this.getWeekBeginning(7)
      });
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
          sortColor(storedItems);
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

  getWeekBeginning = (addWeek = 0) => {
      let newDate = new Date();
      let day = newDate.getDay();
      if (day > 1) {
          newDate.setDate(newDate.getDate() - day + 1 + addWeek);
      } else if (day === 0) {
          newDate.setDate(newDate.getDate() - 6 + addWeek);
      } else {
          newDate.setDate(newDate.getDate() + addWeek);
      }
      return newDate.getFullYear() + '/' + (newDate.getMonth() + 1) + '/' + newDate.getDate();
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
      let weeks;
      if (this.state.weeks[0].items !== undefined) {
          weeks = [...this.state.weeks];
          weeks[0].items.push([id, [0,0,0,0,0,0,0]]);
      } else {
          weeks = [
              {
                  date: this.state.thisWeekBeginning,
                  items: [[id, [0,0,0,0,0,0,0]]]
              }
          ]
      }
      this.setState({
          weeks: [...weeks]
      });
  }

  removeItemFromWeek = (id) => {
      let weeks = [...this.state.weeks];
      let newWeekItems = weeks[0].items.filter(week => week[0] !== id);
      weeks[0].items = [...newWeekItems];
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
                          items={this.state.items}
                          weeks={this.state.weeks}
                          colors={this.state.colors}
                          thisWeekBeginning={this.state.thisWeekBeginning}
                          nextWeekBeginning={this.state.nextWeekBeginning}
                          days={this.state.days}
                          onChangeDay={this.changeDayInState}
                          onAddItemToWeek={this.addItemToWeek}
                          onRemoveItemFromWeek={this.removeItemFromWeek}
                          onNewItemToState={this.newItemToState}
                      />
                  </Route>
                  {/*<Route path='/'>*/}
                  {/*    <Week*/}
                  {/*        items={this.state.items}*/}
                  {/*        weeks={this.state.weeks}*/}
                  {/*        colors={this.state.colors}*/}
                  {/*        thisWeekBeginning={this.state.thisWeekBeginning}*/}
                  {/*        days={this.state.days}*/}
                  {/*        onChangeDay={this.changeDayInState}*/}
                  {/*        onAddItemToWeek={this.addItemToWeek}*/}
                  {/*        onRemoveItemFromWeek={this.removeItemFromWeek}*/}
                  {/*        onNewItemToState={this.newItemToState}*/}
                  {/*    />*/}
                  {/*</Route>*/}
              </Switch>
              <Nav />
          </Router>
      );
  }
}

export default App;
