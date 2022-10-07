import { useParams } from "react-router-dom";

const Info = () => {
  const { id } = useParams();
  return (
    <div>
      <h1>Informações sobre o Produto: {id} </h1>
      <p>Pena que não tá pegando</p>
    </div>
  );
};

export default Info;
