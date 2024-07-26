import { useState } from "react";
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

const Card = styled(Muicard)(({ theme }) => ({
    height: "120px",
    backgroundColor: "#FAFAFA",
    width: "90%",
    maxWidth: "600px",
    "&:hover": {
        backgroundColor: "#C1C1C1",
    },
    color: theme.palette.text.primary,
    padding: "10px 20px",
    display: "flex",
    alignItems: "flex-start",
}));

export default function TodoCard({ todo }) {
    const [editedTodo, setEditedTodo] = useState(todo);
    const [editing, setEditing] = useState(false);
    const dispatch = useDispatch();

    const handleSend = () => {
        dispatch(EditTodoAction(editedTodo));
        setEditing(false);
    };

    const onTitleInputChange = (event) => {
        setEditedTodo((state) => ({
            id: state.id,
            todo: {
                ...state.todo,
                title: event.target.value,
            },
        }));
    };

    const onDescriptionInputChange = (event) => {
        setEditedTodo((state) => ({
            id: state.id,
            todo: {
                ...state.todo,
                description: event.target.value,
            },
        }));
    };

    return (
        <Card>
            <Box width="100%">
                {editing ? (
                    <>
                        <Box
                            display={"flex"}
                            flexDirection={"column"}
                            gap={"10px"}
                        >
                            <TextField
                                id="outlined-basic"
                                label="Título"
                                variant="outlined"
                                defaultValue={todo.todo.title}
                                onChange={onTitleInputChange}
                                size="small"
                                required
                            />
                            <TextField
                                id="outlined-basic"
                                label="Descrição"
                                variant="outlined"
                                defaultValue={todo.todo.description}
                                onChange={onDescriptionInputChange}
                                size="small"
                                multiline
                            />
                        </Box>
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
                        <IconButton aria-label="enviar" onClick={handleSend}>
                            <SendOutlinedIcon />
                        </IconButton>
                    </Tooltip>
                </>
            ) : (
                <ActionsMenu
                    deleteCallBack={() => dispatch(RemoveTodoAction(todo))}
                    editCallBack={() => setEditing(true)}
                />
            )}
        </Card>
    );
}
