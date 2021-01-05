import React from 'react';

export default function Row(props) {

    const onesAndZeroes = props.todo.map(n => n = (n >= 1 ? 1 : 0));
    const currentNumber = onesAndZeroes.reduce((a, b) => a + b, 0);
    const tooHigh = currentNumber > +props.number;
    const tooLow = currentNumber < +props.number;

    return (
        <tr
            draggable={true}
            id={props.id + props.weekBeginning}
            data-index={props.index}
            data-dragid={props.id}
            data-dragweek={props.weekBeginning}
            className={props.color}
            onDragStart={props.onDragStart}
            onDragOver={props.onDragOver}
            onDragLeave={props.onDragLeave}
            onDrop={props.onDrop}
            onTouchStart={props.onBeginRemove}
            onMouseDown={props.onBeginRemove}
            onTouchCancel={props.onEndRemove}
            onMouseUp={props.onEndRemove}>
            <td
                id={props.id}
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
                        className={'spot' + (day > 0 ? ' grey' : '')}>
                    </div>
                </td>
            )}
        </tr>
    );
}
