import { useState } from "react";
import { Grid } from "@mui/material";
import TodoCard from "../components/TodoCard";
import { useSelector } from "react-redux";
import Fab from "@mui/material/Fab";
import AddIcon from "@mui/icons-material/Add";
import AddTodoDialog from "../components/AddTodoDialog";

const Home = () => {
    const [openAddTodoDialog, setOpenAddTodoDialog] = useState(false);

    const todos = useSelector((state) => state.Todo.todos);
    const sortedTodos = !!todos
        ? todos.sort(
              (a, b) =>
                  new Date(JSON.parse(b.todo.created_at)) -
                  new Date(JSON.parse(a.todo.created_at))
          )
        : [];

    return (
        <Grid
            width={"100%"}
            maxWidth={"800px"}
            margin={"auto"}
            display={"flex"}
            flexDirection={"column"}
            alignItems={"center"}
        >
            {!!sortedTodos &&
                sortedTodos.map((todo) => (
                    <TodoCard key={todo.id} todo={todo} />
                ))}
            <div style={{ position: "fixed", bottom: 16, right: 16 }}>
                <Fab
                    color="primary"
                    aria-label="add"
                    onClick={() => setOpenAddTodoDialog(true)}
                >
                    <AddIcon />
                </Fab>
            </div>
            {openAddTodoDialog && (
                <AddTodoDialog
                    open={openAddTodoDialog}
                    setOpen={setOpenAddTodoDialog}
                />
            )}
        </Grid>
    );
};

export default Home;
