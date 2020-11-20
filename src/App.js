import React, { Component } from "react";
import { AppBar, Toolbar, TextField, Typography, Button, Grid, Paper } from '@material-ui/core'
import { withStyles } from "@material-ui/core/styles";

const styles = theme => ({
  root: {
    flexGrow: 1
  },
  button: {
    display: 'block',
    backgroundColor: 'white'
  },
  each1: {
    width: '55%',
    height: '50px',
    fontSize: '25px',
    backgroundColor: '#00ffff',
    color: ' #1a0000'
  },
  each: {
    width: '50%',
    height: '50px',
    fontSize: '30px',
    backgroundColor: '#00ffff',
    color: ' #1a0000'
  },
  title: {
    flexGrow: 1,
    textAlign: 'center',
    fontSize: "25px"
  },
  textbox: {
    height: '60px',
    backgroundColor: 'white',
    width: '100%',
    fontSize: '25px',
    textAlign: 'center',
    borderWidth: '3px',
    borderColor: 'red'
  }
});

class Counter extends Component {
  state = {
    text1: '0',

  }
  inc = () => {
    this.setState({
      text1: parseInt(this.state.text1) + 1
    })
  }
  dec = () => {
    this.setState({
      text1: parseInt(this.state.text1) - 1
    })
  }
  sets = (e) => {
    let value = e.target.value;
    if (!value || isNaN(value)) value = 0;

    this.setState({
      text1: value
    })
  }

  erase = () => {
    this.setState({
      text1: 0
    })
  }

  render() {
    console.log(this.state.text1)
    const { classes } = this.props;

    return (
      <div md={4} xs={4}>
        <AppBar position="static" color="secondary" style={{ textAlign: "center" }}>
          <Toolbar>
            <Typography variant="h6" className={classes.title}>
              Counter Application
            </Typography>
          </Toolbar>
        </AppBar>
        <div style={{ padding: "130px 5%", margin: "0 auto", maxWidth: "500px", borderRadius: "2%" }}>
          <Paper elevation={10} md={12} xs={12} style={{ padding: "5%" }}>
            <div style={{ marginLeft: "3%", marginRight: "3%", marginTop: "3%", marginBottom: "3%" }} md={4} xs={4}>

              <Grid container spacing={3}>
                <Grid item md={12} xs={12}>
                  <TextField id="text1" label="Input Value" variant="outlined"
                    fullWidth style={{ textAlign: "center" }}
                    onChange={(e) => this.sets(e)}
                    value={this.state.text1} />
                </Grid>
              </Grid>

              <Grid container spacing={3}>
                {/* <Grid item md={3} xs={3}></Grid> */}
                <Grid item md={5} xs={5}>
                  <Button variant="contained" onClick={() => this.inc()} fullWidth
                    color="secondary">
                    Increment
                   </Button>
                </Grid>
                <Grid item md={2} xs={2}></Grid>
                <Grid item md={5} xs={5}>
                  <Button variant="contained" onClick={() => this.dec()} fullWidth
                    color="secondary">
                    Decrement
                  </Button>
                </Grid>
              </Grid>

              <Grid container spacing={3}>
                <Grid item md={12} xs={12}>
                  <Button variant="contained" onClick={() => this.erase()} fullWidth
                    color="secondary">
                    Reset
                  </Button>
                </Grid>
              </Grid>
            </div>
          </Paper>
        </div>
      </div>
    )
  }
}
export default withStyles(styles)(Counter);


