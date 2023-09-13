import TextField from '@mui/material/TextField';
import InputAdornment from '@mui/material/InputAdornment';
import SearchIcon from "@mui/icons-material/Search";
import './Header.css';
const Header = ({textInput,handleTextInputChange,displayJobs}) => {
  return(    <header className='header'>
        <div>
          <a href="/">
            <p className='logo' href>Jobs4Ags</p>
          </a>
          <TextField
            placeholder="Search for jobs"
            value={textInput}
            onChange={handleTextInputChange}
            onKeyDown={(e) => {
              if(e.key === 'Enter'){
                displayJobs();
              }
            }}
            InputProps={{
              endAdornment: (
                <InputAdornment position="end">
                  <SearchIcon className = "search-icon" onClick={displayJobs}/>
                </InputAdornment>
              ),
            }}
            className="search-bar"
          />
        </div>
    </header>);

}

export default Header;