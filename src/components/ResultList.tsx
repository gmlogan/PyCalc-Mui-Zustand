import { Box, List, ListItem, Divider, Grid, Typography } from "@mui/material";
import { NavBar } from "./NavBar";

export const ResultList = () => {
  const testItems = [...Array(100).keys()];
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
            {testItems.map((item) => (
              <Box key={item}>
                <ListItem>
                  <Box sx={{ flexGrow: 1 }}>
                    <Grid container spacing={2}>
                      <Grid item xs={5}>
                        D Zero
                      </Grid>
                      <Grid item xs={3}>
                        <Typography align="left">{item}</Typography>
                      </Grid>
                      <Grid item xs={4}>
                        HH:mm:ss
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
