import React from 'react';

import { vote, sortAnecdotes } from '../reducers/anecdoteReducer';
import { setNotification } from '../reducers/notificationReducer';

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
                        store.dispatch(
                            setNotification(`You voted for ${content}`)
                        );
                    }}
                >
                    vote
                </button>
            </div>
        </div>
    );
};

export default Anecdote;
