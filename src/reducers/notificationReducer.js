const notificationReducer = (state = null, action) => {
    switch (action.type) {
        case 'MESSAGE':
            return action.message;

        case 'RESET':
            return null;

        default:
            return state;
    }
};

const setNotification = message => ({ type: 'MESSAGE', message });

const resetNotification = () => ({ type: 'RESET' });

export { notificationReducer as default, setNotification, resetNotification };
