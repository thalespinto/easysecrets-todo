import { useRef, useState } from "react";
import { styled } from "@mui/material/styles";
import {
    Card as Muicard,
    Typography,
    Box,
    IconButton,
    Tooltip,
    TextField,
} from "@mui/material";
import { useDispatch } from "react-redux";
import {
    EditTodoAction,
    RemoveTodoAction,
} from "../../global/actions/TodoActions";
import ActionsMenu from "./components/ActionsMenu";
import CancelOutlinedIcon from "@mui/icons-material/CancelOutlined";
import SendOutlinedIcon from "@mui/icons-material/SendOutlined";

const Card = styled(Muicard)(({ theme, editing, done }) => ({
    height: "120px",
    backgroundColor: done
        ? theme.palette.success.light
        : theme.palette.grey[100],
    width: "90%",
    maxWidth: "600px",
    "&:hover": {
        backgroundColor: done
            ? editing
                ? theme.palette.success.light
                : theme.palette.success.main
            : editing
            ? theme.palette.grey[100]
            : theme.palette.grey[300],
    },
    color: done
        ? theme.palette.success.contrastText
        : theme.palette.text.primary,
    padding: "10px 20px",
    display: "flex",
    alignItems: "flex-start",
}));

export default function TodoCard({ todo }) {
    const formRef = useRef(null);

    const [editing, setEditing] = useState(false);
    const dispatch = useDispatch();

    const handleSend = () => {
        formRef.current.requestSubmit();
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        const formData = new FormData(event.currentTarget);
        const formJson = Object.fromEntries(formData.entries());
        const formTodo = {
            id: todo.id,
            todo: {
                ...todo.todo,
                title: formJson.title,
                description: formJson.description,
            },
        };
        dispatch(EditTodoAction(formTodo));
        setEditing(false);
    };

    const handleChangeDoneValue = () => {
        const newValue = {
            id: todo.id,
            todo: {
                ...todo.todo,
                done: JSON.stringify(!JSON.parse(todo.todo.done)),
            },
        };
        dispatch(EditTodoAction(newValue));
    };

    return (
        <Card editing={editing} done={JSON.parse(todo.todo.done)}>
            <Box width="100%">
                {editing ? (
                    <>
                        <form
                            ref={formRef}
                            action="submit"
                            onSubmit={handleSubmit}
                        >
                            <Box
                                display={"flex"}
                                flexDirection={"column"}
                                gap={"10px"}
                            >
                                <TextField
                                    id="outlined-basic"
                                    name="title"
                                    label="Título"
                                    variant="outlined"
                                    defaultValue={todo.todo.title}
                                    size="small"
                                    required
                                />
                                <TextField
                                    id="outlined-basic"
                                    name="description"
                                    label="Descrição"
                                    variant="outlined"
                                    defaultValue={todo.todo.description}
                                    size="small"
                                    multiline
                                />
                            </Box>
                        </form>
                    </>
                ) : (
                    <>
                        <Typography variant="h5">{todo.todo.title}</Typography>
                        <Typography variant="subtitle">
                            {todo.todo.description}
                        </Typography>
                    </>
                )}
            </Box>
            {editing ? (
                <>
                    <Tooltip title="Cancelar">
                        <IconButton
                            aria-label="cancel"
                            onClick={() => setEditing(false)}
                        >
                            <CancelOutlinedIcon />
                        </IconButton>
                    </Tooltip>
                    <Tooltip title="Enviar">
                        <IconButton onClick={handleSend} aria-label="enviar">
                            <SendOutlinedIcon />
                        </IconButton>
                    </Tooltip>
                </>
            ) : (
                <ActionsMenu
                    deleteCallback={() => dispatch(RemoveTodoAction(todo))}
                    editCallback={() => setEditing(true)}
                    changeDoneCallback={handleChangeDoneValue}
                    isDone={JSON.parse(todo.todo.done)}
                />
            )}
        </Card>
    );
}
