import Home from "../Home";
import ToDoList from "../ToDoList/ToDoList";
import { Routes, Route } from "react-router-dom";
import LoginForm from "../LoginForm/LoginForm";
import { useSelector } from "react-redux";
import User from "../LoginForm/User";
import NavigationBar from "../Pages/GlobalNavigationBar/NavigationBar"
import css from "./pages.module.css";

const Pages = () => {
  const isLogged = useSelector((state) => state.login.isLoggedIn);
  return (
    <>
      <NavigationBar />
      <div className={css.page_box}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/todolist" element={<ToDoList />} />
          <Route path="/loginform" element={<LoginForm />} />
        </Routes>
        {isLogged && <User></User>}
      </div>
    </>
  );
};

export default Pages;
