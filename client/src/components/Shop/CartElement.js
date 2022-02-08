import * as React from "react";
import Box from "@mui/material/Box";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import ListItemText from "@mui/material/ListItemText";
import Avatar from "@mui/material/Avatar";
import IconButton from "@mui/material/IconButton";
import ShoppingBagIcon from '@mui/icons-material/ShoppingBag';
import DeleteIcon from "@mui/icons-material/Delete";
import RemoveIcon from "@mui/icons-material/Remove";
import AddIcon from "@mui/icons-material/Add";
import PropTypes from 'prop-types';
import NumberFormat from 'react-number-format';
import { ReactSession } from 'react-client-session';
import TextField from '@mui/material/TextField';

const NumberFormatCustom = React.forwardRef(function NumberFormatCustom(props, ref) {
    const { onChange, ...other } = props;
  
    return (
      <NumberFormat
        {...other}
        getInputRef={ref}
        onValueChange={(values) => {
          onChange({
            target: {
              name: props.name,
              value: values.value,
            },
          });
        }}
        thousandSeparator
        isNumericString
        prefix="$"
      />
    );
  });
  
  NumberFormatCustom.propTypes = {
    name: PropTypes.string.isRequired,
    onChange: PropTypes.func.isRequired,
  };
  

export default function CartElement({Product}) {
    const [value, setValue] = React.useState(Product.price);
    const [number, setNumber] = React.useState(Product.noOfItems);
    const handleChange = (event) => {
      setValue(event.target.value)
    };
    const handleAdd = () => {
      ReactSession.get("user").cart.map((element) => {
          if(Product.productId === element.productId){
            element.noOfItems++;
            setNumber(element.noOfItems)
            setValue(element.noOfItems*element.price)       
          }
    })
     
    };
    const handleMinus = () => {
      ReactSession.get("user").cart.map((element) => {
          if(Product.productId === element.productId){
            element.noOfItems--;
            setNumber(element.noOfItems)
            setValue(element.noOfItems*element.price)
          }
    })
     
    };
    const handleRemove = () => {
      let ind=0;
   
    for (var i = 0; i < ReactSession.get("user").cart.length; i++) {
      if (ReactSession.get("user").cart[i].productId===Product.productId) {
        ind=i;
        break;
      }
    }
    //ReactSession.get("user").cart.splice(ind, 1);
     //let temp = ReactSession.get("user");
     //temp.cart.splice(ind,1);
     //ReactSession.set("user",temp);
    };
  return (
    <Box sx={{ flexGrow: 1, maxWidth: 752 }}>

      <List>
        <ListItem>
          <ListItemAvatar>
            <Avatar>
              <ShoppingBagIcon />
            </Avatar>
          </ListItemAvatar>
          <ListItemText primary={Product.name} />
          <IconButton color="secondary" aria-label="add an alarm" onClick={handleAdd}>
            <AddIcon />
          </IconButton>
          <p>{number}</p>
          <IconButton color="secondary" aria-label="add an alarm" onClick={handleMinus}>
            <RemoveIcon />
          </IconButton>
          <TextField
          disabled
        label="price"
        value={value}
        onChange={handleChange}
        name="numberformat"
        id="formatted-numberformat-input"
        InputProps={{
          inputComponent: NumberFormatCustom,
        }}
        variant="standard"
      />
          <IconButton color="secondary" aria-label="add an alarm" onClick={handleRemove}>
            <DeleteIcon />
          </IconButton>
        </ListItem>
      </List>
    </Box>
  );
}