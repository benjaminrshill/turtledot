import React from 'react';

class Item extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            editing: false
        };
    }

    render()
    {
        return (
            <div className='item'>
                <div className='text'>
                    {this.props.text}
                </div>
                <button className='number'>
                    {this.props.number}
                </button>
                <button className={'color ' + this.props.color}>

                </button>
                <button
                    value={this.props.id}
                    onClick={this.props.onDeleteItem}
                    className='plus-sign delete'>
                    +
                </button>
            </div>
        );
    }
}

export default Item;
