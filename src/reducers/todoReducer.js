export const todoReducer = (state = [], action) => {
    switch (action.type) {
        case "ADD_TODO":
            return [...state, action.payload];
        case "REMOVE_TODO":
            return state.filter((_, index) => index !== action.payload);
        case "COMPLETE_TODO":
            return state.map((todo, index) => 
                index === action.payload 
                    ? {...todo, isCompleted: !todo.isCompleted}
                    : todo
                );
        case "CLEAR_ALL":
            return [];
        default:
            return state;
    }
};
