import {
  Box,
  Divider,
  Grid,
  List,
  ListItem,
  Typography,
  Checkbox,
} from "@mui/material";
import { NavBar } from "./NavBar";
import useBoatStore from "../stores/boatStore";

export const EditBoats = () => {
  const boats = useBoatStore((state) => state.boatList);
  const toggleVisibility = useBoatStore((state) => state.toggleVisibility);
  return (
    <>
      <NavBar pageTitle="Edit Boats" />
      <>
        <Box>
          <List
            sx={{
              width: "100%",
              position: "relative",
              overflow: "auto",

              paddingTop: 0,
              paddingBottom: 0,
            }}
          >
            <ListItem key="ListH1">
              <Grid container spacing={2}>
                <Grid item xs={5}>
                  Boat Class
                </Grid>
                <Grid item xs={3}>
                  <Typography align="left">PY</Typography>
                </Grid>
                <Grid item xs={4}>
                  Finish Time
                </Grid>
              </Grid>{" "}
            </ListItem>
            <Divider />
          </List>
        </Box>
        <Box>
          <List
            sx={{
              position: "relative",
              overflow: "auto",
              maxHeight: "100vh",
            }}
          >
            {boats.map((boat) => (
              <Box key={boat.id}>
                <ListItem>
                  <Box sx={{ flexGrow: 1 }}>
                    <Grid container spacing={2}>
                      <Grid item xs={5}>
                        {boat.boatName}
                      </Grid>
                      <Grid item xs={3}>
                        <Typography align="left">{boat.boatPY}</Typography>
                      </Grid>
                      <Grid item xs={4}>
                        <Checkbox
                          checked={boat.visible}
                          onClick={() => toggleVisibility(boat.id)}
                        />
                      </Grid>
                    </Grid>
                  </Box>
                </ListItem>
                <Divider />
              </Box>
            ))}
          </List>
        </Box>
      </>
    </>
  );
};
