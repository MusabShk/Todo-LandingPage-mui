// import logo from './logo.svg';
import "./App.css";
import { Container } from "@mui/material";
import { Grid, Typography, Card, CardContent, Slider } from "@mui/material";
import FormGroup from "@mui/material/FormGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Box from "@mui/material/Box";
import Fab from "@mui/material/Fab";
import { TiPlus } from "react-icons/ti";
import { useState, forwardRef } from "react";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import Slide from "@mui/material/Slide";
import Button from "@mui/material/Button";

const bull = (
  <Box
    component="span"
    sx={{ display: "inline-block", mx: "2px", transform: "scale(0.8)" }}
  >
    •
  </Box>
);

const Transition = forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

const App = () => {
  const [open, setOpen] = useState(false);
  const [category, setCategory] = useState("");
  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div className="App" style={{ backgroundColor: "#354492" }}>
      <Container maxWidth="lg">
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <Typography
              variant="h3"
              gutterBottom
              component="div"
              style={{
                fontFamily: "Titillium Web",
                fontWeight: 600,
                color: "white",
                paddingTop: 20,
              }}
            >
              What's up, User
            </Typography>
          </Grid>

          <Grid item xs={12}>
            <Typography
              variant="h6"
              gutterBottom
              component="div"
              style={{
                fontFamily: "Titillium Web",
                fontWeight: 600,
                color: "#9BA3CC",
                paddingTop: 20,
                fontSize: 15,
              }}
            >
              CATEGORIES
            </Typography>
          </Grid>
        </Grid>
        <Grid container spacing={2} style={{ paddingTop: 20 }}>
          <Grid item xs={12} md={4} sm={6}>
            <Card sx={{ minWidth: 275, borderRadius: 8 }}>
              <CardContent style={{ backgroundColor: "#000C49" }}>
                <Typography
                  style={{
                    backgroundColor: "#000C49",
                    color: "#9BA3CC",
                    fontFamily: "Titillium Web",
                    fontWeight: 300,
                  }}
                  sx={{ fontSize: 14 }}
                  color="text.secondary"
                  gutterBottom
                >
                  40 task
                </Typography>
                <Typography
                  style={{
                    backgroundColor: "#000C49",
                    color: "white",
                    fontFamily: "Titillium Web",
                    fontWeight: 600,
                    fontSize: 25,
                  }}
                  sx={{ fontSize: 14 }}
                  color="text.secondary"
                  gutterBottom
                >
                  Business
                </Typography>
                <Slider
                  aria-label="Temperature"
                  defaultValue={30}
                  color="secondary"
                  style={{ backgroundColor: "#000C49", color: "#F3004A" }}
                  disabled
                />
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={12} md={4} sm={6}>
            <Card sx={{ minWidth: 275, borderRadius: 8 }}>
              <CardContent style={{ backgroundColor: "#000C49" }}>
                <Typography
                  style={{
                    backgroundColor: "#000C49",
                    color: "#9BA3CC",
                    fontFamily: "Titillium Web",
                    fontWeight: 300,
                  }}
                  sx={{ fontSize: 14 }}
                  color="text.secondary"
                  gutterBottom
                >
                  27 task
                </Typography>
                <Typography
                  style={{
                    backgroundColor: "#000C49",
                    color: "white",
                    fontFamily: "Titillium Web",
                    fontWeight: 600,
                    fontSize: 25,
                  }}
                  sx={{ fontSize: 14 }}
                  color="text.secondary"
                  gutterBottom
                >
                  Personal
                </Typography>
                <Slider
                  aria-label="Temperature"
                  defaultValue={30}
                  color="secondary"
                  style={{ backgroundColor: "#000C49", color: "#C500CA" }}
                  disabled
                />
              </CardContent>
            </Card>
          </Grid>
        </Grid>
        <Grid
          container
          spacing={2}
          style={{ paddingTop: 80, paddingBottom: 20 }}
        >
          <Grid item xs={12}>
            <Typography
              variant="h6"
              gutterBottom
              component="div"
              style={{
                fontFamily: "Titillium Web",
                fontWeight: 600,
                color: "#9BA3CC",
                fontSize: 15,
              }}
            >
              PENDING TASKS
            </Typography>
          </Grid>
          <Grid item xs={12}>
            <Card
              sx={{
                minWidth: 275,
                borderRadius: 8,
                backgroundColor: "#000C49",
              }}
            >
              <CardContent>
                <FormGroup>
                  <FormControlLabel
                    control={
                      <Checkbox
                        defaultChecked
                        style={{ color: "#F3004A", fontSize: 100 }}
                      />
                    }
                    label={
                      <Typography
                        style={{
                          color: "#white",
                          fontFamily: "Titillium Web",
                          fontWeight: 600,
                        }}
                      >
                        Meeting with team at 7 PM
                      </Typography>
                    }
                    style={{ color: "white" }}
                  />
                </FormGroup>
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={12}>
            <Card
              sx={{
                minWidth: 275,
                borderRadius: 8,
                backgroundColor: "#000C49",
              }}
            >
              <CardContent>
                <FormGroup>
                  <FormControlLabel
                    control={
                      <Checkbox
                        defaultChecked
                        style={{ color: "#C500CA", fontSize: 100 }}
                      />
                    }
                    label={
                      <Typography
                        style={{
                          color: "#white",
                          fontFamily: "Titillium Web",
                          fontWeight: 600,
                        }}
                      >
                        All five prayers of today
                      </Typography>
                    }
                    style={{ color: "white" }}
                  />
                </FormGroup>
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={12}>
            <Card
              sx={{
                minWidth: 275,
                borderRadius: 8,
                backgroundColor: "#000C49",
              }}
            >
              <CardContent>
                <FormGroup>
                  <FormControlLabel
                    control={
                      <Checkbox style={{ color: "#C500CA", fontSize: 100 }} />
                    }
                    label={
                      <Typography
                        style={{
                          color: "#white",
                          fontFamily: "Titillium Web",
                          fontWeight: 600,
                        }}
                      >
                        Pay for rent
                      </Typography>
                    }
                    style={{ color: "white" }}
                  />
                </FormGroup>
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={12}>
            <Card
              sx={{
                minWidth: 275,
                borderRadius: 8,
                backgroundColor: "#000C49",
              }}
            >
              <CardContent>
                <FormGroup>
                  <FormControlLabel
                    control={
                      <Checkbox
                        defaultChecked
                        style={{ color: "#F3004A", fontSize: 100 }}
                      />
                    }
                    label={
                      <Typography
                        style={{
                          color: "#white",
                          fontFamily: "Titillium Web",
                          fontWeight: 600,
                        }}
                      >
                        Check emails
                      </Typography>
                    }
                    style={{ color: "white" }}
                  />
                </FormGroup>
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={12}>
            <Fab color="primary" aria-label="add" onClick={handleClickOpen}>
              <TiPlus />
            </Fab>
            <Dialog
              open={open}
              TransitionComponent={Transition}
              keepMounted
              onClose={handleClose}
              aria-describedby="alert-dialog-slide-description"
            >
              <DialogTitle>{"Add task"}</DialogTitle>
              <DialogContent>
                <DialogContentText id="alert-dialog-slide-description">
                  You can add your task here
                </DialogContentText>
              </DialogContent>
              <DialogActions>
                <Button onClick={handleClose}>Submit</Button>
              </DialogActions>
            </Dialog>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
};

export default App;
