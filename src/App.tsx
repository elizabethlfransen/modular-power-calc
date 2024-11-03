
import {createTheme, ThemeProvider} from "@mui/material";
import {RouterProvider} from "./Router.tsx";
import AppScaffold from "./components/AppScaffold.tsx";


const theme = createTheme({
    palette: {
        mode: "dark",
    }
})

function App() {
  return (
    <ThemeProvider theme={theme}>
        <RouterProvider>
            <AppScaffold/>
        </RouterProvider>
    </ThemeProvider>
  )
}

export default App
