import React from 'react'

export const Navbar = () => {

    const pokeBrandImg = require.context('../img', true)
    return (
        <div className="container" >
            <nav class="navbar" style={{ backgroundColor: "black", width: "1090px", height: "100px" }} >
                <img style={{ width: "20%", height: "145%", marginLeft: "40%", marginTop: "-2%" }} alt="img" src={pokeBrandImg(`./pokee.png`)}></img>
                <img style={{ width: "4%", height: "50%", marginLeft: "63.5%", marginTop: "-8.5%" }} alt="img" src={pokeBrandImg(`./red-ball.png`)}></img>
                <img style={{ width: "4%", height: "50%", marginLeft: "32.5%", marginTop: "-8.5%" }} alt="img" src={pokeBrandImg(`./red-ball.png`)}></img>
            </nav>
        </div>
    )
}