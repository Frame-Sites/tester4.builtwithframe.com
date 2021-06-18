import Navbar from './Navbar'
import Footer from './Footer'

const Layout = ({children}) => {
  const props = children.props
  return (
    <>
      <Navbar {...props}/>
      {children}
      <Footer />
    </>
  )
}

export default Layout
