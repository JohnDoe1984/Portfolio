import './history.css';

import React, { useContext } from 'react';
import { useHistory } from 'react-router';
import { Context } from '../context';

export function History() {
    const history = useHistory();
    const context = useContext(Context);

    const list = context.list.map((event, index) => (
        <div key={index} onClick={() => history.push(`/?index=${index}`)}>
            <span >{event.date} </span>
            <span>{event.event}</span>
        </div>))

    return (
        <div className="history">
            <div onClick={() => history.push('/')}><span>Add new</span></div>
            {list}
        </div>
    )
}