import React from 'react';
import cutNumber from "../../functions/cutNumber";

class Row extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            editing: false,
            onesAndZeroes: '',
            currentNumber: '',
            tooHigh: '',
            tooLow: '',
            cutNum: '',
            goalNum: ''
        }
        this.cutNumber = cutNumber.bind(this);
    }

    componentDidMount = () => {
        this.doNumbers();
    }

    componentDidUpdate = (prevProps, prevState, snapshot) => {
        if (prevProps !== this.props) this.doNumbers();
    }

    doNumbers = () => {
        const onesAndZeroes = this.props.todo.map(n => n = (n >= 1 ? 1 : 0));
        const currentNumber = onesAndZeroes.reduce((a, b) => a + b, 0);
        const tooHigh = currentNumber > +this.props.number;
        const tooLow = currentNumber < +this.props.number;
        const cutNum = this.cutNumber(this.props.number);
        const goalNum = this.cutNumber(this.props.number / currentNumber);
        this.setState({
            onesAndZeroes: onesAndZeroes,
            currentNumber: currentNumber,
            tooHigh: tooHigh,
            tooLow: tooLow,
            cutNum: cutNum,
            goalNum: goalNum
        });
    }

    render() {
        return (
            <tr
                draggable={true}
                id={this.props.id + this.props.weekBeginning}
                data-index={this.props.index}
                data-dragid={this.props.id}
                data-dragweek={this.props.weekBeginning}
                className={this.props.color}
                onDragStart={this.props.onDragStart}
                onDragOver={this.props.onDragOver}
                onDragLeave={this.props.onDragLeave}
                onDrop={this.props.onDrop}>
                <td
                    id={this.props.id}
                    className='week-item left-column'>
                    <button
                        value={this.props.id}
                        onClick={this.props.onRemoveItem}
                        className='week-item-delete'>
                        &#10006;
                    </button>
                    {this.props.text}
                </td>
                <td className={'main-cell week-item-number'
                    + (this.state.tooHigh ? ' week-number-arrow-down' : this.state.tooLow ? ' week-number-arrow-up' : '')}>
                    {this.state.cutNum}
                </td>
                {this.props.todo.map((day, i) =>
                    <td
                        key={this.props.id + i}
                        id={this.props.id}
                        data-day={i}
                        data-week={this.props.weekBeginning}
                        onClick={day < 100 ? this.props.onChangeDay : undefined}
                        className='main-cell week-spots'>
                        <div className={this.props.type ? 'spot' + (day > 0 ? ' grey' : '') : 'type-cell grey'}>
                            {!this.props.type && day > 0 ? this.state.goalNum : ''}
                        </div>
                    </td>
                )}
            </tr>
        );
    }
}

export default Row;

