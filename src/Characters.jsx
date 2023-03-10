import React from 'react'

export const Characters = ({ characters }) => {

    return (
        <div className='row'>
            {
                characters.map((item, index) => (
                    <div key={index} className='col' style={{ margin: "1%" }}>
                        <div className='card' style={{ minWidth: "150px", maxWidth: "150px", border: "1px solid black" }}>
                            <img src={item.sprites.front_default} alt="img" />
                            <div className='card-body'>
                                <p className='card-title' style={{ textAlign: "center", fontFamily: "sans-serif", fontWeight: "bolder", textTransform: "capitalize", textShadow: "0px 0px 1px RED" }} >{item.name}</p>
                            </div >
                        </div>
                    </div>
                ))}
        </div>
    );
};
