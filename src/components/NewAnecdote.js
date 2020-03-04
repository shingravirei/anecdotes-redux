import React from 'react';

import { newAnecdote } from '../reducers/anecdoteReducer';
import { setNotification } from '../reducers/notificationReducer';

const NewAnecdote = ({ store }) => {
    const handleNewAnecdote = e => {
        e.preventDefault();

        const anecdote = e.target.newAnecdote.value;

        store.dispatch(newAnecdote(anecdote));
        store.dispatch(setNotification(`You added ${anecdote}`));

        e.target.newAnecdote.value = '';
    };

    return (
        <>
            <h2>create new</h2>
            <form onSubmit={handleNewAnecdote}>
                <div>
                    <input name={'newAnecdote'} />
                </div>
                <button>create</button>
            </form>
        </>
    );
};

export default NewAnecdote;
