import React from "react"; // library import

// component body -> React Functional Component
function Menu(props) {
    return(
        <nav className="menu">
            <a href="/">Home</a>
            <a href="/">About</a>
            <a href="/">Register</a>
            <a href="/">Help</a>
        </nav>
    )
}

// export default
export default Menu