import createImageUrl from '../utils/createImageUrl'

const LeftSideComponent = (props) => {
  const profile = props
  const key = profile.assets.filter(asset => (asset.type == "primary")).length >= 1
  const validKey = key?profile.assets.filter(asset => (asset.type == "primary"))[0].url:""
  const url = key?createImageUrl(validKey):"/images/frame-logo.svg";
  const name = `${profile.first_name} ${profile.last_name}`
  const facebook_url =!!profile.socials.filter(item => item.type=="Facebook")[0]
                      ?profile.socials.filter(item => item.type=="Facebook")[0].url
                      :""
  const twitter_url = !!profile.socials.filter(item => item.type=="Twitter")[0]
                      ?profile.socials.filter(item => item.type=="Twitter")[0].url
                      :""
  const linkedin_url = !!profile.socials.filter(item => item.type=="LinkedIn")[0]
                      ?profile.socials.filter(item => item.type=="LinkedIn")[0].url
                      :""
  const github_url = !!profile.socials.filter(item => item.type=="GitHub")[0]
                      ?profile.socials.filter(item => item.type=="GitHub")[0].url
                      :""
  const instagram_url = !!profile.socials.filter(item => item.type=="Instagram")[0]
                      ?profile.socials.filter(item => item.type=="Instagram")[0].url
                      :""
  const medium_url = !!profile.socials.filter(item => item.type=="Medium")[0]
                      ?profile.socials.filter(item => item.type=="Medium")[0].url
                      :""
  const issuu_url = !!profile.socials.filter(item => item.type=="Issuu")[0]
                      ?profile.socials.filter(item => item.type=="Issuu")[0].url
                      :""
  //function for cleaning html tags from String
  // const prepareString = s => s.replace(/<[\w]+>|<\/[\w]+>/g, "").trim().slice(0,50)
  const about = !!profile.intro[0]?profile.intro[0].content:""
    return(
      <div className="left-content-wrapper">
        <div className="profile-content">
          <div className="image-container">
            <img src={url} alt="profile_photo"></img>
          </div>
          <h2>{name}</h2>
          <p>{about}</p>
          <div className="social-icons">
            {facebook_url && (
              <a href={facebook_url} target="_blank">
                <span className="facebook-icon"></span>
              </a>
            )}
            {twitter_url && (
              <a href={twitter_url} target="_blank">
                <span className="twitter-icon"></span>
              </a>
            )}
            {linkedin_url && (
              <a href={linkedin_url} target="_blank">
                <span className="linkedin-icon"></span>
              </a>
            )}
            {instagram_url && (
              <a href={instagram_url} target="_blank">
                <span className="instagram-icon"></span>
              </a>
            )}
            {github_url && (
              <a href={github_url} target="_blank">
                <span className="github-icon"></span>
              </a>
            )}
            {medium_url && (
              <a href={medium_url} target="_blank">
                <span className="medium-icon"></span>
              </a>
            )}
            {issuu_url && (
              <a href={issuu_url} target="_blank">
                <span className="issuu-icon"></span>
              </a>
            )}
          </div>
        </div>
        {!!profile.skills.length && (
          <div className="profile-skills">
          <p>Skills</p>
          <ul>
            {profile.skills.map(item => {
              return(
                <li key={item.id}>{item.content}</li>
              )
            })
            }
          </ul>
        </div>
        )}
        {!!profile.coursework.length && (
          <div className="profile-coursework">
          <p>Coursework</p>
          <ul>
            {profile.coursework.map(item => {
              return(
                <li key={item.id}>{item.course_name}</li>
              )
            })
            }   
          </ul>
        </div>
        )}
      </div>
    )

    }
export default LeftSideComponent