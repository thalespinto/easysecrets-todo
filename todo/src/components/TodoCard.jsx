import * as React from "react";
import Slider from "@mui/material/Slider";
import { alpha, styled } from "@mui/material/styles";
import { Card as Muicard } from "@mui/material";

const Card = styled(Muicard)(({ theme }) => ({
    height: "100px",
    backgroundColor: "#FAFAFA",
    width: "90%",
    maxWidth: "600px",
    "&:hover": {
        backgroundColor: "#C1C1C1"
    }
}));

export default function TodoCard() {
    return <Card />;
}
