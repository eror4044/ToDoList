import Home from "../Home";
import ToDoList from "../ToDoList/ToDoList";
import styled from "styled-components";
import { NavLink, Routes, Route } from "react-router-dom";
import LoginForm from "../LoginForm/LoginForm";
import { useSelector } from "react-redux";
import User from "../LoginForm/User";
import css from "./pages.module.css";

const StyledLink = styled(NavLink)`
  color: black;

  &.active {
    color: white;
    
  }
  &.active::after {
    opacity: 1;
    
  }
`;

const Pages = () => {
  const isLogged = useSelector((state) => state.login.isLoggedIn);
  return (
    <div className={css.page_box}>
    
        <nav className={css.nav_box}>
          <StyledLink to="/" className={css.nav_link}>Home</StyledLink>
          <StyledLink to="/todolist"className={css.nav_link}>ToDoList</StyledLink>
          <StyledLink to="/loginform"className={css.nav_link}>LoginForm</StyledLink>
        </nav>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/todolist" element={<ToDoList />} />
        <Route path="/loginform" element={<LoginForm />} />
      </Routes>
      {isLogged && <User></User>}
    </div>
  );
};

export default Pages;
