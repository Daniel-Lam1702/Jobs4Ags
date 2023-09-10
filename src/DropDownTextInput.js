import React, { useState } from 'react';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import './DropDownText.css'
function DropdownTextInput({label,location,setLocation}) {
  
    // Define your list of options
    const options = ['Houston, Texas', 'Austin, Texas', 'San Francisco, California', 'Seattle, Washington', 'Massachussetts', 'College Station, Texas'];
  
    return (
      <div className='DropDownText'>
      <h2>{label}</h2>
      <Autocomplete
        value={location}
        onChange={(event, newValue) => {
          setLocation(newValue);
        }}
        options={options}
        renderInput={(params) => <TextField {...params} label={label} />}
      />
      </div>
    );
  }
  
  export default DropdownTextInput;
  