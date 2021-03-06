import React from 'react';
import { v4 as uuidv4 } from 'uuid';
import Item from './Item';
import UpdateItem from './UpdateItem';
import './items.css';

class Items extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            adding: false
        };
    }

    newItem = () => {
        this.setState({
            adding: true
        });
    }

    cancelNewItem = () => {
        this.setState({
            adding: false
        });
    }

    addItem = (data) => {
        let item = {
            id: uuidv4(),
            text: data.text,
            type: data.type,
            number: data.number,
            color: data.color
        };
        let storedItems = [];
        if (localStorage.getItem('items')) {
            storedItems = JSON.parse(localStorage.getItem('items'));
        }
        storedItems.push(item);
        localStorage.setItem('items', JSON.stringify(storedItems));
        this.props.onNewItemToState(item);
    }

    editItemInState = (edited) => {
        this.props.onUpdateState(edited);
    }

    deleteItem = (event) => {
        if (window.confirm('Really delete?')) {
            let storedItems = JSON.parse(localStorage.getItem('items'));
            let filtered = storedItems.filter(item => item.id !== event.target.value);
            localStorage.setItem('items', JSON.stringify(filtered));
            this.props.onUpdateState(filtered);
        }
    }

    render() {
        return (
            <main id='items'>
                <h1>
                    Items
                </h1>
                {this.props.items.map(item =>
                    <Item
                        key={item.id}
                        id={item.id}
                        text={item.text}
                        type={item.type}
                        number={item.number}
                        color={item.color}
                        colors={this.props.colors}
                        currentlyAdding={this.state.adding}
                        onEditIteminState={this.editItemInState}
                        onCancelNewItem={this.cancelNewItem}
                        onDeleteItem={this.deleteItem}
                    />
                )}
                {this.state.adding ?
                    <UpdateItem
                        colors={this.props.colors}
                        onUpdateItem={this.addItem}
                        onCancelUpdate={this.cancelNewItem}
                    />
                    :
                    <button
                        onClick={this.newItem}
                        className='plus-sign add'>
                        +
                    </button>
                }
            </main>
        );
    }
}

export default Items;
