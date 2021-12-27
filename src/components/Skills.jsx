import React from 'react';
import '../styles/pageStyles.css';
import reactLogo from '../../src/logo192.png';
import jsLogo from '../../src/jsLogo.png';
import ajaxLogo from '../../src/ajax.png';
import htmlCss from '../../src/html.jfif';

const Skills = () => {
    return (
        <div className="page">
            <h2><a href="https://dreamy-goodall-ff571f.netlify.app/">Click Here to Work samples</a></h2><br/>
            <img alt="react" src={reactLogo}/>
            <h2>React & Libraries :</h2>
            <p>- JSX, Class-Based Component, Functional Component, Lifecycle,
                Hooks, Context API, Form Validations, HOC, Container-Presentational,
                Component Architecture, Prop Types, Custom hook
            </p>
            <p>- Material-UI, UIKits, Styled Component, CSS Modules, Page Animations</p>
            <p>- Redux, React Router,Redux toolkit</p>
            <p>- Environments Variables, React Dev Tools</p><br/>
            <img alt="js" src={jsLogo} />
            <h2>Javascript :</h2>
            <p>- ES6, Async Programming, OOP in JS</p>
            <p>- Pure JS SPA, Templating, DOM Manipulation</p><br/>
            <img alt="ajax" src={ajaxLogo}/>
            <h2>Ajax :</h2>
            <p>REST API, HTTP, Axios</p><br/>
            <img alt="html css" src={htmlCss} style={{width:"40px"}}/>
            <h2>HTML & CSS :</h2>
            <p>- HTML5, CSS3, RWD (Responsive Web Design), SVG, LESS,
            SASS</p>
            <p>- Form Validation</p><br/>
            <h2>🛠 Tools :</h2>
            <p>- NPM, CRA, Node, Express</p>
            <p>- git</p>
        </div>
    )
}

export default Skills;
