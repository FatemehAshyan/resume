import React from 'react';
import '../styles/pageStyles.css';
import locat from '../../src/locat.jfif';
import linkedin from '../../src/linkedin.png';
import telegram from '../../src/telegram.jfif';
import github from '../../src/github.png';

const Contacts = () => {
    return (
        <div className="page">
            <img alt="location" src={locat}/>
            <h3>&nbsp; Yazd , Ashkezar </h3>
            <h3><span style={{color:"red"}}>📞</span> 09928999200</h3>
            <h3><span style={{color:"#f77327"}}>📧</span> <a href="mailto:fatemehsadatah9@gmail.com">email</a></h3>
            <img alt="linkedin" src={linkedin} />
            <h3>&nbsp;<a href="https://www.linkedin.com/in/fatemeh-sadat-ashyan-7b799b20a/">linkedin</a></h3>
            <img alt="github" src={github}/>
            <h3>&nbsp;<a href="https://github.com/FatemehAshyan/">Github</a></h3>
            <img alt="telegram" src={telegram}/>
            <h3>&nbsp;@Sadatashian</h3>
        </div>
    )
}

export default Contacts
