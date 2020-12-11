import React from "react";
import { Input, Button, Container, Grid } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  root: {
    "& > *": {
      margin: theme.spacing(1),
    },
  },

  wrapper: {
    marginTop: "5rem",
    height: "calc(100vh - 19.0625rem)",
    textAlign: "center",
  },
}));

const SearchBox = () => {
  const classes = useStyles();

  return (
    <Container className={classes.wrapper} maxWidth="sm">
      <Grid container direction="row" justify="center" alignItems="center">
        <form className={classes.root} noValidate autoComplete="off">
          <Input
            placeholder="Type..."
            inputProps={{ "aria-label": "description" }}
          />
        </form>
        <Button variant="contained" color="primary">
          Search
        </Button>
      </Grid>
    </Container>
  );
};

export default SearchBox;
