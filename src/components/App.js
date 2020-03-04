import React, { useEffect } from 'react';

import { connect } from 'react-redux';

import Notification from './Notification';
import Anecdotes from './Anecdotes';
import NewAnecdote from './NewAnecdote';
import Filter from './Filter';

import { resetNotification } from '../reducers/notificationReducer';

const App = ({ notification, resetNotification }) => {
    useEffect(() => {
        if (notification) {
            setTimeout(() => {
                resetNotification();
            }, 5000);
        }
    }, [notification, resetNotification]);

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
    resetNotification
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
