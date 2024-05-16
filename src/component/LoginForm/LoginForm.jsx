import { useForm } from "react-hook-form";
import {  useDispatch } from "react-redux";
import { setIsLogged, setLogin, setPassword } from "../../redux/LoginSlice";
import { useNavigate } from "react-router-dom";

export default function LoginForm() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    dispatch(setLogin(data.login));
    dispatch(setPassword(data.password));
    dispatch(setIsLogged(true))
    reset();
    navigate("/");

  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <input {...register("login", { required: true })} />
      {errors.login && <span>This field is required</span>}

      <input type="password" {...register("password", { required: true })} />

      {errors.password && <span>This field is required</span>}

      <input type="submit" />
    </form>
  );
}
