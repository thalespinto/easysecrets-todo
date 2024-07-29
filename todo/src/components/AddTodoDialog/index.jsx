import * as React from "react";
import Button from "../Button";
import TextField from "@mui/material/TextField";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import { Box } from "@mui/material";
import { useDispatch } from "react-redux";
import { AddTodoAction } from "../../global/actions/TodoActions";

export default function AddTodoDialog({ open, setOpen }) {
    const dispatch = useDispatch();

    const handleClose = () => {
        setOpen(false);
    };

    return (
        <Dialog
            open={open}
            onClose={handleClose}
            PaperProps={{
                component: "form",
                onSubmit: (event) => {
                    event.preventDefault();
                    const formData = new FormData(event.currentTarget);
                    const formJson = Object.fromEntries(formData.entries());
                    const todo = {
                        ...formJson,
                        created_at: JSON.stringify(new Date()),
                        done: JSON.stringify(false),
                    };
                    dispatch(AddTodoAction(todo));
                },
            }}
            fullWidth
        >
            <DialogTitle>Insira os dados da tarefa</DialogTitle>
            <DialogContent>
                <Box
                    display={"flex"}
                    flexDirection={"column"}
                    gap={"10px"}
                    marginTop={"5px"}
                >
                    <TextField
                        autoFocus
                        required
                        id="title"
                        name="title"
                        label="Título"
                        variant="outlined"
                        fullWidth
                    />
                    <TextField
                        id="description"
                        name="description"
                        label="Descrição"
                        fullWidth
                        variant="outlined"
                        multiline
                    />
                </Box>
            </DialogContent>
            <DialogActions>
                <Button onClick={handleClose}>Cancelar</Button>
                <Button type="submit">Criar</Button>
            </DialogActions>
        </Dialog>
    );
}
