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
import Data from './Data';
import CartElement from './CartElement';
import DeleteIcon from "@mui/icons-material/Delete";
import SaveIcon from '@mui/icons-material/Save';
import {ReactSession} from 'react-client-session';

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

export default function Cart() {
  const [open, setOpen] = React.useState(false);
  const[data,setData]=React.useState( ReactSession.get("user").cart)

  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };
  const handleClear = () => {
    ReactSession.get("user").cart.length = 0;

  };
  
  return (
    <div>
      <IconButton style={{ color: "white" }}aria-label="add to shopping cart" onClick={handleClickOpen}>
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
        {data.map((element) => {
            <CartElement product={element} />   
        })}
         
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
