import React from 'react'
import { Link, /* NavLink */ } from 'react-router-dom'

function Header() {
	return (
		<header style={headerStyle}>
			<h1>My secret list</h1>

			<div className="menu-top">
				<Link className="nav-link" to="/"> Home </Link>
				<Link className="nav-link" to="/about"> About </Link>
				<Link className="nav-link" to="/post/777/image/888"> Post Id </Link>
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