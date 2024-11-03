import {createTheme, ThemeProvider} from "@mui/material";
import {RouterProvider} from "./Router.tsx";


const theme = createTheme({
    palette: {
        mode: "dark",
    }
})

function App() {
    return (
        <ThemeProvider theme={theme}>
            <RouterProvider/>
        </ThemeProvider>
    )
}

export default App
