import React from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  Container,
  Card,
  CardActionArea,
  CardMedia,
  CardContent,
  CardActions,
  Button,
  Typography,
  makeStyles,
} from "@material-ui/core";
import { addToCart } from './Redux/actions';

import "./App.css";

const useStyles = makeStyles({
  Card: {
    margin: "25px 0",
  },
});

function App() {
  const merchandise = useSelector((state) => state.merchandise);
  const classes = useStyles();
  const dispatch = useDispatch();

  return (
    <div className="App">
      <Container maxWidth="sm">
        {merchandise.map((item, index) => {
          return (
            <Card key={index} className={classes.Card}>
              <CardActionArea>
                <CardMedia
                  component="img"
                  alt={item.description}
                  height="140"
                  image="#"
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="h2">
                    {item.title}
                  </Typography>
                  <Typography
                    variant="body2"
                    color="textSecondary"
                    component="p"
                  >
                    ${item.price}
                  </Typography>
                </CardContent>
              </CardActionArea>
              <CardActions>
                <Button size="small" color="primary" onClick={() => dispatch(addToCart(item))}>
                  Add to Cart
                </Button>
              </CardActions>
            </Card>
          );
        })}
      </Container>
    </div>
  );
}

export default App;
