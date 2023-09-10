import './Job.css';
const jobType = {"FULLTIME":"Full-Time","CONTRACTOR" : "Contractor", "INTERN": "Intern", "PARTTIME":"Part-Time"}
const Job = ({job}) => {
    return (<div class = "job-item">
        <h3>{job["job_title"]}</h3>
        {verify(job["employer_name"])}
        <div class= "location">{verify(job["City"])}<p>, </p>{verify(job["State"])} </div>
        <div>
            {verify(job["job_employment_type"])} 
            {verify(job["date_post"])}           
        </div>
        {smallDescription(job['job_description'])}
        <a href={job["job_apply_link"]} target="_blank" rel="noopener noreferrer">Apply now</a>
        <h3>____________________________________________</h3>
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
    const text = data.substring(0, endIndex);
  
    return <p>{text}</p>;
};
export default Job;
