import React from 'react';
import './arrange.css';
import Row from "../Table/Row";

class Arrange extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            adding: false,
            itemWeeks: []
        };
    }

    componentDidMount() {
        setTimeout(() => this.createThisWeek(), 50);
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        if (prevProps !== this.props) {
            this.createThisWeek();
        }
    }

    createThisWeek = () => {
        let weekItems = [];
        this.props.weeks[0].items.forEach(week => {
            let item = this.props.items.find(item => item.id === week[0]);
            weekItems.push([item, week[1]]);
        });
        this.setState({
            itemWeeks: [...weekItems]
        });
    }

    listAdd = () => {
        this.setState({
            adding: true
        });
    }

    render() {
        return (
            <main id="arrange">
                <section>
                    <table>
                        <thead>
                        <tr>
                            <td className="week-date left-column">
                                date
                            </td>
                            <td className="week-date">

                            </td>
                            <td className="day">
                                M
                            </td>
                            <td className="day">
                                T
                            </td>
                            <td className="day">
                                W
                            </td>
                            <td className="day">
                                T
                            </td>
                            <td className="day">
                                F
                            </td>
                            <td className="day">
                                S
                            </td>
                            <td className="day">
                                S
                            </td>
                        </tr>
                        </thead>
                        <tbody>
                        {this.state.itemWeeks.map(item =>
                            <Row
                                key={item[0].id}
                                id={item[0].id}
                                text={item[0].text}
                                number={item[0].number}
                                color={item[0].color}
                                todo={item[1]}
                                onChangeDay={this.props.onChangeDay}
                            />
                        )}
                        </tbody>
                    </table>
                </section>
                {this.state.adding ?
                    <div className="edit-box">
                        <div className="items-list">
                            <button className="items-list-item color3">
                                JOGGING
                            </button>
                            <button className="items-list-item color9">
                                STUDY CHINESE
                            </button>
                            <button className="items-list-item color9">
                                STUDY FRENCH
                            </button>
                            <button className="items-list-item color4">
                                FLOORWORK
                            </button>
                        </div>
                        <div className="edit-box-buttons">
                            <button className="edit-complete">
                                &#10003;
                            </button>
                        </div>
                    </div>
                    :
                    <button
                        onClick={this.listAdd}
                        className="plus-sign add">
                        +
                    </button>
                }
            </main>
        );
    }
}

export default Arrange;
