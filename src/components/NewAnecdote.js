import React from 'react';

import { connect } from 'react-redux';

import { newAnecdote } from '../redux/reducers/anecdoteReducer';
import { setNotification } from '../redux/reducers/notificationReducer';

const NewAnecdote = ({ newAnecdote, setNotification }) => {
    const handleNewAnecdote = async e => {
        e.preventDefault();

        const anecdote = e.target.newAnecdote.value;

        e.target.newAnecdote.value = '';

        newAnecdote(anecdote);

        setNotification(`You added ${anecdote}`, 5);
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
