import React, { useEffect, useState } from 'react';

import { connect } from 'react-redux';

import {
    initAnecdotes,
    sortAnecdotes
} from '../redux/reducers/anecdoteReducer';

import Notification from './Notification';
import Anecdotes from './Anecdotes';
import NewAnecdote from './NewAnecdote';
import Filter from './Filter';

const App = ({ notification, initAnecdotes, sortAnecdotes }) => {
    const [firstTime, setFirstTime] = useState(true);

    useEffect(() => {
        if (firstTime) {
            initAnecdotes();
            setFirstTime(!firstTime);
        }
    }, [initAnecdotes, firstTime]);

    useEffect(() => {
        if (!firstTime) {
            sortAnecdotes();
        }
    }, [firstTime, sortAnecdotes]);

    return (
        <div>
            {notification && <Notification message={notification} />}
            <h2>Anecdotes</h2>
            <Filter />
            <Anecdotes />
            <NewAnecdote />
        </div>
    );
};

const mapStateToProps = state => {
    return {
        notification: state.notification
    };
};

const mapDispatchToProps = {
    initAnecdotes,
    sortAnecdotes
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
