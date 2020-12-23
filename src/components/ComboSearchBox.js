import React, { useState } from "react";
import { TextField, Button, Container, Grid } from "@material-ui/core";
import Autocomplete from "@material-ui/lab/Autocomplete";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
  option: {
    fontSize: 15,
    "& > span": {
      marginRight: 10,
      fontSize: 18,
    },
  },
});

export default function CountrySelect({ setCountryName, bas, item }) {
  const classes = useStyles();
  const [details, setDetails] = useState("");

  const countries = item?.map((item) => {
    return { label: item?.country };
  });

  const countryNames = countries?.map((name) => {
    return name.label;
  });
  
  const isInclude = countryNames.includes(details);


  const onSearch = () => {
    isInclude && setCountryName(details);
  };

  return (
    <Container style={{ margin: "5rem auto 5rem" }}>
      <Grid container direction="row" justify="center" alignItems="center">
        <Autocomplete
          value={null}
          onChange={(event, value) => {
            setDetails(value.label)
          }}
          id="country-select-demo"
          style={{ width: 300 }}
          options={countries}
          classes={{
            option: classes.option,
          }}
          autoHighlight
          getOptionLabel={(option) => option.label}
          renderOption={(option) => (
            <React.Fragment>{option.label}</React.Fragment>
          )}
          renderInput={(params) => (
            <TextField
              id="myInput"
              {...params}
              label="Choose a country"
              variant="outlined"
              inputProps={{
                ...params.inputProps,
                // autoComplete: "new-password", // disable autocomplete and autofill
              }}
              onChange={(event) => {
                setDetails(event.target.value) 
              }}
            />
          )}
        />

        <Button
          variant="contained"
          color="primary"
          style={{ marginLeft: "1rem " }}
          onClick={onSearch}
        >
          Search
        </Button>
        <Button
          style={{ marginLeft: "1rem " }}
          variant="contained"
          color="primary"
          onClick={bas}
        >
          Get My Country
        </Button>
      </Grid>
    </Container>
  );
}
