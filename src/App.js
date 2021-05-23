import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  Badge,
  Button,
  Card,
  CardActionArea,
  CardMedia,
  CardContent,
  CardActions,
  Container,
  Divider,
  Drawer,
  Grid,
  Typography,
  makeStyles,
  IconButton,
} from "@material-ui/core";
import {
  Cancel,
  ShoppingCart,
  AddShoppingCart,
  RemoveShoppingCart,
} from "@material-ui/icons";
import { addToCart } from './Redux/actions';

import "./App.css";

const useStyles = makeStyles({
  IconButton: {
    margin: '25px 0',
  },
  Card: {
    margin: "25px 0",
  },
  CartItemsContainer:{
    padding: '0 0 50px 0',
  }
});

function App() {
  const merchandise = useSelector((state) => state.merchandise);
  const cart = useSelector((state) => state.cart);
  const classes = useStyles();
  const dispatch = useDispatch();
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  const toggleDrawer = () => {
    setIsDrawerOpen(!isDrawerOpen);
  }

  return (
    <div className="App">
      <Container maxWidth="sm">
        <IconButton className={classes.IconButton} onClick={toggleDrawer}>
          <Badge badgeContent={cart.length} color="primary" className={classes.CartBadge}>
            <ShoppingCart />
          </Badge>
        </IconButton>

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
      <Drawer anchor='bottom' variant="temporary" open={isDrawerOpen} >
        <Container maxWidth="md">
        <IconButton className={classes.IconButton} onClick={toggleDrawer}>
            <Cancel />
        </IconButton>
            <Grid container>
              <Grid item xs={4}>
                <Typography variant="h6">Title</Typography>
              </Grid>
              <Grid item xs={4}>
                <Typography variant="h6">Description</Typography>
              </Grid>
              <Grid item xs={4}>
                <Typography variant="h6">Price</Typography>
              </Grid>
            </Grid>
            <Divider orientation="horizontal" variant="fullWidth"/>
            <Grid container className={classes.CartItemsContainer}>
        {cart.length>0?cart.map((item, index) => {
          return (
            <>
              <Grid item xs={4}>
                <Typography variant="subtitle1">{item.title}</Typography>
              </Grid>
              <Grid item xs={4}>
                <Typography variant="subtitle1">{item.description}</Typography>
              </Grid>
              <Grid item xs={4}>
                <Typography variant="subtitle1">{item.price}</Typography>
              </Grid>
            </>
          )
          ;
        }):
              <Grid item xs={4}>
                <Typography variant="subtitle1">No items in cart</Typography>
              </Grid>
              }
            </Grid>
      </Container>
      </Drawer>
    </div>
  );
}

export default App;
