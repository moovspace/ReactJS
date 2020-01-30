import React from 'react'
import { /* Link, */ NavLink } from 'react-router-dom'

// NavLink - Add active link style
// <NavLink exact className="nav-link" activeClassName="nav-link-active" activeStyle={{ color: "red" }} to="/"> Home </NavLink>
// <NavLink className="nav-link" activeClassName="nav-link-active" activeStyle={{ color: "red" }} to="/about"> About </NavLink>
// Link
// <Link exact className="nav-link" to="/"> Home </Link>
// <Link className="nav-link" to="/about"> About </Link>
// <Link className="nav-link" to="/post/777/image/888"> Post Id </Link>

function Header() {
	return (
		<header style={headerStyle}>
			<h1>My secret list</h1>

			<div className="menu-top">
				<NavLink exact className="nav-link" activeClassName="nav-link-active" to="/"> Home </NavLink>
				<NavLink className="nav-link" activeClassName="nav-link-active" to="/about"> About </NavLink>
				<NavLink className="nav-link" activeClassName="nav-link-active" to="/post/777/image/888"> Post Id </NavLink>
			</div>

		</header>		
	)
}

const headerStyle = {
	padding: "10px",
	marginTop: "20px",
	backgroundColor: "#eee",
	color: "#42b985",
	border: "0px solid #42b985",
	marginBottom: "10px",
	borderRadius: "5px",
	textAlign: "center",
	textTransform: "uppercase"
}

export default Header