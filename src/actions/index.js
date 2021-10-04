export const addTodo = (todo) => {
    return {
        type: "ADD_TODO",
        payload: {
            todo: todo,
            isCompleted: false,
        },
    };
};

export const removeTodo = (index) => {
    return {
        type: "REMOVE_TODO",
        payload: index,
    }
}

export const completeTodo = (index) => {
    return {
        type: "COMPLETE_TODO",
        payload: index,
    }
}

export const changeInput = (value) => {
    return {
        type: "INPUT_CHANGE",
        payload: value,
    }
}

export const clearAll = () => {
    return {
        type: "CLEAR_ALL",
    }
}