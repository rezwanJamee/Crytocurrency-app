import React from 'react'

const Navbar = () => {
    return (
        <div>
            <nav className="navbar fixed-top navbar-expand-lg navbar-dark bg-dark">
                <div className="container">
                    <a className="navbar-brand fs-2" href="/">Cryptocurrency News</a>

                    
                        <div className="navbar-nav">
                            <a className="nav-link" href="/">Home</a>
                            <a className="nav-link" href="/trending">Trending</a>
                        </div>
                    
                </div>                           
            </nav>
        </div>
    )
}

export default Navbar
