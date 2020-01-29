import React from 'react'

function Header() {
	return (
		<header style={headerStyle}>
			<h1>My secret list</h1>
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