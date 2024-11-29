import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Card from '../components/Card';
import CircularProgress from '@mui/material/CircularProgress';
import Typography from '@mui/material/Typography';
import { useDispatch } from 'react-redux';
import { addItem } from '../config/redux/reducers/cartSlice';

const Product = () => {
  const [products, setProducts] = useState([]);
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();
  const dispatch = useDispatch(); 

  useEffect(() => {
    fetch('https://dummyjson.com/products')
      .then((res) => res.json())
      .then((data) => {
        setProducts(data.products);
        setLoading(false);
      })
      .catch((err) => {
        console.error('Error fetching products:', err);
        setError(true);
        setLoading(false);
      });
  }, []);

  const handleProductClick = (item) => {
    console.log('item:', item);
    navigate(`/product/${item.id}`);
  };

  const addtocartItem = (item) => {
    console.log('Adding to cart:', item);
    dispatch(addItem(item)); 
  };

  if (loading) {
    return (
      <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column', marginTop: '20px' }}>
        <CircularProgress size={60} />
        <Typography>Loading products...</Typography>
      </div>
    );
  }

  if (error) {
    return (
      <Typography color="error" align="center">
        Error loading products. Please try again later.
      </Typography>
    );
  }

  return (
    <div>
      <Typography
        variant="h3"
        gutterBottom
        color="primary"
        fontWeight="bold"
        align="center"
        sx={{ marginTop: '16px' }}
      >
        Products
      </Typography>
      <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '5px' }}>
        {products.map((item) => (
          <Card
            key={item.id}
            title={item.title}
            description={`${item.description.slice(0, 50)}...`} 
            src={item.images[0]}
            onClick={() => handleProductClick(item)}
            addCart={() => addtocartItem(item)} 
          />
        ))}
      </div>
    </div>
  );
};

export default Product;
