import { useParams } from 'react-router-dom';
import { useGlobalContext } from '../Components/utils/global.context';
import "../Styles/detailStyles.css"


//No logre hacer que consuma el ApiState :(((

//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Detail = () => {

  const {apiState} = useGlobalContext();
  // Consumiendo el parametro dinamico de la URL deberan hacer un fetch a un user en especifico
  const paramsId = useParams();
  const dentist = apiState.find((d) => paramsId.id === d.id )
  return (

    <div>
      <h1>Detalles de {dentist.id} </h1>
      {/* aqui deberan renderizar la informacion en detalle de un user en especifico */}
      {/* Deberan mostrar el name - email - phone - website por cada user en especifico */}
      <table>
        <tr>
          <th>Name</th>
          <th>Email</th>
          <th>Phone number</th>
          <th>Website</th>
        </tr>
        <tr>
          <td>{dentist.name}</td>
          <td>{dentist.email}</td>
          <td>{dentist.phone}</td>
          <td>{dentist.website}</td>
        </tr>
      </table>
    </div>
  )
}

export default Detail