import './Job.css';
const jobType = {"FULLTIME":"Full-Time","CONTRACTOR" : "Contractor", "INTERN": "Intern", "PARTTIME":"Part-Time"}
const Job = ({job, onClick}) => {
    return (
    <div class = "job-item" onClick = {onClick}>
        <h3>{job["job_title"]}</h3>
        <div class = "job-body">
                {verify(job["employer_name"])}
                <div class= "location">
                    {verify(job["City"])}<p>, </p>{verify(job["State"])} 
                </div>
            <div class = "squares">
                {verify(job["job_employment_type"])} 
                {verify(job["date_post"])}              
            </div>
                {smallDescription(job['description'])} <p className='learn-more'>Learn more...</p>
                <p className='apply'><a className = 'apply-button' href={job["job_apply_link"]} target="_blank" rel="noopener noreferrer">Apply now</a></p>
        </div>
    </div>)
}
const verify = (data)=>{
    if(data === null){
        return <p>Not Found</p>
    }else if(jobType.hasOwnProperty(data)){
        return <p>{jobType[data]}</p>
    }
    else{
        return <p class = {data}>{data}</p>
    }
};
const smallDescription = (data) => {
    if (!data || data.indexOf('.') === -1) {
      return <p>No description available</p>;
    }
    
    const endIndex = data.indexOf('.');
    const text = data.substring(0, endIndex+1);
  
    return <p>{text}</p>;
};
export default Job;
