import React from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  Badge,
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
import {
  ShoppingCart,
  AddShoppingCart,
  RemoveShoppingCart,
} from "@material-ui/icons";
import { addToCart } from './Redux/actions';

import "./App.css";

const useStyles = makeStyles({
  CartBadge: {
    margin: "25px 0",
  },
  Card: {
    margin: "25px 0",
  },
});

function App() {
  const merchandise = useSelector((state) => state.merchandise);
  const cart = useSelector((state) => state.cart);
  const classes = useStyles();
  const dispatch = useDispatch();

  return (
    <div className="App">
      <Container maxWidth="sm">

        <Badge badgeContent={cart.length} color="primary" className={classes.CartBadge}>
          <ShoppingCart />
        </Badge>

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
                  <AddShoppingCart/>
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
