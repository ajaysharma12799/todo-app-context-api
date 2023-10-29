function todoReducer(state, action) {
    if (action.type === 'add_todo') {
        let todo = action.payload.todo;
        return [
            ...state,
            todo,
        ]
    }
    else if (action.type === 'edit_todo') {
        let id = action.payload.id;
        let todoText = action.payload.todoText;

        const updatedTodos = state.map((t) => {
            if (t.id === id) {
                t.data = todoText;
            }
            return t;
        });

        return updatedTodos;
    }
    else if (action.type === 'delete_todo') {
        let id = action.payload.id;

        const updatedTodos = state.filter((t) => t.id !== id);
        return updatedTodos;
    }
    else {
        return state;
    }
}

export default todoReducer;
