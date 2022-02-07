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
  

export default function CartElement() {
    const [value, setValue] = React.useState("0");

    const handleChange = (event) => {
      setValue(event.target.value)
  
    }
  return (
    <Box sx={{ flexGrow: 1, maxWidth: 752 }}>
      <List>
        <ListItem>
          <ListItemAvatar>
            <Avatar>
              <ShoppingBagIcon />
            </Avatar>
          </ListItemAvatar>
          <ListItemText primary="Single-line item" />
          <IconButton color="secondary" aria-label="add an alarm">
            <AddIcon />
          </IconButton>
          <p>1</p>
          <IconButton color="secondary" aria-label="add an alarm">
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
          <IconButton color="secondary" aria-label="add an alarm">
            <DeleteIcon />
          </IconButton>
        </ListItem>
      </List>
    </Box>
  );
}
