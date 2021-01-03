import React from 'react';
import Row from '../Table/Row';
import sortColor from "../../functions/sortColor";
import '../Arrange/arrange.css';

class Week extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            thisWeekBeginning: '',
            thisWeek: [
                {
                    id: '',
                    text: '',
                    number: 0,
                    color: '',
                    todo: [0,0,0,0,0,0,0]
                }
            ],
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
        let week = [];
        if (this.props.weeks[0].items !== undefined) {
            this.props.weeks[0].items.forEach(week => {
                if (this.props.items.find(item => item.id === week[0])) {
                    let index = this.props.items.findIndex(index => index.id === week[0]);
                    let item = this.props.items.splice(index, 1);
                    item[0].todo = week[1];
                    week.push(item[0]);
                }
            });
        }
        sortColor(week);
        this.setState({
            week: [...week]
        });
    }

    // saveWeek = (event) => {
    //     let storedWeeks = [];
    //     let week = {
    //         date: this.props.thisWeekBeginning,
    //         items: []
    //     };
    //     this.state.selected.forEach(item => {
    //         week.items.push([item.id, item.todo]);
    //     });
    //     week.items.push([event.target.id, [0,0,0,0,0,0,0]]);
    //     if (localStorage.getItem('weeks')) {
    //         let oldWeeks = JSON.parse(localStorage.getItem('weeks'));
    //         storedWeeks = oldWeeks.filter(old => old.date !== week.date);
    //     }
    //     storedWeeks.push(week);
    //     localStorage.setItem('weeks', JSON.stringify(storedWeeks));
    //     this.props.onAddItemToWeek(event.target.id);
    // }
    //
    // saveDay = (event) => {
    //     let weeks = JSON.parse(localStorage.getItem('weeks'));
    //     let wtc = weeks.findIndex(old => old.date === this.props.thisWeekBeginning);
    //     let itc = weeks[wtc].items.findIndex(old => old[0] === event.currentTarget.dataset.id);
    //     weeks[wtc].items[itc][1][event.currentTarget.dataset.day] = weeks[wtc].items[itc][1][event.currentTarget.dataset.day] > 0 ? 0 : 1;
    //     localStorage.setItem('weeks', JSON.stringify(weeks));
    //     this.props.onChangeDay(event);
    // }

    render() {
        return (
            <main id='arrange'>
                <h1>
                    Week
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
                        {this.state.thisWeek.map(item =>
                            <Row
                                key={item.id}
                                id={item.id}
                                text={item.text}
                                number={item.number}
                                color={item.color}
                                todo={item.todo}
                                week={true}
                                onChangeDay={this.saveDay}
                            />
                        )}
                        </tbody>
                    </table>
                </section>
            </main>
        );
    }
}

export default Week;
