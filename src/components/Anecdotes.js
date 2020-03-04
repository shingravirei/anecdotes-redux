import React from 'react';

import Anecdote from './Anecdote';

const Anecdotes = ({ store }) => {
    const anecdotes = store.getState();

    return (
        <div>
            <h2>Anecdotes</h2>
            {anecdotes.map(anecdote => (
                <Anecdote
                    store={store}
                    key={anecdote.id}
                    content={anecdote.content}
                    id={anecdote.id}
                    votes={anecdote.votes}
                />
            ))}
        </div>
    );
};

export default Anecdotes;
