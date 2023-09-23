import React from 'react';
import Job from './Job.js'; // Make sure the path to Job.js is correct
import './Jobs.css';
const JobsComponent = ({jobs, search}) => {
  if (jobs.length === 0 || typeof jobs === Object) {
    return (<div>
      <h4>No Posting Jobs were found</h4>
    </div>);
  } else {
    return (
      <>
        <div class ="jobs">
          <h2>Jobs found for {search}</h2>
          {jobs.map((job, index) => (
            <Job job={job} key={index} />
          ))}
        </div>
      </>
    );
  }
};

export default JobsComponent;
