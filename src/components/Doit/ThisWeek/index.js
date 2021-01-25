import React from 'react';
import DoRow from "../../Table/DoRow";
import '../../weeks.css';

class ThisWeek extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            date: '',
            items: [
                {
                    id: '',
                    text: '',
                    number: '',
                    color: '',
                    todo: [0,0,0,0,0,0,0]
                }
            ]
        };
    }

    componentDidMount = () => {
        this.props.editable ? this.createWeek() : this.getLastWeek();
    }

    componentDidUpdate = (prevProps, prevState, snapshot) => {
        if (prevProps !== this.props) {
            this.props.editable ? this.createWeek() : this.getLastWeek();
        }
    }

    updateArchive = () => {
        let archive = [];
        let lastWeek = {
            date: this.props.scida.thisWeekBeginning,
            items: [...this.state.items]
        };
        if (localStorage.getItem('archive')) {
            archive = JSON.parse(localStorage.getItem('archive'));
            let index = archive.findIndex(week => week.date === this.props.scida.thisWeekBeginning);
            if (index !== -1) {
                archive[index] = lastWeek;
            } else {
                archive.unshift(lastWeek);
            }
        } else {
            archive.unshift(lastWeek);
        }
        localStorage.setItem('archive', JSON.stringify(archive));
    }

    createWeek = () => {
        let items = [],
            allItems = [...this.props.scida.items];
        let currentWeek = this.props.scida.weeks.find(week => week.date === this.props.weekBeginning);
        if (currentWeek !== undefined) {
            currentWeek.items.forEach(week => {
                let index = allItems.findIndex(index => index.id === week[0]);
                let item = allItems.splice(index, 1);
                item[0].todo = week[1];
                items.push(item[0]);
            });
        }
        this.setState({
            items: [...items]
        });
    }

    doDay = (event) => {
        this.props.onChangeDay(event, this.props.weekBeginning, 1);
        this.updateArchive();
    }

    getLastWeek = () => {
        if (localStorage.getItem('archive')) {
            let archive = JSON.parse(localStorage.getItem('archive'));
            let lastWeek = archive.find(week => week.date === this.props.scida.lastWeekBeginning);
            if (lastWeek !== undefined) this.setState({
                items: [...lastWeek.items]
            });
        }
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
                        {this.props.archive ? this.props.week.items.map((item, i) =>
                            <DoRow
                                key={item.id + this.props.weekBeginning}
                                id={item.id}
                                index={i}
                                text={item.text}
                                type={item.type}
                                number={item.number}
                                color={item.color}
                                todo={item.todo}
                                weekBeginning={this.props.weekBeginning}
                                onDoDay={this.props.editable ? this.doDay : undefined}
                            />
                        )
                        :
                        this.state.items.map((item, i) =>
                            <DoRow
                                key={item.id + this.props.weekBeginning}
                                id={item.id}
                                index={i}
                                text={item.text}
                                type={item.type}
                                number={item.number}
                                color={item.color}
                                todo={item.todo}
                                weekBeginning={this.props.weekBeginning}
                                onDoDay={this.props.editable ? this.doDay : undefined}
                            />
                        )}
                        </tbody>
                    </table>
                </section>
            </div>
        );
    }
}

export default ThisWeek;
