import * as React from 'react';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button,Card, CardActionArea, CardActions } from '@mui/material';
import DeleteIcon from "@mui/icons-material/Delete";
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import {ReactSession} from 'react-client-session';


export default function ShopCard({Element}) {
    const [loading, setLoading] = React.useState(false);
    const [link, setLink] = React.useState(Element.imageURL);

    const handleAddToCart = (value) => {
      setLoading(value);
      let ind = -1;
      console.log(ReactSession.get("user").cart);

      for (var i = 0; i < ReactSession.get("user").cart.length; i++) {
    

        if (ReactSession.get("user").cart[i].productId === Element.productId) {
          ind = i;
          break;
        }
      }
      if(ind===-1){
        let product={
          name:Element.name,
          productId:Element.productId,
          price:Element.price,
          noOfItems:1,
          noInStock:Element.noInStock,
          totalPrice: Element.price
        }
        let temp = ReactSession.get("user");
        temp.cart.push(product);
        ReactSession.set("user", temp);
      }else{
        let temp = ReactSession.get("user");
        if(temp.cart[i].noOfItems<temp.cart[i].noInStock){
        temp.cart[i].noOfItems++;
        temp.cart[i].totalPrice=temp.cart[i].noOfItems*temp.cart[i].price;
        ReactSession.set("user", temp);}
      }
    };

    const handleRemoveFromCart = (value) => {
      setLoading(value);
      let ind = 0;
  
      for (var i = 0; i < ReactSession.get("user").cart.length; i++) {
        if (ReactSession.get("user").cart[i].productId === Element.productId) {
          ind = i;
          break;
        }
      }
      //ReactSession.get("user").cart.splice(ind, 1);
      let temp = ReactSession.get("user");
      if(temp.cart[ind].noOfItems>1){
        temp.cart[ind].noOfItems--;
        temp.cart[ind].totalPrice=temp.cart[i].noOfItems*temp.cart[i].price;}
      else{
        temp.cart.splice(ind, 1);
      }
      ReactSession.set("user", temp);
    };
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="140"
          image={link}
          alt="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {Element.name}
          </Typography>
          <Typography variant="body2" color="text.secondary">
           {Element.description}
          </Typography>
          <p>Price: {Element.price}</p>
        </CardContent>
      </CardActionArea>
      <CardActions>
         {/* {loading == true && (
        <Button
          onClick={() => handleRemoveFromCart(!loading)}
          variant="outlined"
          startIcon={<DeleteIcon />}
        >
          Remove from cart
        </Button>
      )} */}
        {loading == true && (
        <Button
          onClick={() => handleRemoveFromCart(!loading)}
          variant="outlined"
          startIcon={<DeleteIcon />}
        >
          Remove from cart
        </Button>
      )}
      {loading == false && (
        <Button
          onClick={() => handleAddToCart(!loading)}
          variant="contained"
          endIcon={<AddShoppingCartIcon />}
        >
          Add to cart
        </Button>
      )}
      </CardActions>
    </Card>
  );
}
