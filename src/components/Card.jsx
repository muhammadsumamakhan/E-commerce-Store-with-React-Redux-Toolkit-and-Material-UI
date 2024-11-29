import React from 'react';
import { Button, Box } from '@mui/material';
import './Card.css';

const Card = ({ title, description, src, onClick, addCart }) => {
  return (
    <div className="card">
      <img src={src} className="card-img-top" alt={title} />
      <div className="card-body">
        <h5 className="card-title">{title}</h5>
        <p className="card-text">{description}</p>
        <Box display="flex" gap={1}>
          <Button variant="contained" color="primary" onClick={onClick}>
            Buy Now
          </Button>
          <Button variant="contained" color="primary" onClick={addCart}>
            Add to Cart
          </Button>
        </Box>
      </div>
    </div>
  );
};

export default Card;
