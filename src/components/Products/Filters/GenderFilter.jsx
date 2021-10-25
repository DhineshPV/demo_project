import React from "react";
import Radio from "@mui/material/Radio";
import Paper from "@mui/material/Paper";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import FormLabel from '@mui/material/FormLabel';





const GenderFilter = ({ gender, onChangeFilter }) => {
  return (
    <Paper
      elevation={5}
      sx={{
        overflow: "hidden",
        borderRadius: "10px",
        position: "relative",
        p: 2,
        mb: 5
      }}
    >
      <FormControl component='fieldset'>
         <FormLabel component="legend">Gender</FormLabel>
      
        <RadioGroup
          
          aria-label='gender'
          value={gender}
          onChange={onChangeFilter}
          name='gender'
        >
          <FormControlLabel value='men' control={<Radio />} label='Men' />
          <FormControlLabel value='Women' control={<Radio />} label='Women' />
          <FormControlLabel value='Boys' control={<Radio />} label='Boys' />
          <FormControlLabel value='Girls' control={<Radio />} label='Girls' />
          
        </RadioGroup>
      </FormControl>
    </Paper>
  );
};

export default GenderFilter;
