export const deposit = (amount) => {
    return (dispatch) => {
        dispatch({
            type: 'deposit',
            payload: amount
        })
    }
}

export const withdraw = (amount) => {
    return (dispatch) => {
        dispatch({
            type: 'withdraw',
            payload: amount
        })
    }
}

export const dark = (theme) => {
    return (dispatch) => {
        dispatch({
            type: 'dark',
            payload: theme
        })
    }
}

export const light = (theme) => {
    return (dispatch) => {
        dispatch({
            type: 'light',
            payload: theme
        })
    }
}
