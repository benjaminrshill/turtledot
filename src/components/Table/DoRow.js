import React from 'react';

export default function DoRow(props) {

    const currentNumber = props.todo.reduce((a, b) => a + b, 0);
    const allDone = currentNumber >= +props.number * 100;

    return (
        <tr
            id={props.id + props.weekBeginning}
            className={allDone ? 'allDone' : props.color}>
            <td
                id={props.id}
                className='week-item left-column'>
                {props.text}
            </td>
            <td className={'week-item-number'}>
                {props.number}
            </td>
            {props.todo.map((day, i) =>
                <td
                    key={props.id + i}
                    id={props.id}
                    data-day={i}
                    data-week={props.weekBeginning}
                    onClick={props.onDoDay}
                    className='week-spots'>
                    <div
                        className={'spot' + (day === 100 ? ' closed' : day === 1 ? ' open' : '')}>
                    </div>
                </td>
            )}
        </tr>
    );
}
