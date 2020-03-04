import React from 'react';

import { vote, sortAnecdotes } from '../reducers/anecdoteReducer';

const Anecdote = ({ content, votes, id, store }) => {
    return (
        <div>
            <div>{content}</div>
            <div>
                has {votes}
                <button
                    onClick={() => {
                        store.dispatch(vote(id));
                        store.dispatch(sortAnecdotes());
                    }}
                >
                    vote
                </button>
            </div>
        </div>
    );
};

export default Anecdote;
