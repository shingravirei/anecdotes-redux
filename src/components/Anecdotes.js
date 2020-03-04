import React from 'react';

import Anecdote from './Anecdote';

const Anecdotes = ({ store }) => {
    const { anecdotes, filter } = store.getState();

    const filteredAnecdotes = filter
        ? anecdotes.filter(anecdote =>
              anecdote.content.toLowerCase().includes(filter.toLowerCase())
          )
        : anecdotes;

    return (
        <div>
            {filteredAnecdotes.map(anecdote => (
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
