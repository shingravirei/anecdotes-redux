import React from 'react';

import { connect } from 'react-redux';

import Anecdote from './Anecdote';

const Anecdotes = ({ anecdotes }) => {
    return (
        <div>
            {anecdotes.map(anecdote => (
                <Anecdote
                    key={anecdote.id}
                    content={anecdote.content}
                    id={anecdote.id}
                    votes={anecdote.votes}
                />
            ))}
        </div>
    );
};

const filterAnecdotes = ({ anecdotes, filter }) =>
    filter
        ? anecdotes.filter(anecdote =>
              anecdote.content.toLowerCase().includes(filter.toLowerCase())
          )
        : anecdotes;

const mapStateToProps = state => ({
    anecdotes: filterAnecdotes(state),
    filter: state.filter
});

export default connect(mapStateToProps)(Anecdotes);
