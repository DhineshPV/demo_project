import React from "react";

import Paper from "@mui/material/Paper";
import Checkbox from '@mui/material/Checkbox';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";


const CategoryFilter = ({category , onChangeFilter }) => {
  return (
    <Paper
      elevation={5}
      sx={{
        overflow: "hidden",
        borderRadius: "8px",
        position: "relative",
        p: 2,
        mb: 5
      }}
    >
      <FormControl component='fieldset'>
         
      
        <FormGroup
          
          aria-label='Category'
          value={category}
          onChange={onChangeFilter}
          name='Category'
        >
          <FormControlLabel value='Shirts' control={<Checkbox/>} label='Shirts' />
          <FormControlLabel value='Tshirts' control={<Checkbox/>} label='Tshirts' />
          <FormControlLabel value='Jeans' control={<Checkbox/>} label='Jeans' />
          <FormControlLabel value='Kurta set' control={<Checkbox/>} label='Kurta set' />
          <FormControlLabel value='Sweatshirts' control={<Checkbox/>} label='Sweatshirts' />
          <FormControlLabel value='Jackets' control={<Checkbox/>} label='Jackets' />
          <FormControlLabel value='Tops' control={<Checkbox/>} label='Tops' />
          <FormControlLabel value='Dresses' control={<Checkbox/>} label='Dresses' />
          <FormControlLabel value='Casual Shoes' control={<Checkbox/>} label='Casual Shoes' />
          <FormControlLabel value='Flip Flops' control={<Checkbox/>} label='Flip Flops' />
          
        </FormGroup>
      </FormControl>
    </Paper>
  );
};

export default CategoryFilter;