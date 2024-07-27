import TodoList from "./components/TodoList";
import { Box } from "@mui/material";
import AddTodoFab from "./components/AddTodoFab";

const Home = () => {
    return (
        <Box maxWidth={"600px"} margin={"auto"}>
            <TodoList />
            <AddTodoFab />
        </Box>
    );
};

export default Home;
