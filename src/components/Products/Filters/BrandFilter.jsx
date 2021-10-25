import React from "react";

import Paper from "@mui/material/Paper";
import Checkbox from '@mui/material/Checkbox';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";


const BrandFilter = ({brand , onChangeFilter }) => {
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
          

          aria-label='Brand'
          value={brand}
          onChange={onChangeFilter}
          name='Brands'
        >
          <FormControlLabel value='Puma' control={<Checkbox/>} label='Puma' />
          <FormControlLabel value='Daniel Klein' control={<Checkbox/>} label='Daniel Klein' />
          <FormControlLabel value='Vishudh' control={<Checkbox/>} label='Vishudh' />
          <FormControlLabel value='HERE&NOW' control={<Checkbox/>} label='HERE&NOW' />
          <FormControlLabel value='Ahalyaa' control={<Checkbox/>} label='Ahalyaa' />
          <FormControlLabel value='Roadster' control={<Checkbox/>} label='Roadster' />
          <FormControlLabel value='Rigo' control={<Checkbox/>} label='Rigo' />
          <FormControlLabel value='HIGHLANDER' control={<Checkbox/>} label='HIGHLANDER' />
          <FormControlLabel value='Mayra' control={<Checkbox/>} label='Mayra' />
          <FormControlLabel value='LOCOMOTIVE' control={<Checkbox/>} label='LOCOMOTIVE' />
          
        </FormGroup>
      </FormControl>
    </Paper>
  );
};

export default BrandFilter;