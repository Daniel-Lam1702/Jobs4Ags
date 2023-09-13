import "./JobSelected.css";
const jobType = {"FULLTIME":"Full-Time","CONTRACTOR" : "Contractor", "INTERN": "Intern", "PARTTIME":"Part-Time"}
const JobSelected = ({job}) => {
    return (
    <div class = "job-selection">
        <h3>{job["job_title"]}</h3>
        <div class = "job-employer-name">
            {verify(job["employer_name"])}
            <div class= "location">{verify(job["City"])}<p>, </p>{verify(job["State"])} </div>
        </div>
        <div class = "squares">
            {verify(job["job_employment_type"])} 
            {verify(job["date_post"])}              
        </div>
        <div className="description">
            {verify(job['description'])}            
        </div>
        <div className="apply-button"> 
            <a href={job["job_apply_link"]} target="_blank" rel="noopener noreferrer">Apply now</a>
        </div>
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
export default JobSelected;