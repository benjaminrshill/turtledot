// import React from 'react';
// import cutNumber from "../../functions/cutNumber";
//
// export default function DoRow(props) {
//
//     const currentNumber = props.todo.reduce((a, b) => a + b, 0);
//     const allDone = currentNumber >= +props.number * 100;
//     const goalNum = cutNumber(props.number / currentNumber);
//
//     return (
//         <tr
//             id={props.id + props.weekBeginning}
//             className={allDone ? 'allDone' : props.color}>
//             <td
//                 id={props.id}
//                 className='week-item left-column'>
//                 {props.text}
//             </td>
//             <td className={'main-cell week-item-number'}>
//                 {cutNumber(props.number)}
//             </td>
//             {props.todo.map((day, i) =>
//                 <td
//                     key={props.id + i}
//                     id={props.id}
//                     data-day={i}
//                     data-week={props.weekBeginning}
//                     onClick={props.onDoDay}
//                     className={'main-cell week-spots' + (props.type ? '' : (day >= goalNum ? ' countable' : ' full-grey'))}>
//                     <div
//                         className={props.type ?
//                             ('spot' + (day === 100 ? ' closed' : day === 1 ? ' open' : ''))
//                             :
//                             day >= goalNum ? 'countable' : 'type-cell grey'}>
//                         {!props.type && day > 0 ? goalNum : ''}
//                     </div>
//                 </td>
//             )}
//         </tr>
//     );
// }

import React from 'react';
import cutNumber from "../../functions/cutNumber";

export default function DoRow(props) {

    const currentNumber = props.todo.reduce((a, b) => a + b, 0);
    const allBoolDone = currentNumber >= +props.number * 100;
    const allCountDone = currentNumber !== 0 && currentNumber % 100 === 0;
    let countedNumber = 0;
    props.todo.forEach(day => day > 0 ? countedNumber++ : null);
    const goalNum = cutNumber(props.number / countedNumber);

    return (
        <tr
            id={props.id + props.weekBeginning}
            className={props.type ? (allBoolDone ? 'allDone' : props.color) : (allCountDone ? 'allDone' : props.color)}>
            <td
                id={props.id}
                className='week-item left-column'>
                {props.text}
            </td>
            <td className={'main-cell week-item-number'}>
                {cutNumber(props.number)}
            </td>
            {props.todo.map((day, i) =>
                <td
                    key={props.id + i}
                    id={props.id}
                    data-day={i}
                    data-week={props.weekBeginning}
                    onClick={props.onDoDay}
                    className={'main-cell week-spots' + (day === 100 ? props.color : '')}>
                    <div
                        className={props.type ?
                            ('spot' + (day === 100 ? ' closed' : day === 1 ? ' open' : ''))
                            :
                            ('type-cell' + (day === 1 ? ' grey' : ''))}>
                        {!props.type && day > 0 ? goalNum : ''}
                    </div>
                </td>
            )}
        </tr>
    );
}
