import React from 'react'

export const Navbar = () => {

    const pokeBrandImg = require.context('../img', true)
    return (
        <div className="container" style={{maxWidth:"750%", background:"black", marginBottom:"-10px"}} >
            <nav class="navbar"  style={{ backgroundColor: "black", maxBlockSize: "fit-content" }} >
                <img draggable="false" style={{ width: "20%", height: "145%", marginLeft: "40%", marginTop: "-2%" }} alt="img" src={pokeBrandImg(`./pokee.png`)}></img>
                <img draggable="false" style={{ width: "4%", height: "50%", marginLeft: "63.5%", marginTop: "-8.5%" }} alt="img" src={pokeBrandImg(`./red-ball.png`)}></img>
                <img draggable="false" style={{ width: "4%", height: "50%", marginLeft: "32.5%", marginTop: "-8.5%" }} alt="img" src={pokeBrandImg(`./red-ball.png`)}></img>
            </nav>
        </div>
    )
}