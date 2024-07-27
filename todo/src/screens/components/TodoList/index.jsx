import { useState } from "react";
import { useSelector } from "react-redux";
import TodoCard from "../../../components/TodoCard";
import { Box } from "@mui/material";
import {
    getAllTodos,
    getDoneTodos,
    getUndoneTodos,
} from "../../../global/selectors";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";

const TodoList = () => {
    const [filter, setFilter] = useState("Todos");

    const filters = ["Todos", "Concluídas", "A fazer"];

    const handleChangeFilter = (event) => {
        setFilter(event.target.value);
    };

    const handleFiltering = (filter) => {
        switch (filter) {
            case filters[0]:
                return getAllTodos;
            case filters[1]:
                return getDoneTodos;
            case filters[2]:
                return getUndoneTodos;
            default:
                break;
        }
    };

    const todos = useSelector(handleFiltering(filter));
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
            <Box alignSelf={"flex-end"} sx={{ minWidth: 120 }}>
                <FormControl fullWidth>
                    <InputLabel id="filter">Filtrar</InputLabel>
                    <Select
                        labelId="filter"
                        id="filter-select"
                        value={filter}
                        label="Filter"
                        onChange={handleChangeFilter}
                        size="small"
                    >
                        {filters.map((filter) => (
                            <MenuItem value={filter}>{filter}</MenuItem>
                        ))}
                    </Select>
                </FormControl>
            </Box>
            {!!sortedTodos &&
                sortedTodos.map((todo) => (
                    <TodoCard key={todo.id} todo={todo} />
                ))}
        </Box>
    );
};

export default TodoList;
