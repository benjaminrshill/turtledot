import React from 'react';

class UpdateItem extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            id: '',
            text: '',
            number: 1,
            color: 'color0'
        };
    }

    componentDidMount = () => {
        if (this.props.id) this.setState({
            id: this.props.id,
            text: this.props.text,
            number: this.props.number,
            color: this.props.color
        });
    }

    handleInput = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        this.setState({
            [name]: value
        });
    }

    setColor = (event) => {
        this.setState({
            color: event.target.id
        });
    }

    updateItem = () => {
        if (this.state.text.length > 0) {
            this.props.onUpdateItem({...this.state});
            this.setState({
                id: '',
                text: '',
                number: 1,
                color: 'color0'
            });
        }
    }

    render() {
        return (
            <section>
                <div className='item'>
                    <input
                        type='text'
                        name='text'
                        value={this.state.text}
                        onChange={this.handleInput}
                        className='text'
                    />
                    <input
                        type='number'
                        name='number'
                        min='1'
                        max='35'
                        value={this.state.number}
                        onChange={this.handleInput}
                        className='number'
                    />
                    <button
                        className={'color ' + this.state.color}>
                    </button>
                    <button
                        onClick={this.props.onCancelUpdate}
                        className='plus-sign delete'>
                        +
                    </button>
                </div>
                <div className='edit-box'>
                    <div className='palette'>
                        {this.props.colors.map(color =>
                            <div
                                key={color}
                                id={color}
                                className={'palette-square ' + color}
                                onClick={this.setColor}>
                            </div>
                        )}
                    </div>
                    <div className='edit-box-buttons'>
                        <button
                            onClick={this.updateItem}
                            className='edit-complete'>
                            &#10003;
                        </button>
                    </div>
                </div>
            </section>
        );
    }
}

export default UpdateItem;
