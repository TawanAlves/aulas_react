import { useState } from 'react'
import './MyForm.css'

const MyForm = ({user}) => {
  // 6 - Controlled inputs
  // 3- gerenciamento de dados    
  const [name, setName] = useState(user ? (user.name) : (''));
  const [email, setEmail] =useState(user ? (user.email) : (''));
  const [bio, setBio] = useState(user ? (user.bio) : (''));
  const [role, setRole] = useState(user ? (user.role) : (''))

  const handleName = (e) =>{
    setName(e.target.value);
  };

  // console.log(name);
  // console.log(email);

  const handleSubmit = (event) =>{
    event.preventDefault();
    console.log("Enviando o formulário");
    console.log(name, email, bio, role);

    // 7 - Limpar Form
    setName("");
    setEmail("");
    setBio("");
  }

  return (
    <div>
      {/* 5-envio de form */}
      {/*1- criação de form */}
      <form onSubmit={handleSubmit}>
         <div>
            <label htmlFor="name">Nome:</label>
            <input type="text" name="name" id="name" placeholder='Digite seu Nome' onChange={handleName} value={name} />
         </div>

         {/*2- label envolvendo input */}
         <label >
          <span>E-mail:</span>
          {/* 4-Simplificação da manipulação de state */}
          <input type="email" name="email" id="email" placeholder='Digite seu E-mail' onChange={(e) => setEmail(e.target.value)} value={email} />
         </label>
         {/* 8- Text Area */}
         <label>
          <span>Bio:</span>
          <textarea name="bio" placeholder='Descrição do usuário' onChange={(e) => setBio(e.target.value)} value={bio} ></textarea>
          </label>

          {/* 9- Select */}
          <label>
            <span>Função no Sistema</span>
            <select name="role" onChange={(e) => setRole(e.target.value)} value={role} >
              <option value="user">Usuário</option>
              <option value="editor">Editor</option>
              <option value="admin">Administrador</option>
            </select>
          </label>

         <input type="submit" value="Enviar" />
      </form>


    </div>
  )
}

export default MyForm