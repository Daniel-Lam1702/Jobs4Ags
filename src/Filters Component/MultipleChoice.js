import React from 'react';
import Select from 'react-select';
import "./MultipleChoice.css";
function MultipleChoiceDropdown({ selection, method, values, label }) {
  // Convert values to the format expected by react-select
  const options = values.map((item) => ({
    value: item.key,
    label: item.value,
  }));

  const handleChange = (selectedOptions) => {
    // Extract the selected values from the selectedOptions array
    const selectedValues = selectedOptions.map((option) => option.value);

    // Call the method with the selected values
    method(selectedValues);
  };

  return (
    <div className='multipleChoice'>
      <h2>{label}</h2>
      <Select
        isMulti
        options={options}
        value={options.filter((option) => selection.includes(option.value))}
        onChange={handleChange}
      />
    </div>
  );
}

export default MultipleChoiceDropdown;
