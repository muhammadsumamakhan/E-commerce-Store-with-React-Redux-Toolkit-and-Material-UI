import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addQuantity, lessQuantity, removeItem } from '../config/redux/reducers/cartSlice';
import { Box, Button, Typography, Grid, IconButton } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';

const Cart = () => {
    const selector = useSelector(state => state.cart.cart);
    const totalPrice = selector.reduce((acc, cval) => acc + cval.price * cval.quantity, 0);
    const dispatch = useDispatch();

    const deleteCartItem = (item) => {
        dispatch(removeItem(item));
    };

    const cartItemAddQuantity = (item) => {
        dispatch(addQuantity(item));
    };

    const cartItemLessQuantity = (item) => {
        dispatch(lessQuantity(item));
    };

    return (
        <Box sx={{ display: 'flex', flexDirection: 'column', padding: '16px' }}>
            {selector.length > 0 ? (
                selector.map((item, index) => (
                    <Box key={index} sx={{ border: 1, borderRadius: 2, borderColor: 'gray', margin: 2, padding: 2 }}>
                        <Grid container spacing={2} alignItems="center">
                            <Grid item xs={4}>
                                <img width="100%" src={item.thumbnail} alt={item.title} />
                            </Grid>
                            <Grid item xs={8}>
                                <Typography variant="h6">{item.title}</Typography>
                                <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, marginTop: 2 }}>
                                    <Typography variant="body1">Quantity:</Typography>
                                    <IconButton onClick={() => cartItemAddQuantity(item)} color="primary">
                                        <AddIcon />
                                    </IconButton>
                                    <Typography variant="body1">{item.quantity}</Typography>
                                    <IconButton onClick={() => cartItemLessQuantity(item)} color="secondary">
                                        <RemoveIcon />
                                    </IconButton>
                                </Box>
                                <Typography variant="body1" sx={{ marginTop: 2 }}>
                                    Price: {Math.round(item.price)}
                                </Typography>
                                <Button
                                    onClick={() => deleteCartItem(item)}
                                    variant="contained"
                                    color="error"
                                    sx={{ marginTop: 2 }}
                                    startIcon={<DeleteIcon />}
                                >
                                    Delete Item
                                </Button>
                            </Grid>
                        </Grid>
                    </Box>
                ))
            ) : (
                <Typography variant="h4" align="center">No items found.</Typography>
            )}

            {selector.length > 0 && (
                <Typography variant="h5" align="center" sx={{ marginTop: 4 }}>
                    Total Price: {Math.round(totalPrice)}
                </Typography>
            )}
        </Box>
    );
};

export default Cart;
