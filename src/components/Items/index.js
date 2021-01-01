import React from 'react';
import { v4 as uuidv4 } from 'uuid';
import Item from "../Item";
import NewItem from "../NewItem";
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

    addItem = (data) => {
        let item = {
            id: uuidv4(),
            text: data.text,
            number: data.number,
            color: data.color,
            type: 'boolean'
        };
        let storedItems = [];
        if (localStorage.getItem('items')) {
            storedItems = JSON.parse(localStorage.getItem('items'));
        }
        storedItems.push(item);
        localStorage.setItem('items', JSON.stringify(storedItems));
        this.setState({
            adding: false
        });
        this.props.onNewItemToState(item);
    }

    deleteItem = (event) => {
        let storedItems = JSON.parse(localStorage.getItem('items'));
        let filtered = storedItems.filter(item => item.id !== event.target.value);
        localStorage.setItem('items', JSON.stringify(filtered));
        this.props.onRemoveItemFromState(filtered);
    }

    render() {
        return (
            <main id='items'>
                {this.props.items.map(item =>
                    <Item
                        key={item.id}
                        id={item.id}
                        text={item.text}
                        number={item.number}
                        color={item.color}
                        onDeleteItem={this.deleteItem}
                    />
                )}
                {this.state.adding ?
                    <NewItem
                        colors={this.props.colors}
                        onAddItem={this.addItem}
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
