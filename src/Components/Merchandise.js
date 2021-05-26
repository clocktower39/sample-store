import React, { useState, useEffect } from "react";
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
  Typography,
  makeStyles,
  IconButton,
  Slide,
} from "@material-ui/core";
import {
  ShoppingCart,
  AddShoppingCart,
} from "@material-ui/icons";
import { addToCart } from "../Redux/actions";

const useStyles = makeStyles({
  IconButton: {
    margin: "25px 0",
    zIndex: 1301,
  },
  Card: {
    margin: "25px 0",
  },
});

export default function Merchandise(props) {
    const merchandise = useSelector((state) => state.merchandise);
    const cart = useSelector((state) => state.cart);
    const [slideIn, setSlideIn] = useState(false);
    const classes = useStyles();
    const dispatch = useDispatch();

    useEffect(() => {
      setSlideIn(true);
    }, []);

    return (
        <Container maxWidth="sm">
          <IconButton className={classes.IconButton} onClick={props.toggleDrawer}>
            <Badge
              badgeContent={cart.length}
              color="primary"
              className={classes.CartBadge}
            >
              <ShoppingCart style={{ color: "white" }} />
            </Badge>
          </IconButton>
  
          {merchandise.map((item, index) => {
            return (
              <Slide direction="right" mountOnEnter unmountOnExit in={slideIn}>
                <Card key={index} className={classes.Card}>
                  <CardActionArea>
                    <CardMedia
                      component="img"
                      alt={item.description}
                      image={item.image}
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
                    <Button
                      size="small"
                      color="primary"
                      onClick={() => dispatch(addToCart(item))}
                    >
                      <AddShoppingCart />
                    </Button>
                  </CardActions>
                </Card>
              </Slide>
            );
          })}
        </Container>
    )
}
