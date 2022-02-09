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
import {sendCart} from "../../api/ShopApi";
import TextField from '@mui/material/TextField';
import Alert from "@mui/material/Alert";



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
  const[data,setData]=React.useState([]);
  const [error, setError] = React.useState(0);
  const [errorMessage, setErrorMessage] = React.useState("");
  React.useEffect(() => {
    setData(ReactSession.get("user").cart);
  }, []);

  const handleClickOpen = () => {
    setOpen(true);
    setData(ReactSession.get("user").cart);
  };
  const handleClose = () => {
    setOpen(false);
  };
  const handleClear = () => {
    let temp = ReactSession.get("user");
    temp.cart.length=0;
    ReactSession.set("user", temp);
    setData(ReactSession.get("user").cart);

  };
  const handleSave = () => {
    var values = {
      userId: ReactSession.get("user").Id,
      orderItems:ReactSession.get("user").cart,
    };
    // console.log(values);
    sendCart(values, ReactSession.get("user").userName).then((data) => {
        if(data==="Order confirmed successfully!"){
          let temp = ReactSession.get("user");
          temp.cart.length=0;
          ReactSession.set("user", temp);
          setData(ReactSession.get("user").cart);
          setOpen(false);
          setError(0);
          setErrorMessage("")
        }
        else{
        setError(1);
        setErrorMessage(data)
        }
    })
    

  };
  
  const handleAdd = (Product) => {
    data.map((element) => {
      if (Product.productId === element.productId) {
        if(element.noOfItems<element.noInStock){
        element.noOfItems++;
        element.totalPrice=element.noOfItems*element.price;
        let temp = ReactSession.get("user");
        temp.cart=data;
        ReactSession.set("user", temp);
        setData(ReactSession.get("user").cart);
        setError(0);
        setErrorMessage("")
      }
      }
    })
    console.log("entered add");
  };
  const handleMinus = (Product) => {
    data.map((element) => {
      if (Product.productId === element.productId) {
        if(element.noOfItems>1){
        element.noOfItems--;
        element.totalPrice=element.noOfItems*element.price;
        let temp = ReactSession.get("user");
        temp.cart=data;
        ReactSession.set("user", temp);
        setData(ReactSession.get("user").cart);
        setError(0);
        setErrorMessage("")
      }
      }
    })
    console.log("entered minus");
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
    setData(ReactSession.get("user").cart);
    setError(0);
    setErrorMessage("")
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
            {data.map(
              (Product) => (
                <ListItem>
                  <ListItemAvatar>
                    <Avatar>
                      <ShoppingBagIcon />
                    </Avatar>
                  </ListItemAvatar>
                  <ListItemText primary={Product.name} />
                  <IconButton color="secondary" aria-label="add an alarm" onClick={() => handleAdd(Product)}>
                    <AddIcon />
                  </IconButton>
                  <p>{Product.noOfItems}</p>
                  <IconButton color="secondary" aria-label="add an alarm" onClick={() => handleMinus(Product)}>
                    <RemoveIcon />
                  </IconButton>
                  <TextField
                    disabled
                    label="price"
                    value={Product.totalPrice}
                    name="numberformat"
                    id="formatted-numberformat-input"
                    InputProps={{
                      inputComponent: NumberFormatCustom,
                    }}
                    variant="standard"
                  />
                  <IconButton color="secondary" aria-label="add an alarm" onClick={() => handleRemove(Product)}>
                    <DeleteIcon />
                  </IconButton>
                </ListItem>
              )
            )}
          </List>
          {error === 1 && (
                        <Alert severity="error">warning — {errorMessage}</Alert>
                      )}
        </DialogContent>
        <DialogActions>
          <Button
            onClick={handleClear}
            variant="outlined"
            startIcon={<DeleteIcon />}
          >
            clear cart
          </Button>

          <Button
            onClick={handleSave}
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
