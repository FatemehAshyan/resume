import React from 'react';
import '../styles/pageStyles.css';
import sampad from '../../src/sampad.jpg';
import uni from '../../src/uni.png';

const Certification = () => {
    return (
        <div className="page">
            <img alt="sampad" src={sampad} style={{width:"70px",height:"70px"}}/>
            <h2 > &nbsp; Diploma: </h2>
            <p>&emsp;Sampad Math diploma</p><br/>
            <img alt="university" src={uni} style={{width:"70px",height:"100px"}}/>
            <h2> &nbsp;Bachelor: </h2>
            <p>&emsp; Yazd university computer enginnering (studying)</p>
        </div>
    )
}

export default Certification
