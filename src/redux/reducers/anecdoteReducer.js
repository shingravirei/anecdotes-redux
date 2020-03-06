import {
    getAllAnecdotes,
    createNewAnecdote,
    voteDb
} from '../../services/anecdotes';

const anecdoteReducer = (state = [], action) => {
    switch (action.type) {
        case 'VOTE':
            const { id } = action.data;

            return state.map(anecdote =>
                anecdote.id === id ? action.data : anecdote
            );

        case 'NEW':
            return [...state, action.data];

        case 'INIT_ANECDOTES':
            return action.data;

        case 'SORT':
            const sortedAnecdotes = state.sort((a, b) => {
                if (a.votes > b.votes) {
                    return -1;
                }

                if (a.votes < b.votes) {
                    return 1;
                }

                return 0;
            });

            return sortedAnecdotes;

        default:
            return state;
    }
};

const vote = anecdote => {
    return async dispatch => {
        const returnedAnecdote = await voteDb(anecdote);

        dispatch({
            type: 'VOTE',
            data: returnedAnecdote
        });
    };
};

const newAnecdote = anecdote => {
    return async dispatch => {
        const newAnecdote = await createNewAnecdote(anecdote);

        dispatch({
            type: 'NEW',
            data: newAnecdote
        });
    };
};

const initAnecdotes = () => {
    return async dispatch => {
        const anecdotes = await getAllAnecdotes();
        dispatch({
            type: 'INIT_ANECDOTES',
            data: anecdotes
        });
    };
};

const sortAnecdotes = () => ({ type: 'SORT' });

export {
    anecdoteReducer as default,
    vote,
    newAnecdote,
    initAnecdotes,
    sortAnecdotes
};
