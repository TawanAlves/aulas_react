import styles from "./Cars.module.css"
const UserDetails = ({brand, color, km}) => {
  return (
    <div className = {styles.ca}>
   <h2>Carros:</h2>
   <ul>
    <li>Marca: {brand} </li>
    <li>Cor: {color} </li>
    <li>Km: {km} </li>
   </ul>
   </div>
  )
}

export default UserDetails;