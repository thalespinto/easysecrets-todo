export const AddTodoAction = (todo) => (dispatch, getState) => {
    const {
        Todo: { todos },
    } = getState();
    console.log(todo);
    const hasTodo = todos.find((record) => record.todo === todo);
    if (!hasTodo && todo !== "") {
        dispatch({
            type: "ADD_TODO",
            payload: [{ id: todo, todo }, ...todos],
        });
    }
};

export const RemoveTodoAction = (todo) => (dispatch, getState) => {
    const {
        Todo: { todos },
    } = getState();
    console.log(todo);
    if (todo !== "") {
        dispatch({
            type: "REMOVE_TODO",
            payload: todos.filter((record) => record.id !== todo.id),
        });
    }
};
