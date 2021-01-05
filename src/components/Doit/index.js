import React from 'react';
import DoitWeek from "./DoitWeek";
import '../weeks.css';

class Doit extends React.Component {

    render() {
        return (
            <main id='arrange'>
                <h1>
                    Doit
                </h1>
                <DoitWeek
                    key={'thisWeek'}
                    weekName={'This Week'}
                    editable={true}
                    scida={this.props.scida}
                    weekBeginning={this.props.scida.thisWeekBeginning}
                    onChangeDay={this.props.onChangeDay}
                />
                <DoitWeek
                    key={'lastWeek'}
                    weekName={'Last Week'}
                    editable={false}
                    scida={this.props.scida}
                    weekBeginning={this.props.scida.lastWeekBeginning}
                />
            </main>
        );
    }
}

export default Doit;
