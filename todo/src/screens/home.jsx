import { Grid } from "@mui/material";
import TodoCard from "../components/TodoCard";

const Home = () => {
    return (
        <Grid
            width={"100%"}
            maxWidth={"800px"}
            margin={"auto"}
            display={"flex"}
            flexDirection={"column"}
            alignItems={"center"}
        >
            <TodoCard />
        </Grid>
    );
};

export default Home;
