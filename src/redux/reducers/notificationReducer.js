const notificationReducer = (state = null, action) => {
    switch (action.type) {
        case 'MESSAGE':
            return action.message;

        default:
            return state;
    }
};

const setNotification = (message, time) => {
    return async dispatch => {
        dispatch({
            type: 'MESSAGE',
            message
        });

        setTimeout(() => {
            dispatch({
                type: 'MESSAGE',
                message: null
            });
        }, time * 1000);
    };
};

export { notificationReducer as default, setNotification };
