import React from 'react';
import './arrange.css';
import Row from "../Table/Row";

class Arrange extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            adding: false,
            id: '77',
            date: '2020/12/28',
            storedWeeks: [
                ['9b7ef609-bd19-4bac-9e10-9ffaadcdf80f', [0,0,1,0,0,1,0]],
                ['ab2f37b0-c271-4f09-b667-7d19609182aa', [0,1,0,0,1,0,0]],
                ['9693fe04-48a9-46a9-adb5-7f4c992a23c9', [0,1,1,1,1,1,0]]
            ],
            items: []
        };
    }

    componentDidMount() {
        this.createWeek();
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        if (prevProps !== this.props) {
            this.createWeek();
        }
    }

    createWeek = () => {
        let weekItems = [];
        this.state.storedWeeks.forEach(week => {
            let item = this.props.items.find(item => item.id === week[0]);
            weekItems.push([item, week[1]]);
        });
        this.setState({
            items: [...weekItems]
        });
        console.log(this.state);
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
                                {this.state.date}
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
                        {this.state.items.map(item =>
                            <Row
                                key={item[0].id}
                                id={item[0].id}
                                text={item[0].text}
                                number={item[0].number}
                                color={item[0].color}
                                todo={item[1]}
                                // text={item.text}
                                // number={item.number}
                                // color={item.color}
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
