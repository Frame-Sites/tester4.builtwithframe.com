import RightSideComponent from './RightSideComponent'
import LeftSideComponent from './LeftSideComponent'
import Meta from '../components/Meta'

const HomePage = (props) =>{
  const profile = props.profile
  // const prepareString = s => s.replace(/<[\w]+>|<\/[\w]+>/g, "").trim().slice(0,50)
  // const about = !!profile.about?prepareString(profile.about):""
  const about = !!profile.intro[0]?profile.intro[0].content:""
  const meta_props = {
    profile:{...profile},
    title:`${props.profile.first_name} ${props.profile.last_name}`,
    description:`${about}`,
    keywords:`${props.profile.first_name} ${props.profile.last_name},personal website,portfolio`
  }
  return (
    <>
    <Meta {...meta_props} />
    <div className="main-content" style={{minHeight:'70vh'}}> 
        <LeftSideComponent {...profile} />
        <RightSideComponent {...profile}/>
    </div>
    </>
  )
}

export default HomePage
