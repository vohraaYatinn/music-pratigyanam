import React from 'react'
import { RiAccountCircleLine, RiHeartLine, RiHome2Line, RiSearchLine } from 'react-icons/ri';
import { Link } from 'react-router-dom'

const BottomNav = ({path}) => {
  return (
<>
<div className="footer mt-auto p-3 fix-osahan-footer" style={{
    height:"5rem",
    margin:"1.4rem",
    border:"2px solid transparent",
    borderRadius:"30px",
    display:"flex",
    alignItems:"center",
    justifyContent:"space-around",
    position:"absolute",
    bottom:"4rem",
    width:"90%",
    boxShadow: "4px 4px 4px 4px rgba(0, 0, 0, 0.1)"

}}>
            <Link to="/home" className={`col footer-bottom-nav ${path=="home" && "active"}`}>
            <RiHome2Line className="footer-icon" />
              <span>Home</span>
            </Link>
            <Link to="/search-doctor" className={`col footer-bottom-nav ${path=="search" && "active"}`}>
            <RiSearchLine className="footer-icon" />
              <span>Search</span>
            </Link>
            <Link to="/favorite-doctor" className={`col footer-bottom-nav ${path=="fav" && "active"}`}>
            <RiHeartLine className="footer-icon" />
              <span>Favrouite</span>
            </Link>
            <Link to="/customer-profile" className={`col footer-bottom-nav ${path=="profile" && "active"}`}>
            <RiAccountCircleLine className="footer-icon" />
              <span>Profile</span>
            </Link>
        </div>
</>  )
}

export default BottomNav;