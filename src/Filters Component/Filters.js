/*JS*/
import React, { useEffect } from 'react';
import DropdownMenu from './DropDown';
import DropdownTextInput from './DropDownTextInput';
import MultipleChoiceDropdown from './MultipleChoice';
import "./Filters.css";
function Filters({datePosted, setDatePosted, employmentType, setEmployment, location, setLocation, remoteJobsOnly, setRemote, experience, setExperience, updateSearch}) {
  return (
    <div class = "filters">
      <div class = "filters-container">
        <h1 class = "title">Filters</h1>
        <h3>___________________________</h3>
        < DropdownMenu label = "Date Posted" values = {[{ key: "all", value: "All" }, { key: "today", value: "Today" }, { key: "3days", value: "3 days" },{ key: "week", value: "Week" }, { key: "month", value: "Month" }]} selection = {datePosted} method = {setDatePosted}/>
        < MultipleChoiceDropdown label = "Job Type" values = {[{ key: "FULLTIME", value: "Full Time" },{ key: "CONTRACTOR", value: "Contractor" }, { key: "PARTTIME", value: "Part Time" }, { key: "INTERN", value: "Intern" }]} selection = {employmentType} method = {setEmployment}/>
        < DropdownMenu label = "Remote Jobs" values = {[{ key: true, value: "Yes" }, { key: false, value: "No" }]} selection = {remoteJobsOnly} method = {setRemote}/>
        < DropdownTextInput label = "Location" location = {location} setLocation={setLocation} />
        < MultipleChoiceDropdown label = "Experience" values = {[{ key: "under_3_years_experience", value: "Under 3 years of experience" }, { key: "more_than_3_years_experience", value: "More than 3 years of experience" }, { key: "no_experience", value: "No experience" }, { key: "no_degree", value: "No degree" }]} selection = {experience} method = {setExperience}/>
        <button style={{cursor:'pointer'}} className='apply-filter-button' onClick={updateSearch}>Apply Filter</button>
      </div>
    </div>
  );
}

export default Filters;
