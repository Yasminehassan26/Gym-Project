import * as React from 'react';
import PropTypes from 'prop-types';
import Button from '@mui/material/Button';
import { styled } from '@mui/material/styles';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import DialogActions from '@mui/material/DialogActions';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import Typography from '@mui/material/Typography';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import CartElement from './CartElement';
import DeleteIcon from "@mui/icons-material/Delete";
import SaveIcon from '@mui/icons-material/Save';
import { ReactSession } from 'react-client-session';
import Box from "@mui/material/Box";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import ListItemText from "@mui/material/ListItemText";
import Avatar from "@mui/material/Avatar";
import ShoppingBagIcon from '@mui/icons-material/ShoppingBag';
import RemoveIcon from "@mui/icons-material/Remove";
import AddIcon from "@mui/icons-material/Add";
import NumberFormat from 'react-number-format';
import TextField from '@mui/material/TextField';
const BootstrapDialog = styled(Dialog)(({ theme }) => ({
  '& .MuiDialogContent-root': {
    padding: theme.spacing(2),
  },
  '& .MuiDialogActions-root': {
    padding: theme.spacing(1),
  },
}));

const BootstrapDialogTitle = (props) => {
  const { children, onClose, ...other } = props;

  return (
    <DialogTitle sx={{ m: 0, p: 2 }} {...other}>
      {children}
      {onClose ? (
        <IconButton
          aria-label="close"
          onClick={onClose}
          sx={{
            position: 'absolute',
            right: 8,
            top: 8,
            color: (theme) => theme.palette.grey[500],
          }}
        >
          <CloseIcon />
        </IconButton>
      ) : null}
    </DialogTitle>
  );
};

BootstrapDialogTitle.propTypes = {
  children: PropTypes.node,
  onClose: PropTypes.func.isRequired,
};

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

export default function Cart() {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };
  const handleClear = () => {
    ReactSession.get("user").cart.length = 0;

  };

  //const [value, setValue] = React.useState(Product.price);
  //const [number, setNumber] = React.useState(Product.noOfItems);
  const handleChange = (event) => {
    //setValue(event.target.value)
  };
  const handleAdd = (Product) => {
    ReactSession.get("user").cart.map((element) => {
      if (Product.productId === element.productId) {
        element.noOfItems++;
        //setNumber(element.noOfItems)
        //setValue(element.noOfItems * element.price)
      }
    })

  };
  const handleMinus = (Product) => {
    ReactSession.get("user").cart.map((element) => {
      if (Product.productId === element.productId) {
        element.noOfItems--;
        //setNumber(element.noOfItems)
        //setValue(element.noOfItems * element.price)
      }
    })

  };
  const handleRemove = (Product) => {
    let ind = 0;

    for (var i = 0; i < ReactSession.get("user").cart.length; i++) {
      if (ReactSession.get("user").cart[i].productId === Product.productId) {
        ind = i;
        break;
      }
    }
    //ReactSession.get("user").cart.splice(ind, 1);
    let temp = ReactSession.get("user");
    temp.cart.splice(ind, 1);
    ReactSession.set("user", temp);
  };

  return (
    <div>
      <IconButton style={{ color: "white" }} aria-label="add to shopping cart" onClick={handleClickOpen}>
        <ShoppingCartIcon />
      </IconButton>
      <BootstrapDialog
        onClose={handleClose}
        aria-labelledby="customized-dialog-title"
        open={open}
      >
        <BootstrapDialogTitle id="customized-dialog-title" onClose={handleClose}>
          My Cart
        </BootstrapDialogTitle>
        <DialogContent dividers>
          <List>
            {
              console.log(ReactSession.get("user").cart),
            ReactSession.get("user").cart.map(
              (Product) => (
                console.log(Product),
                <ListItem>
                  <ListItemAvatar>
                    <Avatar>
                      <ShoppingBagIcon />
                    </Avatar>
                  </ListItemAvatar>
                  <ListItemText primary={Product.name} />
                  <IconButton color="secondary" aria-label="add an alarm" onClick={handleAdd(Product)}>
                    <AddIcon />
                  </IconButton>
                  <p>{Product.noOfItems}</p>
                  <IconButton color="secondary" aria-label="add an alarm" onClick={handleMinus(Product)}>
                    <RemoveIcon />
                  </IconButton>
                  <TextField
                    disabled
                    label="price"
                    value={Product.price}
                    onChange={handleChange}
                    name="numberformat"
                    id="formatted-numberformat-input"
                    InputProps={{
                      inputComponent: NumberFormatCustom,
                    }}
                    variant="standard"
                  />
                  <IconButton color="secondary" aria-label="add an alarm" onClick={handleRemove(Product)}>
                    <DeleteIcon />
                  </IconButton>
                </ListItem>
              )
            )}
          </List>
        </DialogContent>
        <DialogActions>
          <Button
            onClick={handleClose}
            variant="outlined"
            startIcon={<DeleteIcon />}
          >
            clear cart
          </Button>

          <Button
            onClick={handleClose}
            variant="outlined"
            startIcon={<SaveIcon />}
          >
            Save order
          </Button>
        </DialogActions>
      </BootstrapDialog>
    </div>
  );
}
