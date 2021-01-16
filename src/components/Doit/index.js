import React from 'react';
import ThisWeek from "./ThisWeek";
import '../weeks.css';

class Doit extends React.Component {

    render() {
        return (
            <main id='arrange'>
                <h1>
                    Doit
                </h1>
                <ThisWeek
                    key={'thisWeek'}
                    weekName={'This Week'}
                    editable={true}
                    scida={this.props.scida}
                    weekBeginning={this.props.scida.thisWeekBeginning}
                    onChangeDay={this.props.onChangeDay}
                />
                <ThisWeek
                    key={'lastWeek'}
                    weekName={'Last Week'}
                    editable={false}
                    scida={this.props.scida}
                    weekBeginning={this.props.scida.thisWeekBeginning} // REMEMBER TO CHANGE TO LAST WEEK BEGINNING!
                />
            </main>
        );
    }
}

export default Doit;
