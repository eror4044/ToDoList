import Home from "../Home";
import ToDoList from "../ToDoList/ToDoList";
import styled from "styled-components";
import { NavLink,Routes,Route } from "react-router-dom";
import LoginForm from "../LoginForm/LoginForm";
import { useSelector } from "react-redux";
import User from "../LoginForm/User";

const StyledLink = styled(NavLink)`
  color: black;

  &.active {
    color: orange;
  }
`;

const Pages = () => {
  const isLogged = useSelector((state) => state.login.isLoggedIn)
  return (
    <div className="Papa">
      <nav className="css.nav">
        <StyledLink to="/">Home</StyledLink>
        <StyledLink to="/todolist">ToDoList</StyledLink>
        <StyledLink to="/loginform">LoginForm</StyledLink>
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
