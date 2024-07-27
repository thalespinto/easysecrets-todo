export const getAllTodos = (state) => {
    return state.Todo.todos;
};

export const getDoneTodos = (state) => {
    return state.Todo.todos.filter((todo) => !!JSON.parse(todo.todo.done));
};

export const getUndoneTodos = (state) => {
    return state.Todo.todos.filter((todo) => !JSON.parse(todo.todo.done));
};
