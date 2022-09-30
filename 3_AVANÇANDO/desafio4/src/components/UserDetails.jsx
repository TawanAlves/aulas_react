const UserDetails = ({ name, age, job}) => {
  return (
    <>
   <h2>Pessoas:</h2>
   <ul>
    <li>Nome: {name} </li>
    <li>Idade: {age} </li>
    <li>Trabalho: {job} </li>
    {age > 18 ? ( <h3>já pode tirar a carteira</h3>):( <h3>não pode tirar a carteira</h3>)}
   </ul>
   </>
  )
}

export default UserDetails