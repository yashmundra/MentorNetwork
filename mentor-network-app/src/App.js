import './App.css';
import HomePage  from './homePage/HomePage.js'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import MentorLanding from './mentorLanding/MentorLanding';
import Questionaire from './questionaire/Questionaire';
function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route exact path="/" element={<HomePage />}/>
      <Route exact path="/questionaire" element={<Questionaire />}/>
      <Route exact path="/mentorLanding" element={<MentorLanding />}/>
    </Routes>
    </BrowserRouter>
  );
}

export default App;
