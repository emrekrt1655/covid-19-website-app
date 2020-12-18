import React from "react";
import {
  Card,
  CardContent,
  Typography,
  Container,
  Grid,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
  root: {
    height: "20rem",
    width: "50rem",
    minWidth: 275,
    textAlign:'center'
  },

  bullet: {
    display: "inline-block",
    margin: "0 2px",
    transform: "scale(0.8)",
  },

  title: {
    fontSize: 20,
    backgroundColor: "#FAEDF0",
    marginBottom:20
  },

  pop: {
    backgroundColor: "#E6FFF4",
    fontSize: 20,
    marginBottom:20
  },

  pos: {
    marginBottom: 16,
    backgroundColor: "#FFEFC6",
  },

  cases: {
      backgroundColor: '#EAE9EA',
      marginBottom:20
  },

  info: {
    backgroundColor: '#F38DA1',
  }
});

export default function CardList({ item }) {
  const { cases, deaths } = item;
  const classes = useStyles();
  const bull = <span className={classes.bullet}>•</span>;

  return (
    <Container className={classes.wrapper} maxWidth="sm">
      <Grid container direction="row" justify="center" alignItems="center">
        <Card className={classes.root}>
          <CardContent>
            <Typography
              className={classes.title}
              color="textSecondary"
              gutterBottom
            >
              {item.continent}-{item.country}
            </Typography>

            <Typography className={classes.pop} variant="h5" component="h2">
              Population: {item.population}
            </Typography>

            <Typography className={classes.pos} color="textSecondary">
              Date: {item.day}
            </Typography>

            <Typography className={classes.cases} variant="body2" component="p">
              Cases
              <br />
              Total: {cases?.total}
              <br />
              Recovered: {cases?.recovered}
              <br />
              New: {cases?.new}
            </Typography>

            <Typography className={classes.info} variant="body2" component="p">
              Deaths
              <br />
              Total: {deaths?.total}
              <br />
              New: {deaths?.new}
            </Typography>
          </CardContent>
        </Card>
      </Grid>
    </Container>
  );
}
