import React from "react";
import { withStyles } from "@material-ui/core/styles";
import TextField from "./CustomTextField";
import InputAdornment from "@material-ui/core/InputAdornment";
import IconButton from "@material-ui/core/IconButton";
import VisibilityOff from "@material-ui/icons/VisibilityOff";
import Visibility from "@material-ui/icons/Visibility";

const styles = theme => ({
  root: {
    display: "flex",
    flexWrap: "wrap"
  },
  textField: {
    flexBasis: 280,
    margin: theme.spacing.unit * 2
  }
});

class Demo extends React.Component {
  state = {
    amount: "",
    password: "",
    weight: "",
    weightRange: "",
    showPassword: false
  };

  handleChange = prop => event => {
    this.setState({ [prop]: event.target.value });
  };

  handleClickShowPassword = () => {
    this.setState(state => ({ showPassword: !state.showPassword }));
  };

  render() {
    const { classes } = this.props;
    return [
      <div key="one" variant="outlined">
        <TextField
          id="outlined-adornment-password"
          className={classes.textField}
          variant="outlined"
          type={this.state.showPassword ? "text" : "password"}
          label="Password"
          value={this.state.password}
          onChange={this.handleChange("password")}
          InputProps={{
            endAdornment: (
              <InputAdornment position="end">
                <IconButton
                  aria-label="Toggle password visibility"
                  onClick={this.handleClickShowPassword}
                >
                  {this.state.showPassword ? <VisibilityOff /> : <Visibility />}
                </IconButton>
              </InputAdornment>
            )
          }}
        />
        <TextField
          id="filled-simple-start-adornment"
          className={classes.textField}
          variant="filled"
          label="With filled TextField"
        />
        <TextField
          id="standard-search"
          label="Search field"
          type="search"
          className={classes.textField}
          margin="normal"
        />
      </div>
    ];
  }
}
export default withStyles(styles)(Demo);
