import React from 'react';
import UpdateItem from '../UpdateItem';

class Item extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            editing: false
        };
    }

    startEdit = () => {
        this.setState({
            editing: true
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

    render()
    {
        return (
            <div>
            {this.state.editing ?
                <UpdateItem
                    id={this.props.id}
                    text={this.props.text}
                    number={this.props.number}
                    color={this.props.color}
                    colors={this.props.colors}
                    onUpdateItem={this.editItem}
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
                        className='number'>
                        {this.props.number}
                    </button>
                    <button
                        onClick={this.startEdit}
                        className={'color ' + this.props.color}>

                    </button>
                    <button
                        value={this.props.id}
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
