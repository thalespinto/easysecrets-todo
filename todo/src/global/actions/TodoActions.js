import { v4 as uuidv4 } from "uuid";

export const AddTodoAction = (todo) => (dispatch, getState) => {
    const {
        Todo: { todos },
    } = getState();
    const hasTodo = todos.find((record) => record.todo === todo);
    if (!hasTodo && todo !== "") {
        dispatch({
            type: "ADD_TODO",
            payload: [{ id: uuidv4(), todo }, ...todos],
        });
    }
};

export const RemoveTodoAction = (todo) => (dispatch, getState) => {
    const {
        Todo: { todos },
    } = getState();
    if (todo !== "") {
        dispatch({
            type: "REMOVE_TODO",
            payload: todos.filter((record) => record.id !== todo.id),
        });
    }
};

export const EditTodoAction = (todo) => (dispatch, getState) => {
    const {
        Todo: { todos },
    } = getState();
    if (todo !== "") {
        const updatedTodos = todos.map((record) =>
            record.id === todo.id ? todo : record
        );

        dispatch({
            type: "EDIT_TODO",
            payload: updatedTodos,
        });
    }
};
