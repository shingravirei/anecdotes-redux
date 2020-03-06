const filterReducer = (state = null, action) => {
    switch (action.type) {
        case 'SET_FILTER':
            return action.filter;

        case 'RESET_FILTER':
            return null;

        default:
            return state;
    }
};

const setFilter = filter => ({ type: 'SET_FILTER', filter });

const resetFilter = () => ({ type: 'RESET_FILTER' });

export { filterReducer as default, setFilter, resetFilter };
