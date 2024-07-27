import { useSelector } from "react-redux";
import TodoCard from "../../../components/TodoCard";
import { Box } from "@mui/material";

const TodoList = () => {
    const todos = useSelector((state) => state.Todo.todos);
    const sortedTodos = !!todos
        ? todos.sort(
              (a, b) =>
                  new Date(JSON.parse(b.todo.created_at)) -
                  new Date(JSON.parse(a.todo.created_at))
          )
        : [];

    return (
        <Box
            width={"100%"}
            margin={"auto"}
            display={"flex"}
            flexDirection={"column"}
            alignItems={"center"}
            gap={"10px"}
        >
            {!!sortedTodos &&
                sortedTodos.map((todo) => (
                    <TodoCard key={todo.id} todo={todo} />
                ))}
        </Box>
    );
};

export default TodoList;
