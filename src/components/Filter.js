import React from 'react';

import { connect } from 'react-redux';

import { setFilter, resetFilter } from '../reducers/filterReducer';

const Filter = ({ filter, setFilter, resetFilter }) => {
    const handleChange = e => {
        const newFilter = e.target.value;

        if (filter === '') {
            resetFilter();
        } else {
            setFilter(newFilter);
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

const mapStateToProps = state => ({ filter: state.filter });

const mapDispatchToProps = {
    setFilter,
    resetFilter
};

export default connect(mapStateToProps, mapDispatchToProps)(Filter);
