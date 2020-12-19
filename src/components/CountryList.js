import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import Collapse from "@material-ui/core/Collapse";
import ExpandLess from "@material-ui/icons/ExpandLess";
import ExpandMore from "@material-ui/icons/ExpandMore";


const useStyles = makeStyles((theme) => ({
  root: {
    position: "absolute",
    width: "100%",
    maxWidth: 200,
    backgroundColor: '#3F51B5',
    color: '#fff'
  },
  nested: {
    paddingLeft: theme.spacing(4),
  },
}));

export default function NestedList({item}) {
  console.log(item);
  const classes = useStyles();
  const [open, setOpen] = React.useState(true);

  const handleClick = () => {
    setOpen(!open);
  };

  return (
    <List
      component="nav"
      aria-labelledby="nested-list-subheader"
      className={classes.root}
    >
      <ListItem button onClick={handleClick}>
        <ListItemText primary="Countries" />
        {open ? <ExpandLess /> : <ExpandMore />}
      </ListItem>
      <Collapse in={open} timeout="auto" unmountOnExit>
        <List component="div" disablePadding>
          {
            item?.map(country  => {
              return(
                <ListItem button className={classes.nested}>
                      <ListItemText primary={country?.country} />
                      
                </ListItem>
              )
            })
          }
          
          
        </List>
      </Collapse>
    </List>
  );
}
