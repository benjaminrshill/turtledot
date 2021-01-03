import React from 'react';
import ArrangeWeek from "./ArrangeWeek";
import './arrange.css';

class Arrange extends React.Component {

    render() {
        return (
            <main id='arrange'>
                <h1>
                    Arrange
                </h1>
                <ArrangeWeek
                    key={'thisWeek'}
                    weekName={'This Week'}
                    scida={this.props.scida}
                    thisWeek={true}
                    onAddItemToWeek={this.props.onAddItemToWeek}
                    onRemoveItemFromWeek={this.props.onRemoveItemFromWeek}
                    onChangeDay={this.props.onChangeDay}
                />
                <ArrangeWeek
                    key={'nextWeek'}
                    weekName={'Next Week'}
                    scida={this.props.scida}
                    thisWeek={false}
                    onAddItemToWeek={this.props.onAddItemToWeek}
                    onRemoveItemFromWeek={this.props.onRemoveItemFromWeek}
                    onChangeDay={this.props.onChangeDay}
                />
            </main>
        );
    }
}

export default Arrange;
