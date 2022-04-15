import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from './pages/Home'
import Courses from './pages/Courses'
import CoursesDetails from './pages/CoursesDetails'

const App = () => {
  return (
    <div>
      <Routes>
        <Route exact path="/" element={<Home/>} key={1}/>
        <Route exact path="/courses" element={<Courses/>} key={1}/>
        <Route exact path="/courses/:id" element={<CoursesDetails/>} key={2}/>
      </Routes>
    </div>
  );
}

export default App;
