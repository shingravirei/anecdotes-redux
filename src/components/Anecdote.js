import React from 'react';

import { connect } from 'react-redux';

import { vote, sortAnecdotes } from '../redux/reducers/anecdoteReducer';
import { setNotification } from '../redux/reducers/notificationReducer';

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
                        vote({ id, votes, content });
                        sortAnecdotes();
                        setNotification(`You voted for ${content}`, 5);
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
