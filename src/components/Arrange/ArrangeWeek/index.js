import React from 'react';
import Row from '../../Table/Row';
import sortColor from "../../../functions/sortColor";
import '../arrange.css';

class ArrangeWeek extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
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
        this.sortColor = sortColor.bind(this);
    }

    componentDidMount() {
        setTimeout(() => this.createWeek(), 500);
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        if (prevProps !== this.props) {
            setTimeout(() => this.createWeek(), 500);
        }
    }

    createWeek = () => {
        let selected = [];
        let unselected = [...this.props.scida.items];
        let currentWeek = this.props.scida.weeks.find(week => week.date === this.props.weekBeginning);
        if (currentWeek !== undefined) {
            currentWeek.items.forEach(week => {
                if (unselected.find(item => item.id === week[0])) {
                    let index = unselected.findIndex(index => index.id === week[0]);
                    let item = unselected.splice(index, 1);
                    item[0].todo = week[1];
                    selected.push(item[0]);
                }
            });
        }
        this.sortColor(selected);
        this.sortColor(unselected);
        this.setState({
            selected: [...selected],
            unselected: [...unselected]
        });
    }

    saveWeek = (event) => {
        // let weeks = [];
        // let currentWeek = {
        //     date: this.props.weekBeginning,
        //     items: []
        // };
        // this.state.selected.forEach(item => {
        //     currentWeek.items.push([item.id, item.todo]);
        // });
        // currentWeek.items.push([event.target.id, [0,0,0,0,0,0,0]]);
        // if (localStorage.getItem('weeks')) {
        //     let oldWeeks = JSON.parse(localStorage.getItem('weeks'));
        //     weeks = oldWeeks.filter(old => old.date !== currentWeek.date);
        // }
        // weeks.push(currentWeek);
        // localStorage.setItem('weeks', JSON.stringify(weeks));
        this.props.onAddItemToWeek(event.currentTarget.id, this.props.weekBeginning);
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
            this.props.onRemoveItemFromWeek(event.currentTarget.id, this.props.weekBeginning);
        }
    }

    saveDay = (event) => {
        this.props.onChangeDay(event, this.props.weekBeginning);
    }

    render() {
        return (
            <div className='week'>
                <h2>
                    {this.props.weekName}
                </h2>
                <section>
                    <table>
                        <thead>
                        <tr>
                            <td className='week-date left-column'>
                                {this.props.weekBeginning}
                            </td>
                            <td className='week-date'>

                            </td>
                            {this.props.scida.days.map((day, i) =>
                                <td
                                    key={day + i + this.props.weekBeginning}
                                    className='day'>
                                    {day}
                                </td>
                            )}
                        </tr>
                        </thead>
                        <tbody>
                        {this.state.selected.map(item =>
                            <Row
                                key={item.id + this.props.weekBeginning}
                                id={item.id + this.props.weekBeginning}
                                text={item.text}
                                number={item.number}
                                color={item.color}
                                todo={item.todo}
                                weekBeginning={this.props.weekBeginning}
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
                                key={item.id + this.props.weekBeginning + 'u'}
                                id={item.id}
                                className={'items-list-item ' + item.color}
                                onClick={this.saveWeek}>
                                {item.text}
                            </button>
                        )}
                    </div>
                </div>
                }
            </div>
        );
    }
}

export default ArrangeWeek;
