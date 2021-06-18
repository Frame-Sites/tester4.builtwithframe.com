
const RightSideComponent = (props) => {  
  const profile = props
  const experience = profile.experience
  const leadership = profile.leadership
  const education = profile.education
  const checkAboutSection = experience.length || leadership.length || education.length
  const months = ["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"]
  const displayDate = date => date.includes("Present") || date.includes("Invalid date")
                              ?date
                              :`${months[date.split('-')[1]-1]}. ${date.split('-')[0]}`

  return(
    <div className="right-content-wrapper">
      {!!checkAboutSection && (
        <h2>About</h2>
      )}
      {!!experience.length && (
      <div className="profile-experience">
        <p>Experience</p>
        {experience.map(item => {
          return(
            <div className="profile-experience-details" key={item.id}>
              <p>{item.position}, {item.company}</p>
              <p>{displayDate(item.start_date)} - {displayDate(item.end_date)}</p>
            </div>
          )
        })}
      </div> 
      )}
      {!!leadership.length && (
      <div className="profile-leadership">
        <p>Leadership</p>
        {leadership.map(item => {
          return(
            <div className="profile-leadership-details" key={item.id}>
              <p>{item.position}, {item.organization}</p>
              <p>{displayDate(item.start_date)} - {displayDate(item.end_date)}</p>
            </div>
          )
        })}         
      </div>
      )}
      {!!education.length && (
      <div className="profile-education">
        <p>Education</p>
        {education.map(item => {
          return(
            <div className="profile-education-details" key={item.id}>
              <p>{!!(item.university) ? item.university : '' }</p>
              <p>{!!(item.university) ? `${item?.degreeSubtype} in ${!!item.majorOne?item.majorOne:""} ${!!item.majorTwo?"and":""} ${!!item.majorTwo?item.majorTwo:""}`: '' } </p>
            </div>
          )
        })}    
      </div>
      )}
    </div>
  )
}

export  default RightSideComponent