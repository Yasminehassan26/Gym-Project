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
import {ReactSession} from 'react-client-session';

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
  

export default function CartElement({product}) {
    const [value, setValue] = React.useState(product.price);
    const [number, setNumber] = React.useState(product.noOfItems);
    const[data,setData]=React.useState( ReactSession.get("user").cart)

    const handleChange = (event) => {
      setValue(event.target.value)
  
    }
    const handleAdd = () => {
      data.map((element) => {
          if(product.productId === element.productId){
            element.noOfItems++;
            setNumber(element.noOfItems)
            setValue(element.noOfItems*element.price)       
          }
    })
     
    };
    const handleMinus = () => {
      data.map((element) => {
          if(product.productId === element.productId){
            element.noOfItems--;
            setNumber(element.noOfItems)
            setValue(element.noOfItems*element.price)
          }
    })
     
    };
    const handleRemove = () => {
      let ind=0;
   
    for (var i = 0; i < data.length; i++) {
      if (data[i].productId===product.productId) {
        ind=i;
        break;
      }
      console.log(data.splice(ind, 1));
     
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
          <ListItemText primary={product.name} />
          <IconButton   onClick={handleAdd} color="secondary" aria-label="add an alarm">
            <AddIcon />
          </IconButton>
          <p>{number}</p>
          <IconButton onClick={handleMinus} color="secondary" aria-label="add an alarm">
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
          <IconButton onClick={handleRemove} color="secondary" aria-label="add an alarm">
            <DeleteIcon />
          </IconButton>
        </ListItem>
      </List>
    </Box>
  );
}
