import React from 'react';

import { newAnecdote } from '../reducers/anecdoteReducer';

const NewAnecdote = ({ store }) => {
    const handleNewAnecdote = e => {
        e.preventDefault();
        store.dispatch(newAnecdote(e.target.newAnecdote.value));
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
