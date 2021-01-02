import React from 'react';
import Row from '../Table/Row';
import './arrange.css';

class Arrange extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            thisWeekBeginning: '',
            selected: [
                {
                    id: '',
                    text: '',
                    number: 0,
                    color: '',
                    todo: [0,0,0,0,0,0,0]
                }
            ],
            unselected: [],
            initialX: 0,
            moveX: 0,
            finalX: 0
        };
    }

    componentDidMount() {
        setTimeout(() => this.createWeek(), 50);
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        if (prevProps !== this.props) {
            this.createWeek();
        }
    }

    createWeek = () => {
        let selected = [];
        let unselected = [...this.props.items];
        if (this.props.weeks[0].items !== undefined) {
            this.props.weeks[0].items.forEach(week => {
                let index = unselected.findIndex(index => index.id === week[0]);
                let item = unselected.splice(index, 1);
                item[0].todo = week[1];
                selected.push(item[0]);
            });
        }
        this.setState({
            selected: [...selected],
            unselected: [...unselected]
        });
    }

    saveWeek = (event) => {
        let storedWeeks = [];
        let week = {
            date: this.props.thisWeekBeginning,
            items: []
        };
        this.state.selected.forEach(item => {
            week.items.push([item.id, item.todo]);
        });
        week.items.push([event.target.id, [0,0,0,0,0,0,0]]);
        if (localStorage.getItem('weeks')) {
            let oldWeeks = JSON.parse(localStorage.getItem('weeks'));
            storedWeeks = oldWeeks.filter(old => old.date !== week.date);
        }
        storedWeeks.push(week);
        localStorage.setItem('weeks', JSON.stringify(storedWeeks));
        this.props.onAddItemToWeek(event.target.id);
    }

    onTouchStart = (event) => {
        event.preventDefault();
        this.setState({
            initialX: event.touches[0].clientX
        });
    }

    onTouchMove = (event) => {
        event.preventDefault();
        if (this.state.initialX === 0) return;
        this.setState({
            moveX: event.touches[0].clientX,
            finalX: this.state.initialX - this.state.moveX
        });
    }

    onTouchEnd = (event) => {
        event.preventDefault();
        if (this.state.finalX > 100 || this.state.finalX < -100) this.removeItem(event);
        this.setState({
            initialX: 0,
            moveX: 0,
            finalX: 0
        });
    }

    removeItem = (event) => {
        if (window.confirm('Really remove?')) {
            let weeks = JSON.parse(localStorage.getItem('weeks'));
            let newWeekItems = weeks[0].items.filter(keep => keep[0] !== event.currentTarget.id);
            weeks[0].items = [...newWeekItems];
            localStorage.setItem('weeks', JSON.stringify(weeks));
            this.props.onRemoveItemFromWeek(event.currentTarget.id);
        }
    }

    saveDay = (event) => {
        let weeks = JSON.parse(localStorage.getItem('weeks'));
        let wtc = weeks.findIndex(old => old.date === this.props.thisWeekBeginning);
        let itc = weeks[wtc].items.findIndex(old => old[0] === event.currentTarget.dataset.id);
        weeks[wtc].items[itc][1][event.currentTarget.dataset.day] = weeks[wtc].items[itc][1][event.currentTarget.dataset.day] > 0 ? 0 : 1;
        localStorage.setItem('weeks', JSON.stringify(weeks));
        this.props.onChangeDay(event);
    }

    render() {
        return (
            <main id='arrange'>
                <h1>
                    Arrange
                </h1>
                <section>
                    <table>
                        <thead>
                        <tr>
                            <td className='week-date left-column'>
                                {this.props.thisWeekBeginning}
                            </td>
                            <td className='week-date'>

                            </td>
                            {this.props.days.map((day, i) =>
                            <td
                                key={day + i}
                                className='day'>
                                {day}
                            </td>
                            )}
                        </tr>
                        </thead>
                        <tbody>
                        {this.state.selected.map(item =>
                            <Row
                                key={item.id}
                                id={item.id}
                                text={item.text}
                                number={item.number}
                                color={item.color}
                                todo={item.todo}
                                onChangeDay={this.saveDay}
                                onTouchStart={this.onTouchStart}
                                onTouchMove={this.onTouchMove}
                                onTouchEnd={this.onTouchEnd}
                            />
                        )}
                        </tbody>
                    </table>
                </section>
                {this.state.unselected.length > 0 &&
                    <div className='edit-box'>
                        <div className='items-list'>
                            {this.state.unselected.map(item =>
                                <button
                                    key={item.id}
                                    id={item.id}
                                    className={'items-list-item ' + item.color}
                                    onClick={this.saveWeek}>
                                    {item.text}
                                </button>
                            )}
                        </div>
                    </div>
                }
            </main>
        );
    }
}

export default Arrange;
