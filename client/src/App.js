import './App.css';
import Home from './components/Home/Home';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import QuestionAnswering from './components/QuestionAnswering/QuestionAnswering';
import Login from './components/Login/Login';
import SignUp from './components/SignUp/SignUp';

function App() {
  return (
    <Router>
    <Routes>
      <Route path="/" element={<Home />}/>
      <Route path="/quesans" element={<QuestionAnswering />}/>
      <Route path="/login" element={<Login />}/>
      <Route path="/signup" element={<SignUp />}>
      </Route>
    </Routes>
  </Router>
  );
}

export default App;