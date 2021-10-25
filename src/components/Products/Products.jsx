import React, { useState, useEffect, useRef } from "react";
import {
  Typography,
  Grid,
  Box,
  Container,
  CircularProgress,
  Button,
  
} from "@mui/material";
import ProductsList from "./ProductsList/ProductsList";
import GenderFilter from "./Filters/GenderFilter";
import CategoryFilter from "./Filters/CategoryFilter";
import BrandFilter from "./Filters/BrandFilter";


const Products = ({ filter, onChangeFilter,clearFilter }) => {
  const [loading, setLoading] = useState(true);
  const [responseData, setResponseData] = useState({});
  const [products, setProducts] = useState([]);
  const { gender,brand,category } = filter;


  const isFirstUpdate = useRef(true);

  useEffect(() => {
    fetchProducts();
  }, []);

  useEffect(() => {
    if (isFirstUpdate.current) {
      isFirstUpdate.current = false;
      return;
    }

    const filteredData = filterProducts(responseData.products, filter);
    setProducts(filteredData);
  }, [filter]);

  const filterProducts = (data, filters) => {
    const filterProp = Object.keys(filters)[0];

    const filteredData = data.filter((entry) => {
      return findItems(entry[filterProp], filters[filterProp], filterProp);
    });

    const { [filterProp]: deletedFilter, ...otherFilters } = filters;

    return Object.keys(otherFilters).length <= 0
      ? filteredData
      : filterProducts(filteredData, otherFilters);
  };

  const findItems = (entryField, filterValue,filterProp) => {
    return (
      !filterValue ||
      !filterValue.trim() ||
      (filterProp === "gender" &&
        entryField.toLowerCase() === filterValue.toLowerCase()) ||
      (filterProp !== "gender" &&
        entryField.toLowerCase().includes(filterValue.toLowerCase()))

    );
  };

  const fetchProducts = async () => {
    const data = await fetch("https://demo7242716.mockable.io/products").then(
      (res) => res.json()
    );
    setResponseData(data);
    setProducts(data.products);
    setLoading(false);
  };

  return (
    <Container maxWidth='xl'>
      <Box mt={2}>
        <Typography paragraph variant='h6' component='h6'>
          Products
        </Typography>
      </Box>
      <Box
        sx={{
          height: 1,
          mt: 2
        }}
      >
        <Grid container spacing={2}>
          <Grid item xs={12} md={3}>
            <Box pb={1} display='flex' alignItem='center' justifyContent='space-between'>
              <Typography
                sx={{ fontWeight: 500 }}
                gutterBottom
                variant='subtitle1'
              >
                FILTERS
              </Typography>
              <Button onClick={clearFilter}>Clear Filters</Button>
              

            </Box>

            <GenderFilter gender={gender} onChangeFilter={onChangeFilter} />
                        <Box pb={1} >
                                                  
              <Typography
                sx={{ fontWeight: 500 }}
                gutterBottom
                variant='subtitle1'
              >
                CATEGORIES
                
              </Typography>
            </Box>
<CategoryFilter category={category} onChangeFilter={onChangeFilter}/>
                        <Box pb={1}>
              <Typography
                sx={{ fontWeight: 500 }}
                gutterBottom
                variant='subtitle1'
              >
                BRAND
                
              </Typography>
            </Box>
<BrandFilter brand={brand} onChangeFilter={onChangeFilter}/>
          </Grid>
          <Grid item xs={12} md={9} >
            <>
              {loading ? (
                <Box
                  minHeight={"70vh"}
                  display='flex'
                  alignItems='center'
                  justifyContent='center'
                >
                  <CircularProgress />
                </Box>
              ) : (
                <ProductsList data={responseData} products={products} />
              )}
            </>
          </Grid>
        </Grid>
      </Box>
    </Container>
  );
};

export default Products;
