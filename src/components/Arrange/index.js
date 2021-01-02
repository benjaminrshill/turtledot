import React from 'react';
import './arrange.css';
import Row from '../Table/Row';

class Arrange extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            thisWeekBeginning: '',
            selected: [],
            unselected: []
        };
    }

    componentDidMount() {
        this.getThisWeekBeginning();
        setTimeout(() => this.createWeek(), 50);
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        if (prevProps !== this.props) {
            this.createWeek();
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

    createWeek = () => {
        let unselected = [...this.props.items];
        let selected = [];
        this.props.weeks[0].items.forEach(week => {
            let index = unselected.findIndex(index => index.id === week[0]);
            let item = unselected.splice(index, 1);
            item[0].todo = week[1];
            selected.push(...item);
        });
        console.log(selected);
        this.setState({
            selected: [...selected],
            unselected: [...unselected]
        });
    }

    listAdd = () => {
        this.setState({
            adding: true
        });
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
                                {this.state.thisWeekBeginning}
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
                                onChangeDay={this.props.onChangeDay}
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
                                    onClick={this.props.onAddItemToWeek}>
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
