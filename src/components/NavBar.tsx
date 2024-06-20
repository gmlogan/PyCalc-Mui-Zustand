import {
  AppBar,
  Toolbar,
  IconButton,
  Typography,
  Drawer,
  ListItem,
  List,
  Divider,
  Box,
  Link,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import { useState } from "react";

interface PropTypes {
  pageTitle: string;
}

export const NavBar = ({ pageTitle }: PropTypes) => {
  const [open, setOpen] = useState(false);
  const toggleDrawer = (newOpen: boolean) => () => {
    setOpen(newOpen);
  };
  return (
    <>
      <Box>
        <AppBar position="fixed" color="primary">
          <Toolbar>
            <IconButton onClick={() => setOpen(true)}>
              <MenuIcon style={{ color: "white" }} />
            </IconButton>
            <Typography variant="h6" component="div">
              {pageTitle}
            </Typography>
          </Toolbar>
        </AppBar>
        <Toolbar />
      </Box>

      <Drawer open={open} onClose={toggleDrawer(false)}>
        <Box sx={{ paddingRight: "1em" }}>
          <List sx={{ paddingLeft: "1em" }}>
            <Typography variant="h6" sx={{ fontWeight: "bold" }}>
              Settings
            </Typography>
            <Divider />
            <ListItem>
              <Link href="/">Results</Link>
            </ListItem>
            <ListItem>
              <Link href="/timings">Set Time</Link>
            </ListItem>
            <ListItem>
              <Link href="/editboats">Edit Boats</Link>
            </ListItem>
            <ListItem>
              <Link href="/about">About</Link>
            </ListItem>
          </List>
        </Box>
      </Drawer>
    </>
  );
};
