import React , {useState} from 'react';
import './App.css';
import profile from "./profile.png";
import Skills from './components/Skills';
import Contacts from './components/Contacts';
import PersonalInfo from './components/PersonalInfo';
import Certification from './components/Certification';

function App() {
  const [tabNumber, setTabNumber] = useState(1);

  return (
    <div className="App">
      <header className="App-header">
        <img src={profile} alt="profile"/>
        <h1>Fatemeh Sadat Ashyan</h1>
        <h2>Front-end developer</h2>
      </header>
      <div>
        {tabNumber === 1 && <Skills/>}
        {tabNumber === 2 && <Contacts/>}
        {tabNumber === 3 && <PersonalInfo/>}
        {tabNumber === 4 && <Certification/>}
      </div>
      <div className="meno">
        <button style={tabNumber===1?{backgroundColor:"#61dafb",color:"#282c34"}:{backgroundColor:"#282c34",color:"#61dafb"}} onClick={()=>setTabNumber(1)}>Skills</button>
        <button style={tabNumber===2?{backgroundColor:"#61dafb",color:"#282c34"}:{backgroundColor:"#282c34",color:"#61dafb"}} onClick={()=>setTabNumber(2)}>Contacts</button>
        <button style={tabNumber===3?{backgroundColor:"#61dafb",color:"#282c34"}:{backgroundColor:"#282c34",color:"#61dafb"}} onClick={()=>setTabNumber(3)}>Personal Information</button>
        <button style={tabNumber===4?{backgroundColor:"#61dafb",color:"#282c34"}:{backgroundColor:"#282c34",color:"#61dafb"}} onClick={()=>setTabNumber(4)}>Certification</button>
      </div>
    </div>
  );
}

export default App;
