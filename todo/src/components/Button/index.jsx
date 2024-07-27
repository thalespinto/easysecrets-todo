import * as React from "react";
import { styled } from "@mui/material/styles";
import { Button as MUIButton, Typography } from "@mui/material";

const StyledButton = styled(MUIButton)(({ theme }) => ({
    height: "2rem",
    backgroundColor: theme.palette.primary.main,
    width: "100%",
    maxWidth: "100px",
    "&:hover": {
        backgroundColor: theme.palette.primary.light,
    },
    color: theme.palette.primary.contrastText,
    padding: theme.spacing(2.5),
}));

export default function Button({ children, ...props }) {
    return (
        <StyledButton {...props}>
            <Typography>{children}</Typography>
        </StyledButton>
    );
}
