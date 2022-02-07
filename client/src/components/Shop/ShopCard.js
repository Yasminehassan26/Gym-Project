import * as React from 'react';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button,Card, CardActionArea, CardActions } from '@mui/material';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import DeleteIcon from "@mui/icons-material/Delete";
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';

export default function ShopCard({Element}) {
    const [loading, setLoading] = React.useState(false);
    const [link, setLink] = React.useState("https://images.unsplash.com/photo-1594737626072-90dc274bc2bd?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1780&q=80");


    function handleClick(value) {
      setLoading(value);
    }
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
          onClick={() => handleClick(!loading)}
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
