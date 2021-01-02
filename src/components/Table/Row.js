import React from 'react';

export default function Row(props) {
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
            <td className='week-item-number'>
                {props.number}
            </td>
            {props.todo.map((day, i) =>
                <td
                    key={props.id + i}
                    data-id={props.id}
                    data-day={i}
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
