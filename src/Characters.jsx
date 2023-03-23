import React from 'react';
import styles from './style.css';


export const Characters = ({ characters }) => {
    function changeMouseOver(e) {
        e.target.style.background = 'black';

    }
    function changeMouseOut(e) {

        e.target.style.background = '';
    }





    return (
        <div className='row' draggable="false" style={{ margin: "10px 60px 50px 70px", alignItems: "center", flex: "0 0 0%" }}>

            {
                characters.map((item, index) => (
                    <div key={index} className='col' style={{ margin: "1%", display: "block", flex: "0 0 0%" }}>
                        <div className='card' style={{ minWidth: "150px", maxWidth: "150px", border: "1px solid black" }}>

                            <img src={item.sprites.front_default} alt="img" draggable="false" id="hoverCards" class="img-thumbnail hover-effect" onMouseOver={changeMouseOver} onMouseOut={changeMouseOut} />



                            <div className='card-body'>
                                <p className='card-title' style={{
                                    textAlign: "center", fontFamily: "comic Sans MS", fontSize: "18px", fontWeight: "bolder", textTransform: "capitalize", color: "#1278BF",
                                    textShadow: "0px 0px 9px #508AD3"
                                }} >{item.name}</p>
                            </div >
                        </div>
                    </div>
                ))}
        </div>
    );
};
