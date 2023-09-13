import React, { useState } from 'react';
import { FormControl, InputLabel, MenuItem, Select } from '@mui/material';
import './DropDown.css';
function DropdownMenu({ method, values, selection, label }) {
  const [selectedValue, setSelectedValue] = useState(selection);

  const handleChange = (event) => {
    const newValue = event.target.value;
    setSelectedValue(newValue);
    method(newValue); // Call the method to update the selection prop
  };

  return (
    <div class = "drop-down">
      <h2>{label}</h2>
      <FormControl className='formControl' variant="outlined">
        <InputLabel id="dropdown-label">{label}</InputLabel>
        <Select
          labelId="dropdown-label"
          id="dropdown"
          value={selectedValue}
          onChange={(event) => handleChange(event)}
          label="Select an option"
        >
        {values.map((item) => (
          <MenuItem key={item.key} value={item.key}>
            {item.value}
          </MenuItem>
        ))}
        </Select>
      </FormControl>
    </div>
  );
}

export default DropdownMenu;
