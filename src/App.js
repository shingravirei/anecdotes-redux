import React, { useEffect } from 'react';

import Notification from './components/Notification';
import Anecdotes from './components/Anecdotes';
import NewAnecdote from './components/NewAnecdote';
import Filter from './components/Filter';

import { resetNotification } from './reducers/notificationReducer';

const App = ({ store }) => {
    const { notification } = store.getState();

    useEffect(() => {
        if (notification) {
            setTimeout(() => {
                store.dispatch(resetNotification());
            }, 5000);
        }
    }, [notification, store]);

    return (
        <div>
            {notification && <Notification message={notification} />}
            <h2>Anecdotes</h2>
            <Filter store={store} />
            <Anecdotes store={store} />
            <NewAnecdote store={store} />
        </div>
    );
};

export default App;
