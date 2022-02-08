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


    function handleClick(value) {
    }
    const handleAddToCart = (value) => {
      setLoading(value);
      let product={

        name:Element.name,
        productId:Element.id,
        price:Element.price,
        noOfItems:1,
        noInStock:Element.noInStock
      }
      ReactSession.get("user").cart.push(product);
     
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
        </CardContent>
      </CardActionArea>
      <CardActions>
         {loading == true && (
        <Button
          onClick={() => handleClick(!loading)}
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
