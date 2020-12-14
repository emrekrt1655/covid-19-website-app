import React, { useState } from "react";
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
    marginBottom: "5rem",
    height: "5rem",
    textAlign: "center",
  },
}));

const SearchBox = ({setCountryName}) => {
  const classes = useStyles();
  const [details, setDetails] = useState("");

    

  return (
    <Container className={classes.wrapper} maxWidth="sm">
      <Grid container direction="row" justify="center" alignItems="center">
        <form className={classes.root} noValidate autoComplete="off">
          <Input
            placeholder="Type..."
            inputProps={{ "aria-label": "description" }}
            onChange={(event)=>setDetails(event.target.value)}
          />
        </form>
        <Button variant="contained" color="primary" 
          onClick={()=>setCountryName(details)}
        >
          Search
        </Button>
        
      </Grid>
    </Container>
  );
};

export default SearchBox;
