// npm install react-hook-form
import  {useForm} from "react-hook-form";
import { Link } from 'react-router-dom';
import './usuario.css';
import { useState } from "react";
import api from "../../services/api";


const Usuario = () => {
const[ vnome, setNome] = useState('')  //set é para 'passar o valor'
const[ vdescricao, setDescricao] = useState('') //depois, se precisar é só mudar o nome, email etc. para o q tiver na api  
const[ vpreco, setPreco] = useState('')


const handleSubmit = async () => {
try { //tente fazer isso
    //const response  = await api.post('Jack/InserirUsuarioFieb',{nome: nome, email: email, senha: senha, serie: null})
    const response  = await api.post('/produtos',{nome: vnome, descricao: vdescricao, preco: vpreco})
    console.log(response.data)
  } catch (error){ // se nao mostra o erro
  console.log(error)
}
}    //async é a sincronização com a api 


  return (
    <div className="app-container">
      <div className="form-group">
        <label>Nome Completo</label>
        <input type="text" placeholder="Informe o seu Nome Completo"  onChange={(e)=> setNome(e.target.value)}/> 
      </div>

      <div className="form-group">
        <label>Data de Nascimento</label>
        <input type="text" placeholder="Informe sua data de nascimento"  onChange={(e) => setDescricao(e.target.value)} /> 
      </div>

      <div className="form-group">
        <label>Gênero</label>
        <input type="text" placeholder="Informe o seu Gênero"  onChange={(e) => setPreco(e.target.value)} /> 
      </div>

      <div className="form-group">
        <label>CPF</label>
        <input type="text" placeholder="Informe o seu CPF"  onChange={(e) => setPreco(e.target.value)} /> 
      </div>

      <div className="form-group">
        <label>Telefone</label>
        <input type="text" placeholder="Informe o seu Número de Telefone"  onChange={(e) => setPreco(e.target.value)} /> 
      </div>

      <div className="form-group">
        <label>E-mail</label>
        <input type="text" placeholder="Informe o seu E-mail"  onChange={(e) => setPreco(e.target.value)} /> 
      </div>

      <div className="form-group">
        <label>Senha</label>
        <input type="text" placeholder="Informe a sua Senha"  onChange={(e) => setPreco(e.target.value)} /> 
      </div>
      

      <div className="form-group">
            <button onClick={handleSubmit}>Criar o seu Cadastro</button>
      </div>

    </div>
  )

}

export default Usuario;