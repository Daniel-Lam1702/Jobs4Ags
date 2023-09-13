import './DropDownText.css'
function DropdownTextInput({label,location,setLocation}) {
    // Define your list of options  
    return (
      <div className='DropDownText'>
      <h2>{label}</h2>
        <input
          value={location}
          type="text"
          onChange={(event) => {
            setLocation(event.target.value);
          }}
        />
      </div>
    );
  }
  
  export default DropdownTextInput;
  