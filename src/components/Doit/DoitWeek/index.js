import React from 'react';
import DoRow from "../../Table/DoRow";
import '../../weeks.css';

class DoitWeek extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            items: [
                {
                    id: '',
                    text: '',
                    number: 0,
                    color: '',
                    todo: [0,0,0,0,0,0,0]
                }
            ]
        };
    }

    componentDidMount() {
        this.createWeek().then();
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        if (prevProps !== this.props) {
            this.createWeek().then();
        }
    }

    createWeek = async () => {
        let items = [],
            allItems = [...this.props.scida.items];
        let currentWeek = await this.props.scida.weeks.find(week => week.date === this.props.weekBeginning);
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
                        {this.state.items.map((item, i) =>
                            <DoRow
                                key={item.id + this.props.weekBeginning}
                                id={item.id}
                                index={i}
                                text={item.text}
                                number={item.number}
                                color={item.color}
                                todo={item.todo}
                                weekBeginning={this.props.weekBeginning}
                                onDoDay={this.props.editable && this.doDay}
                            />
                        )}
                        </tbody>
                    </table>
                </section>
            </div>
        );
    }
}

export default DoitWeek;
