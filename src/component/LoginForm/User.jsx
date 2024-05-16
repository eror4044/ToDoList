import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { logout} from "../../redux/LoginSlice";

const User =()=>{
    const dispatch =useDispatch();
    const loginName = useSelector((state) => state.login.login)
    const handleLogout = () => {
        dispatch(logout());
      };
    return(<div>
        <p>Hi, {loginName}</p>
        <Link to="/loginform"><button type="button"onClick={handleLogout}>LogOut</button></Link>
    </div>)
}

export default User