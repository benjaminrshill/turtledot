import React from 'react';
import { v4 as uuidv4 } from 'uuid';
import Item from './Item';
import UpdateItem from './UpdateItem';
import './items.css';

class Items extends React.Component {

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
                        number={item.number}
                        color={item.color}
                        colors={this.props.colors}
                        onEditIteminState={this.editItemInState}
                        onDeleteItem={this.deleteItem}
                    />
                )}
                <UpdateItem
                    colors={this.props.colors}
                    onUpdateItem={this.addItem}
                />
            </main>
        );
    }
}

export default Items;
