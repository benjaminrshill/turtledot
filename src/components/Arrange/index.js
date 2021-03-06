import React from 'react';
import ArrangeWeek from "./ArrangeWeek";
import '../weeks.css';

class Arrange extends React.Component {

    render() {
        return (
            <main id='arrange'>
                <h1>
                    Arrange
                </h1>
                <ArrangeWeek
                    key={'nextWeek'}
                    weekName={'Next Week'}
                    scida={this.props.scida}
                    weekBeginning={this.props.scida.nextWeekBeginning}
                    onAddItemToWeek={this.props.onAddItemToWeek}
                    onAddAllItemsToWeek={this.props.onAddAllItemsToWeek}
                    onCopyAllFromThisWeek={this.props.onCopyAllFromThisWeek}
                    onMoveItemInWeek={this.props.onMoveItemInWeek}
                    onRemoveItemFromWeek={this.props.onRemoveItemFromWeek}
                    onChangeDay={this.props.onChangeDay}
                />
                <ArrangeWeek
                    key={'thisWeek'}
                    weekName={'This Week'}
                    scida={this.props.scida}
                    weekBeginning={this.props.scida.thisWeekBeginning}
                    onAddItemToWeek={this.props.onAddItemToWeek}
                    onAddAllItemsToWeek={this.props.onAddAllItemsToWeek}
                    onMoveItemInWeek={this.props.onMoveItemInWeek}
                    onRemoveItemFromWeek={this.props.onRemoveItemFromWeek}
                    onChangeDay={this.props.onChangeDay}
                />
            </main>
        );
    }
}

export default Arrange;
