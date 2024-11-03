import {
    AppBar,
    Box,
    CssBaseline,
    Drawer,
    List,
    ListItem,
    ListItemButton,
    ListItemIcon,
    ListItemText, ListSubheader,
    Toolbar,
    Typography
} from "@mui/material";
import {AppRoute, routeCategories, routes, VisibleAppRoute} from "../Router.tsx";
import {ReactNode} from "react";

const drawerWidth = 360;

function AppListItem(route: VisibleAppRoute) {
    return (
        <ListItem disablePadding>
            <ListItemButton component={"a"} href={route.path}>
                <ListItemIcon>
                    {route.icon}
                </ListItemIcon>
                <ListItemText primary={route.label}/>
            </ListItemButton>
        </ListItem>
    )
}

export interface AppScaffoldProps {
    children: ReactNode;
}

interface RouteSectionProps {
    title?: string;
    routes: AppRoute[];
}

function RouteSection({title, routes}: RouteSectionProps) {
    return (<>
        {
            title && (<ListSubheader>{title}</ListSubheader>)
        }
        {
            routes
                .map((route) => (<AppListItem key={route.path} {...route}/>))
        }
    </>)
}

const UNDEFINED_KEY = "UNDEFINED";

const categorizedRoutes = routeCategories.map(category => ({
    title: category,
    routes: routes.filter(route => route.category === category),
}));

export default function AppScaffold({children}: AppScaffoldProps) {

    return (
        <Box sx={{display: 'flex'}}>
            <CssBaseline/>
            <AppBar position="fixed" sx={{zIndex: (theme) => theme.zIndex.drawer + 1}}>
                <Toolbar>
                    <Typography variant="h6" noWrap component="div">
                        Modular Power Calculator
                    </Typography>
                </Toolbar>
            </AppBar>
            <Drawer
                variant="permanent"
                sx={{
                    width: drawerWidth,
                    flexShrink: 0,
                    [`& .MuiDrawer-paper`]: {width: drawerWidth, boxSizing: 'border-box'},
                }}
            >
                <Toolbar/>
                <Box sx={{overflow: 'auto'}}>
                    <List>
                        {
                            categorizedRoutes.map(routeCategory => (
                                <RouteSection key={routeCategory.title ?? UNDEFINED_KEY} {...routeCategory}/>
                            ))
                        }
                    </List>
                </Box>
            </Drawer>
            <Box sx={{flexGrow: 1, p: 3}}>
                <Toolbar/>
                <Box component="main">
                    {children}
                </Box>
                <Box component="footer">
                    <Typography variant="caption">
                        Data taken from <a
                        href="https://docs.ficsit.app/refinedrd/latest/rp/buildings/modularpower/index.html">Modular Power
                        Documentation</a>
                    </Typography>
                </Box>
            </Box>
        </Box>
    );
}