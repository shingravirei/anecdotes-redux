import React from 'react';

import Anecdotes from './components/Anecdotes';
import NewAnecdote from './components/NewAnecdote';

const App = ({ store }) => {
    return (
        <div>
            <Anecdotes store={store} />
            <NewAnecdote store={store} />
        </div>
    );
};

export default App;
