import React from 'react';

import { connect } from 'react-redux';

import { vote, sortAnecdotes } from '../reducers/anecdoteReducer';
import { setNotification } from '../reducers/notificationReducer';

const Anecdote = ({
    content,
    votes,
    id,
    vote,
    sortAnecdotes,
    setNotification
}) => {
    return (
        <div>
            <div>{content}</div>
            <div>
                has {votes}
                <button
                    onClick={() => {
                        vote(id);
                        sortAnecdotes();
                        setNotification(`You voted for ${content}`);
                    }}
                >
                    vote
                </button>
            </div>
        </div>
    );
};

const mapDispatchToProps = {
    vote,
    sortAnecdotes,
    setNotification
};

export default connect(null, mapDispatchToProps)(Anecdote);
