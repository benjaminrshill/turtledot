import React from 'react';
import Row from '../../Table/Row';
import '../../weeks.css';
import '../arrange.css';

let touchData = {};
let timer;

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
            unselected: []
        };
    }

    componentDidMount = () => {
        this.createWeek().then();
    }

    componentDidUpdate = (prevProps, prevState, snapshot) => {
        if (prevProps !== this.props) {
            this.createWeek().then();
        }
    }

    createWeek = async () => {
        let selected = [];
        let unselected = [...this.props.scida.items];
        let currentWeek = await this.props.scida.weeks.find(week => week.date === this.props.weekBeginning);
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
        this.setState({
            selected: [...selected],
            unselected: [...unselected]
        });
    }

    saveWeek = (event) => {
        this.props.onAddItemToWeek(event.currentTarget.value, this.props.weekBeginning);
    }

    addAllItems = () => {
        let ids = [];
        this.state.unselected.forEach(item => ids.push(item.id));
        this.props.onAddAllItemsToWeek(ids, this.props.weekBeginning);
    }

    onDragStart = (event) => {
        // event.preventDefault();
        touchData.item = event.currentTarget.id;
    }

    onDragOver = (event) => {
        event.preventDefault();
        let movedItem = document.getElementById(touchData.item),
            movingOver = event.currentTarget,
            movedParent = movingOver.parentNode;
        touchData.rect = movingOver.getBoundingClientRect();
        if (movedParent.dataset.dragweek === movingOver.dataset.dragweek) {
            if (movingOver === movedItem) { // prevent dropping on self
                event.dataTransfer.dropEffect = 'none';
            } else if (movedItem.dataset.dragweek === movingOver.dataset.dragweek) {
                movingOver.classList.add('scooch');
                event.dataTransfer.dropEffect = 'move';
            }
        }
    }

    onDragLeave = (event) => {
        if (event.clientY < touchData.rect.top || event.clientY > touchData.rect.bottom) {
            event.currentTarget.classList.remove('scooch');
        }
    }

    onDrop = (event) => {
        event.preventDefault();
        event.currentTarget.parentNode.childNodes.forEach(row => row.classList.remove('scooch'));
        let movedItem = document.getElementById(touchData.item),
            droppingOn = event.currentTarget;
        this.props.onMoveItemInWeek(+movedItem.dataset.index, +droppingOn.dataset.index, droppingOn.dataset.dragweek);
    }

    removeItem = (event) => {
        if (window.confirm('Really remove?')) {
            this.props.onRemoveItemFromWeek(event.target.value, this.props.weekBeginning);
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
                        <tbody data-dragweek={this.props.weekBeginning}>
                        {this.state.selected.map((item, i) =>
                            <Row
                                key={item.id + this.props.weekBeginning}
                                id={item.id}
                                index={i}
                                text={item.text}
                                number={item.number}
                                color={item.color}
                                todo={item.todo}
                                weekBeginning={this.props.weekBeginning}
                                onChangeDay={this.saveDay}
                                onDragStart={this.onDragStart}
                                onDragOver={this.onDragOver}
                                onDragLeave={this.onDragLeave}
                                onDrop={this.onDrop}
                                onRemoveItem={this.removeItem}
                            />
                        )}
                        </tbody>
                    </table>
                </section>
                {this.state.unselected.length > 0 &&
                <div className='edit-box'>
                    <button
                        className='addAllItems'
                        onClick={this.addAllItems}>
                        add all
                    </button>
                    <div className='items-list'>
                        {this.state.unselected.map(item =>
                            <button
                                key={item.id + this.props.weekBeginning + 'u'}
                                value={item.id}
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
