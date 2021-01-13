import React from 'react';
import cutNumber from "../../functions/cutNumber";

export default function Row(props) {

    const onesAndZeroes = props.todo.map(n => n = (n >= 1 ? 1 : 0));
    const currentNumber = onesAndZeroes.reduce((a, b) => a + b, 0);
    const tooHigh = currentNumber > +props.number;
    const tooLow = currentNumber < +props.number;
    const cutNum = cutNumber(props.number);

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
            onDrop={props.onDrop}>
            <td
                id={props.id}
                className='week-item left-column'>
                <button
                    value={props.id}
                    onClick={props.onRemoveItem}
                    className='week-item-delete'>
                    &#10006;
                </button>
                {props.text}
            </td>
            <td className={'main-cell week-item-number' + (tooHigh ? ' week-number-arrow-down' : tooLow ? ' week-number-arrow-up' : '')}>
                {cutNum}
            </td>
            {props.todo.map((day, i) =>
                <td
                    key={props.id + i}
                    id={props.id}
                    data-day={i}
                    data-week={props.weekBeginning}
                    onClick={props.onChangeDay}
                    className='main-cell week-spots'>
                    <div className={!props.type ? 'type-cell grey' : 'spot' + (day > 0 ? ' grey' : '')}>
                        {/*{!props.type ? goalNumber : ''}*/}
                    </div>
                </td>
            )}
        </tr>
    );
}
