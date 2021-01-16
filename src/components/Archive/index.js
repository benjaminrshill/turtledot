import React from 'react';
import ThisWeek from "../Doit/ThisWeek";
import '../weeks.css';

class Archive extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            archive: []
        };
    }

    componentDidMount = () => {
        this.getArchive();
    }

    getArchive = () => {
        if (localStorage.getItem('archive')) {
            let archive = JSON.parse(localStorage.getItem('archive'));
            this.setState({
                archive: [...archive]
            });
        }
    }

    render() {
        return (
            <main id='arrange'>
                <h1>
                    Archive
                </h1>
                {this.state.archive.map((week, i) =>
                <ThisWeek
                    key={'archiveWeek' + i}
                    weekName={''}
                    editable={false}
                    scida={this.props.scida}
                    weekBeginning={week.date}
                />
                )}
            </main>
        );
    }
}

export default Archive;
