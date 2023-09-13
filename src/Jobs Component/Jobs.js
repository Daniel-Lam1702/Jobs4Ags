import React, { useState } from 'react';
import Job from './Job.js'; // Make sure the path to Job.js is correct
import './Jobs.css';
import JobSelected from './JobSelected.js';
const displayPages = (page, setPage, updateSearch) => {
  var pages = [];
  if(page <= 2){
    pages.push(1);
    pages.push(2);
    for (let index = 3; index <= 5; index++) {
      pages.push(index);
    }
  }else{
    pages.push(page-2);
    pages.push(page-1);
    for (let index = page; index <= page + 2; index++) {
      pages.push(index);
    }
  }
  return pages.map((element) => (
    <button style={{cursor:'pointer'}} key={element} onClick={() => {setPage(element); updateSearch();}} className={element === page ? 'selected-page' : ''}>
      {element}
    </button>
  ));
}
const JobsComponent = ({ updateSearch, jobs, search, page, setPage }) => {
  const [showJobSelected, setShowJobSelected] = useState(false);
  const [jobSelected, setJobSelected] = useState({});
  const changeShowJobSelected = (job) => {
    if(job !== jobSelected){
      setShowJobSelected(true);
      setJobSelected(job);
    }else{
      setShowJobSelected(!showJobSelected);      
    }
  }
  if (jobs.length === 0 || typeof jobs === Object) {
    return (<div>
      <h4>No Posting Jobs were found</h4>
      <div class = "pages">
        {displayPages(page, setPage)}  
      </div>
    </div>);
  } else {
    return (
      <>
        <div class ="jobs">
          <h2>Jobs found for {search}</h2>
          {jobs.map((job, index) => (
            <Job job={job} key={index} onClick = {() => {changeShowJobSelected(job);}} />
          ))}
          <div class = "pages">
            {displayPages(page, setPage, updateSearch)}  
          </div>
        </div>

        <div class = "job-selected">
          {showJobSelected && <JobSelected job={jobSelected}/>} 
        </div>    
      </>
    );
  }
};

export default JobsComponent;
