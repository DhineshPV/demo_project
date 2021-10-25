import React from "react";
import { Box } from "@mui/material";
import Header from "./components/Header/Header";
import Products from "./components/Products/Products";
import "./App.css";
function App() {
  const [filter, setFilter] = React.useState({
    productName: "",
    gender: "",
    // category: [],
  // brand: []
  });

  const { productName } = filter;

  const onChangeFilter = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setFilter({
      ...filter,
      [name]: value
    });
  };
const clearFilter=()=>{
  setFilter({
    productName: "",
    gender: "",
  })
}
  return (
    <Box component='main' height={1} display='flex' flexDirection='column'>
      <Header productName={productName} onChangeFilter={onChangeFilter} />
      <Box sx={{ flexGrow: 1 }}>
        <Products clearFilter={clearFilter} filter={filter} onChangeFilter={onChangeFilter} />
      </Box>
    </Box>
  );
}

export default App;
