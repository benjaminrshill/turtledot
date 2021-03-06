import React from 'react';
import UpdateItem from '../UpdateItem';
import '../../weeks.css';
import cutNumber from "../../../functions/cutNumber";

class Item extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            editing: false,
            inUse: false
        };
        this.cutNumber = cutNumber.bind(this);
    }

    componentDidMount = () => {
        this.checkInUse();
    }

    componentDidUpdate = (prevProps, prevState, snapshot) => {
        if (prevProps !== this.props && this.props.currentlyAdding) {
            this.cancelEdit();
        }
    }

    startEdit = () => {
        this.setState({
            editing: true
        });
        this.props.onCancelNewItem();
    }

    cancelEdit = () => {
        this.setState({
            editing: false
        });
    }

    editItem = (data) => {
        let storedItems = JSON.parse(localStorage.getItem('items'));
        let edited = storedItems.findIndex(item => item.id === data.id);
        storedItems[edited] = data;
        localStorage.setItem('items', JSON.stringify(storedItems));
        this.props.onEditIteminState(storedItems);
        this.setState({
            editing: false
        });
    }

    checkInUse = () => {
        if (localStorage.getItem('weeks')) {
            const weeks = JSON.parse(localStorage.getItem('weeks'));
            weeks.forEach(week => {
                if (week.items.find(item => item[0] === this.props.id)) {
                    this.setState({
                        inUse: true
                    });
                }
            });
        }
    }

    render() {
        return (
            <div>
            {this.state.editing ?
                <UpdateItem
                    id={this.props.id}
                    text={this.props.text}
                    type={this.props.type}
                    number={this.props.number}
                    color={this.props.color}
                    colors={this.props.colors}
                    onUpdateItem={this.editItem}
                    onCancelUpdate={this.cancelEdit}
                />
                :
                <div className='item'>
                    <div
                        onClick={this.startEdit}
                        className='text'>
                        {this.props.text}
                    </div>
                    <button
                        onClick={this.startEdit}
                        className='type'>
                        {this.props.type ? <div className='day spot open'></div> : '#'}
                    </button>
                    <button
                        onClick={this.startEdit}
                        className='number'>
                        {this.cutNumber(this.props.number)}
                    </button>
                    <button
                        onClick={this.startEdit}
                        className={'color ' + this.props.color}>
                    </button>
                    <button
                        value={this.props.id}
                        disabled={this.state.inUse}
                        onClick={this.props.onDeleteItem}
                        className='plus-sign delete'>
                        +
                    </button>
                </div>
            }
            </div>
        );
    }
}

export default Item;
