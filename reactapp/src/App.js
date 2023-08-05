import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./Home";
import Layouts from "./Layouts";
import SinglePost from "./SinglePost";
import TaskList from "./Task";
import EditTask from "./EditTask";
import 'bootstrap/dist/css/bootstrap.min.css';
import Registration from "./components/auth/registration";
import Login from "./components/auth/login";



function App(props) {


  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layouts />}>
          <Route index element={<Home />} />
          <Route path="about" element={<h1>This is about page </h1>} />
          <Route path="detail/:postId" element={<SinglePost />} />
          <Route path="task" element={<TaskList />} />
          <Route path="/task/edit/:taskId" element={<EditTask />} />
          <Route path="sign-up" element={<Registration />} />
          <Route path="login" element={<Login />} />
          <Route path="*" element={<h1>Nothing is found </h1>} />
        </Route>
      </Routes>

    </BrowserRouter>
  );
}




export default App;
