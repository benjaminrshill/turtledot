import React from 'react';
import ThisWeek from "../Doit/ThisWeek";
import '../weeks.css';

export default function Archive(props) {

    const archive = getArchive();

    function getArchive() {
        if (localStorage.getItem('archive')) {
            return JSON.parse(localStorage.getItem('archive'));
        }
    }

    return (
        <main id='arrange'>
            <h1>
                Archive
            </h1>
            {archive.map((week, i) =>
            <ThisWeek
                key={'archiveWeek' + i}
                weekName={week.date === props.scida.thisWeekBeginning ? 'This Week' : props.scida.lastWeekBeginning ? 'Last Week' : ''}
                scida={props.scida}
                weekBeginning={week.date}
                week={week}
                archive={true}
                editable={false}
            />
            )}
        </main>
    );
}
