
import { NavBarItem } from "./NavBarItem"


import './Navbar.css'
export function Navbar() {

  const navItems = ["References", "Learn", "Contact", "Blog", "Services"]
    return (
      <div className="navbar">
        <div className="navbar-logo">LOGO</div>
        <div className="navbar-menu">
          <ul className="navbar-menu-list">
            {
              navItems.map((navItem) => <NavBarItem key={navItem} title={navItem}/>)
            }
          </ul>
        </div>
      </div>
    )
}

