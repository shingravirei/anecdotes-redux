import React from 'react';

import { setFilter, resetFilter } from '../reducers/filterReducer';

const Filter = ({ store }) => {
    const handleChange = e => {
        const newFilter = e.target.value;

        if (store.getState().filter === '') {
            store.dispatch(resetFilter());
        } else {
            store.dispatch(setFilter(newFilter));
        }
    };
    const style = {
        marginBottom: 10
    };

    return (
        <div style={style}>
            filter <input onChange={handleChange} />
        </div>
    );
};

export default Filter;
