// npm install react-hook-form
import  {useForm} from "react-hook-form";
import { Link } from 'react-router-dom';
import './login.css';

const Login = () => {
    const {register, handleSubmit} = useForm();

    const onSubmit = (data) => {
        alert(JSON.stringify(data))  
    };

  return (
    <div className="app-container">
      <div className="form-group">
        <label>Nome</label>
        <input type="text" placeholder="Seu Nome"  {...register ("nome")} /> 
      </div>

      <div className="form-group">
        <label>E-mail</label>
        <input type="email" placeholder="Seu Email"  {...register ("email")} /> 
      </div>

        <div className="form-group">
            
            <button onClick={() =>handleSubmit(onSubmit)()}>Login</button>
      </div>

    </div>
  )

}

export default Login;
