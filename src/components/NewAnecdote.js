import React from 'react';

import { connect } from 'react-redux';

import { newAnecdote } from '../reducers/anecdoteReducer';
import { setNotification } from '../reducers/notificationReducer';

const NewAnecdote = ({ newAnecdote, setNotification }) => {
    const handleNewAnecdote = e => {
        e.preventDefault();

        const anecdote = e.target.newAnecdote.value;

        newAnecdote(anecdote);
        setNotification(`You added ${anecdote}`);

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

const mapDispatchToProps = {
    newAnecdote,
    setNotification
};

export default connect(null, mapDispatchToProps)(NewAnecdote);
