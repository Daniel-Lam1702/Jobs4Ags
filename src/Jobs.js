import React from 'react';
import Job from './Job.js'; // Make sure the path to Job.js is correct
import './Jobs.css';
const JobsComponent = ({ jobs }) => {
  if (jobs.length === 0 || typeof jobs === Object) {
    return <h4>No Posting Jobs were found</h4>;
  } else {
    return (
      <div class ="jobs">
        {jobs.map((job, index) => (
          <Job job={job} />
        ))}
      </div>
    );
  }
};

export default JobsComponent;
