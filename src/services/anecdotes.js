import axios from 'axios';

const baseUrl = 'http://localhost:3001/anecdotes';

const getAllAnecdotes = async () => {
    const response = await axios.get(baseUrl);

    return response.data;
};

const createNewAnecdote = async anecdote => {
    const response = await axios.post(baseUrl, { content: anecdote, votes: 0 });

    return response.data;
};

const voteDb = async anecdote => {
    const object = { ...anecdote, votes: anecdote.votes + 1 };

    const response = await axios.put(`${baseUrl}/${anecdote.id}`, object);

    return response.data;
};

export { getAllAnecdotes, createNewAnecdote, voteDb };
