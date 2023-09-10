import React, { useState, useEffect } from 'react';
import TextField from '@mui/material/TextField';
import InputAdornment from '@mui/material/InputAdornment';
import SearchIcon from "@mui/icons-material/Search";
import Filters from './Filters';
import './App.css';
import JobsComponent from './Jobs';

async function fetchJobs({ searchQuery = "Software Engineering", datePosted, employmentType, location, remoteJobsOnly, experience, page, num_pages }) {
  const encodedJobs = employmentType.map((value) => encodeURIComponent(value));
  const jobType = encodedJobs.join("%2C");
  const encodedEmployment = experience.map((value) => encodeURIComponent(value));
  const experienceSelection = encodedEmployment.join("%2C");
  const url = `https://jsearch.p.rapidapi.com/search?query=${searchQuery}&location=${location}&page=${page}&num_pages=${num_pages}&date_posted=${datePosted}&remote_jobs_only=${remoteJobsOnly}&employment_types=${jobType}&job_requirements=${experienceSelection}`;

  const options = {
    method: 'GET',
    headers: {
      'X-RapidAPI-Key': 'eb9c7af956mshca9d92ffe5851b7p105bfbjsna67362581c89',
      'X-RapidAPI-Host': 'jsearch.p.rapidapi.com',
    },
  };

  try {
    const response = await fetch(url, options);
    const result = await response.json();
    if(response.ok){
        console.log(result);
        return result; // Return the fetched data
    }else{
        return {"data":[]};
    }
  } catch (error) {
    console.error(error);
    return {"data":[]}; // Return an empty array in case of an error
  }
}

function App() {
  const [textInput, setTextInput] = useState('Software Engineering');
  const [jobs, setJobs] = useState([]); // State to store job data
  const [datePosted, setDatePosted] = useState('today');
  const [employmentType, setEmployment] = useState(["INTERN"]);
  const [location, setLocation] = useState('College Station, Texas');
  const [remoteJobsOnly, setRemote] = useState(false);
  const [experience, setExperience] = useState(['no_degree']);
  const [page, setPage] = useState(1);
  const [num_pages, setNumPages] = useState(4);

  const handleTextInputChange = (event) => {
    const newValue = event.target.value;
    setTextInput(newValue);
  };

  useEffect(() => {
    // Perform your search logic here
    // You can use the textInput and filter criteria from the state variables
    // Example: Fetch jobs based on search query and filter criteria
    fetchJobs({
      searchQuery: textInput,
      datePosted,
      employmentType,
      location,
      remoteJobsOnly,
      experience,
      page,
      num_pages,
    }).then((data) => {
      // Update the jobs data in the state
    const jobs = [];
    for (let i = 0; i < data.data.length; i++){
        jobs.push({
            "job_title": data.data[i]["job_title"],
            "employer_name" : data.data[i]["employer_name"],
            "City" : data.data[i]["job_city"],
            "State": data.data[i]["job_state"],
            "date_post": data.data[i]["job_posted_at_datetime_utc"].slice(0,10),
            "description": data.data[i]["job_description"],
            "job_apply_link": data.data[i]["job_apply_link"],
            "job_employment_type": data.data[i]["job_employment_type"],
        });
    }
    //console.log(jobs);
      setJobs(jobs);
    });
  }, [textInput, datePosted, employmentType, location, remoteJobsOnly, experience, page, num_pages]);

  return (
    <>
      <header className='header'>
        <div>
          <a href="/">
            <p className='logo' href>Jobs4Ags</p>
          </a>
          <TextField
            placeholder="Search for jobs"
            value={textInput}
            onChange={handleTextInputChange}
            InputProps={{
              endAdornment: (
                <InputAdornment position="end">
                  <SearchIcon />
                </InputAdornment>
              ),
            }}
            className="search-bar"
          />
        </div>
      </header>
      <div class="body">
        <Filters
            datePosted={datePosted}
            setDatePosted={setDatePosted}
            employmentType={employmentType}
            setEmployment={setEmployment}
            location={location}
            setLocation={setLocation}
            remoteJobsOnly={remoteJobsOnly}
            setRemote={setRemote}
            experience={experience}
            setExperience={setExperience}
        />
        <JobsComponent jobs = {jobs}/>        
      </div>

    </>
  );
}

export default App;
