import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Counter from "./Pages/Counter/Counter";
import Todo from "./Pages/Todo/Todo";
import TodoItem from "./Pages/TodoItem/TodoItem";
import Quiz from "./Pages/Quiz/Quiz";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Questions from "./Pages/Quiz/Questions/Questions";
import Result from "./Pages/Quiz/Result/Result";
import Hangman from "./Pages/Hangman/Hangman";
import LoginForm from "./Pages/Login/Login";
import EmojiSearch from "./Pages/EmojiSearch/EmojiSearch";

function App() {
  return (
    <div className="App">
      {/* <Counter /> */}
      {/* <Todo /> */}
      {/* <TodoItem rowsPerPage={10} isCompleted={false} all={false} /> */}
      <BrowserRouter>
        <Routes>
          <Route path="/hangman" element={<Hangman />}></Route>
          <Route path="/" element={<EmojiSearch />} />
          <Route path="/welcome" element={<Quiz />} />
          <Route path="/quiz" element={<Questions />} />
          <Route path="/result" element={<Result />} />
        </Routes>
      </BrowserRouter>
      {/* <Quiz /> */}
    </div>
  );
}

export default App;
