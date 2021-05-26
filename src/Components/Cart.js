import React from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  Button,
  Container,
  Divider,
  Grid,
  Typography,
  makeStyles,
  IconButton,
} from "@material-ui/core";
import {
  Cancel,
  RemoveShoppingCart,
} from "@material-ui/icons";
import { removeFromCart } from "../Redux/actions";
import Checkout from './Checkout/Checkout'

const useStyles = makeStyles({
  root: {
    height: '85vh',
  },
  IconButton: {
    margin: "25px 0",
  },
  Card: {
    margin: "25px 0",
  },
  CartItemsContainer: {
    padding: "0 0 50px 0",
  },
});

export default function Cart(props) {
  const cart = useSelector((state) => state.cart);
  const classes = useStyles();
  const dispatch = useDispatch();

  return (
    <Container maxWidth="md" className={classes.root}>
      <Button variant="contained">Checkout</Button>
      <IconButton className={classes.IconButton} onClick={props.toggleDrawer}>
        <Cancel />
      </IconButton>
      <Grid container>
        <Grid item xs={4}>
          <Typography variant="h6">Title</Typography>
        </Grid>
        <Grid item xs={4}>
          <Typography variant="h6">Description</Typography>
        </Grid>
        <Grid item xs={3}>
          <Typography variant="h6">Price</Typography>
        </Grid>
        <Grid item xs={1}>
          <Typography variant="h6"></Typography>
        </Grid>
      </Grid>
      <Divider orientation="horizontal" variant="fullWidth" />
      <Grid container className={classes.CartItemsContainer}>
        {cart.length > 0 ? (
          cart.map((item, index) => {
            return (
              <>
                <Grid item xs={4}>
                  <Typography variant="subtitle1">{item.title}</Typography>
                </Grid>
                <Grid item xs={4}>
                  <Typography variant="subtitle1">
                    {item.description}
                  </Typography>
                </Grid>
                <Grid item xs={3}>
                  <Typography variant="subtitle1">{item.price}</Typography>
                </Grid>
                <Grid item xs={1}>
                  <IconButton onClick={() => dispatch(removeFromCart(index))}>
                    <RemoveShoppingCart />
                  </IconButton>
                </Grid>
              </>
            );
          })
        ) : (
          <Grid item xs={4}>
            <Typography variant="subtitle1">No items in cart</Typography>
          </Grid>
        )}
      </Grid>
      <Checkout />
    </Container>
  );
}
