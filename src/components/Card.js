import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
  root: {
    minWidth: 275,
  },
  bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)',
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
});


export default function CardList({item}) {
    const {cases, deaths} = item 
  const classes = useStyles();
  const bull = <span className={classes.bullet}>•</span>;

  return (
    <Card className={classes.root}>
      <CardContent>
        <Typography className={classes.title} color="textSecondary" gutterBottom>
          {item.continent}-{item.country}
        </Typography>
        <Typography variant="h5" component="h2">
          Population: {item.population}
        </Typography>
        <Typography className={classes.pos} color="textSecondary">
          Date: {item.day}
        </Typography>
        
        <Typography variant="body2" component="p">
          Cases 
          <br />
          Total: {cases?.total}
          <br />
          Recovered: {cases?.recovered}
          <br />
          New: {cases?.new}
        </Typography>
        <Typography variant="body2" component="p">
          Deaths 
          <br />
          Total: {deaths?.total}
          <br />
          New: {deaths?.new}
        </Typography>
      </CardContent>
    </Card>
  );
}
