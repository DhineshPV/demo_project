import React from "react";
import {
  Pagination,
  Box,
  Grid,
  Paper,
  Typography,
  Tooltip
} from "@mui/material";

const ProductsList = ({ products }) => {
  const [pageNo, setPageNo] = React.useState(0);
  const limit = 20;

  const isFirstUpdate = React.useRef(true);

  React.useEffect(() => {
    if (isFirstUpdate.current) {
      isFirstUpdate.current = false;
      return;
    }
    setPageNo(0);
  }, [products]);

  const handleChange = (event, value) => {
    setPageNo(value - 1);
  };

  return products.length > 0 ? (
    <Grid container spacing={4}>
      <Grid item xs={12}>
        <Box mb={-1.5}>
          {products.length} {products.length > 1 ? "products" : "product"} found
        </Box>
      </Grid>

      {products.slice(pageNo * limit, pageNo * limit + limit).map((product) => (
        <Grid key={product.productId} item xs={12} md={4} lg={3}>
          <Paper
            elevation={3}
            sx={{
              overflow: "hidden",
              borderRadius: "8px",
              //   textAlign: "center",
              position: "relative"
            }}
          >
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                position: "relative"
              }}
            >
              <img
                style={{ width: "100%" }}
                src={product.searchImage}
                alt={product.additionalInfo}
              />
            </Box>
            <Box p={2}>
              <Tooltip title={product.productName}>
                <Typography noWrap variant='body1' gutterBottom>
                  {product.productName}
                </Typography>
              </Tooltip>
              <Typography variant='body2'>Rs.{product.price}</Typography>
            </Box>
          </Paper>
        </Grid>
      ))}
      <Grid item xs={12}>
        {products.length > 20 && (
          <Box p={4} textAlign='center'>
            <Pagination
              sx={{ display: "inline-block" }}
              count={Math.ceil(products.length / limit)}
              showFirstButton
              showLastButton
              page={pageNo + 1}
              shape='rounded'
              onChange={handleChange}
            />
          </Box>
        )}
      </Grid>
    </Grid>
  ) : (
    <Box
      minHeight={"70vh"}
      display='flex'
      alignItems='center'
      justifyContent='center'
    >
      No products to show
    </Box>
  );
};

export default ProductsList;
