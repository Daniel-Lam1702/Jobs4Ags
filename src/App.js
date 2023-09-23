import React, { useState, useEffect, useCallback } from 'react';
import Filters from './Filters Component/Filters';
import './App.css';
import JobsComponent from './Jobs Component/Jobs';
import Header from './Header Component/Header';



async function fetchJobs({ searchQuery = "Software Engineering", datePosted, employmentType, location, remoteJobsOnly, experience, page, num_pages }) {
  const encodedJobs = employmentType.map((value) => encodeURIComponent(value));
  const jobType = encodedJobs.join("%2C");
  const encodedEmployment = experience.map((value) => encodeURIComponent(value));
  const experienceSelection = encodedEmployment.join("%2C");
  var queryAndLocation = searchQuery.replace(" ", "%20") + "%20" + location.replace(" ", "20%");
  queryAndLocation = queryAndLocation.replace(",", "%2C");
  const url = `https://jsearch.p.rapidapi.com/search?query=${queryAndLocation}&page=${page}&num_pages=${num_pages}&date_posted=${datePosted}&remote_jobs_only=${remoteJobsOnly}&employment_types=${jobType}&job_requirements=${experienceSelection}`;
  const options = {
    method: 'GET',
    headers: {
      'X-RapidAPI-Key': 'secret-api-key',
      'X-RapidAPI-Host': 'jsearch.p.rapidapi.com',
    }, //Create a secret api key on rapidapi. Search for Jsearch
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
  const [num_pages, setNumPages] = useState(1);

  const handleTextInputChange = (event) => {
    const newValue = event.target.value;
    setTextInput(newValue);
  };

  const displayJobs = () => {
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
      const jobs = [];
      for (let i = 0; i < data.data.length; i++) {
        jobs.push({
          "job_title": data.data[i]["job_title"],
          "employer_name": data.data[i]["employer_name"],
          "City": data.data[i]["job_city"],
          "State": data.data[i]["job_state"],
          "date_post": data.data[i]["job_posted_at_datetime_utc"].slice(0, 10),
          "description": data.data[i]["job_description"],
          "job_apply_link": data.data[i]["job_apply_link"],
          "job_employment_type": data.data[i]["job_employment_type"],
        });
      }
      setJobs(jobs);
    });
  };
  return (
    <>
      <Header textInput={textInput} handleTextInputChange={handleTextInputChange} displayJobs={() => {setPage(1); displayJobs();}}/>
      <div class="body">
        <Filters
            page={page}
            setPage={setPage}
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
            updateSearch = {() => {setPage(1); displayJobs();}}
            updatePageSearch = {() => displayJobs()}
        />
        <JobsComponent jobs = {jobs} search={textInput}/>        
      </div>
    </>
  );
}

export default App;
