import React, { useState } from "react";
import { Input, Button, Container, Grid } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import CountryList from "./CountryList";

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
  button:{
    marginTop: "5rem",
    marginBottom: "5rem",
    textAlign: "center",
    marginLeft:"1rem"
  }
}));

const SearchBox = ({setCountryName, ulke, Bas}) => {
  const classes = useStyles();
  const [details, setDetails] = useState("");

    

  return (
    <Container className={classes.wrapper} maxWidth="sm">
      <Grid container direction="row" justify="center" alignItems="center">
        <form className={classes.root} noValidate autoComplete="off">
          <Input
            placeholder={ulke}
            inputProps={{ "aria-label": "description" }}
            onChange={(event)=>setDetails(event.target.value)}
          />
        </form>
        <Button variant="contained" color="primary" 
          onClick={()=>setCountryName(details)}
        >
          Search
        </Button>
        <Button className={classes.button} 
        variant="contained" color="primary"
        onClick={Bas}>
          Get My Country
        </Button>
        <CountryList/>
      </Grid>
    </Container>
  );
};

export default SearchBox;
