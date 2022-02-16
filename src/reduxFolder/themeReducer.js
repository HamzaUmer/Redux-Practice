const reducered = (state={backgroundColor:"white"}, action) => {
    if(action.type === 'dark'){
        return state = {
            backgroundColor:action.payload
        }
    }
    else if (action.type === 'light'){
        return  state = {
            backgroundColor:action.payload
        }
    }
    else {
        return state;
    }
}

export default reducered;