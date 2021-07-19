import './event.css';

import React, { useContext, useEffect, useState } from 'react';
import { Context } from '../context';
import { useHistory, useLocation } from 'react-router-dom';

function useQuery() {
    return new URLSearchParams(useLocation().search);
}

export function Event() {
    const ctx = useContext(Context);
    const history = useHistory();

    const query = useQuery();
    const i = query.get('index');
    let idx = Number.parseInt(i, 10);
    if (Number.isNaN(idx) || (idx >= 0 && ctx.list.length <= idx)) {
        console.log('RESET')
        idx = -1;
    }

    const [index, setIndex] = useState(idx);

    useEffect(() => {
        setIndex(idx)
    }, [idx])

    console.log('WORKING WITH INDEX', { index, i, idx, l: ctx.list.length })

    let item;
    if (index >= 0) {
        item = ctx.list[index];
    } else {
        item = { event: '', date: null }
    }

    const it = JSON.parse(JSON.stringify(item));

    const [event, setEvent] = useState(item.event || '');

    const [date, setDate] = useState(item.date || new Date().toDateString());

    useEffect(() => {
        setEvent(it.event);
        setDate(it.date);
    }, [it.date, it.event])

    const save = () => {
        if (index >= 0) {
            ctx.list[index] = { event, date };
        } else {
            ctx.list.push({ event, date });
        }

        history.push('/');
    }

    return (
        <div className="body" >
            <textarea type="text" onChange={e => setEvent(e.target.value)} value={event} className="event" />
            <input type="date" onChange={e => setDate(e.target.value)} value={date} className="date" />
            <button className="buttonSave" onClick={save} >Save</button>
        </div>
    )
};