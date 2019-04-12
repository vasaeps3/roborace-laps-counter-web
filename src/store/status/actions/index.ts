export const STATUS_CHANGED = 'status/status-changed';


export const statusChanged = (status = false, isError = false) => {
    return {
        type: STATUS_CHANGED,
        status: status,
        isError: isError
    };
};