import './App.css';
import HomePage  from './components/homePage/HomePage'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import MentorLanding from './components/mentorLanding/MentorLanding';
import Questionaire from './components/questionaire/Questionaire';
import MentorListing from './components/mentorListing/MentorListing';
import SignUpLogin from './components/signUpLogin/SignUpLogin';
import ChatWindow from './components/chatWindow/ChatWindow';
import * as Constants from './constants/Constants';

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route exact path={Constants.HOME_URL} element={<HomePage />}/>
      <Route exact path={Constants.QUESTIONAIRE_URL} element={<Questionaire />}/>
      <Route exact path={Constants.MENTOR_LANDING_URL} element={<MentorLanding />}/>
      <Route exact path={Constants.MENTOR_LISTING_URL} element={<MentorListing />}/>
      <Route exact path={Constants.CHAT_URL} element={<ChatWindow />}/>
      <Route exact path={Constants.SIGNUP_LOGIN_URL} element={<SignUpLogin />}/>
    </Routes>
    </BrowserRouter>
  );
}

export default App;
