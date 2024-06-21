import { Box, List, ListItem, Divider, Grid, Typography } from "@mui/material";
import { NavBar } from "./NavBar";
import useBoatStore from "../stores/boatStore";
import dayjs from "dayjs";

export const ResultList = () => {
  const boats = useBoatStore((state) => state.boatList);
  const startTime = useBoatStore((state) => dayjs(state.startTime));

  //setStartTime(dayjs());
  console.log(typeof startTime);

  return (
    <>
      <NavBar pageTitle="Calculated Results" />
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
              <Box key={boat.id} hidden={!boat.visible}>
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
                        {startTime.format("HH:mm:ss")}
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
