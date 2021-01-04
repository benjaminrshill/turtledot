import React from 'react';

export default function Row(props) {

    const currentNumber = props.todo.reduce((a, b) => a + b, 0);
    const allDone = props.thisWeek && currentNumber >= props.number;
    const tooHigh = !allDone && currentNumber > +props.number;
    const tooLow = !allDone && currentNumber < +props.number;

    return (
        <tr className={props.color}>
            <td
                id={props.id}
                onTouchStart={props.onTouchStart}
                onTouchMove={props.onTouchMove}
                onTouchEnd={props.onTouchEnd}
                className='week-item left-column'>
                {props.text}
            </td>
            <td className={'week-item-number' + (tooHigh ? ' week-number-arrow-down' : tooLow ? ' week-number-arrow-up' : '')}>
                {props.number}
            </td>
            {props.todo.map((day, i) =>
                <td
                    key={props.id + i}
                    id={props.id}
                    data-day={i}
                    data-week={props.weekBeginning}
                    onClick={props.onChangeDay}
                    className='week-spots'>
                    <div
                        className={'spot' + (day > 0 ? ' open' : '')}>
                    </div>
                </td>
            )}
        </tr>
    );
}
