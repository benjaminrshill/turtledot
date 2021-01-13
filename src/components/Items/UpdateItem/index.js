import React from 'react';

class UpdateItem extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            id: '',
            type: true,
            text: '',
            number: 1,
            color: 'color0'
        };
    }

    componentDidMount = () => {
        if (this.props.id) this.setState({
            id: this.props.id,
            text: this.props.text,
            type: this.props.type,
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
            color: event.target.value
        });
    }

    updateItem = () => {
        if (this.validate()) {
            this.props.onUpdateItem({...this.state});
            this.setState({
                id: '',
                text: '',
                type: true,
                number: 1,
                color: 'color0'
            });
        }
    }

    switchType = () => {
        this.setState(prevState => ({
            type: !prevState.type
        }));
        setTimeout(() => console.log(this.state), 50)
    }

    validate = () => {
        if (this.state.text.length > 0 && this.state.text.length < 12 && this.state.number > 0) {
            if (this.state.type) {
                if (this.state.number < 8) {
                    return true;
                }
            } else {
                if (this.state.number < 100000) {
                    return true;
                }
            }
        } else return false;
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
                    <button
                        name='type'
                        value={this.state.type}
                        onClick={this.switchType}
                        className='type'>
                        {this.state.type ? <div className='day spot open'></div> : '#'}
                    </button>
                    <input
                        type='number'
                        name='number'
                        min='1'
                        max='20000'
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
                            <button
                                key={color}
                                value={color}
                                className={'palette-square ' + color}
                                onClick={this.setColor}>
                            </button>
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
