import Quiz from "./Pages/Quiz/Quiz";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Questions from "./Pages/Quiz/Questions/Questions";
import Result from "./Pages/Quiz/Result/Result";
import Hangman from "./Pages/Hangman/Hangman";
import LoginForm from "./Pages/Login/Login";
import "./App.css";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/hangman" element={<Hangman />}></Route>
          <Route path="/" element={<LoginForm />} />
          <Route path="/welcome" element={<Quiz />} />
          <Route path="/quiz" element={<Questions />} />
          <Route path="/result" element={<Result />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
