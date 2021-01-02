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
            unselected: []
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
        this.props.weeks[0].items.forEach(week => {
            let index = unselected.findIndex(index => index.id === week[0]);
            let item = unselected.splice(index, 1);
            item[0].todo = week[1];
            selected.push(item[0]);
        });
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
                            <td className='day'>
                                M
                            </td>
                            <td className='day'>
                                T
                            </td>
                            <td className='day'>
                                W
                            </td>
                            <td className='day'>
                                T
                            </td>
                            <td className='day'>
                                F
                            </td>
                            <td className='day'>
                                S
                            </td>
                            <td className='day'>
                                S
                            </td>
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
