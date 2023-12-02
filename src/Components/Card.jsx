import React, { useEffect, useState } from "react";
import { Link} from "react-router-dom";

import { useGlobalContext } from "./utils/global.context";

const Card = ({ name: cardname, username, id, showButton }) => {

const { setArr } = useGlobalContext();
const [selectedDentist, setSelectedDentist] = useState();
const url = `https://jsonplaceholder.typicode.com/users/${id}`;

useEffect(() => {
fetch(url)
    .then((res) => res.json())
    .then((data) => setSelectedDentist(data));
}, [url]);

const addFav = () => {
const array = JSON.parse(localStorage.getItem('arr'));
const existsDentist = array.find((elemento) => elemento.id === selectedDentist.id);
if (existsDentist) {
    console.log('No se puede agregar dentista ya existe');
} else {
    console.log('Se agrego el dentista');
    array.push(selectedDentist);
    localStorage.setItem('arr', JSON.stringify(array));
    setArr(array);
}
}

const removeCard = () => {
const array = JSON.parse(localStorage.getItem("arr"));
const index = array.findIndex((elemento) => elemento.id === selectedDentist.id);
if (index > -1) {
    array.splice(index, 1);
    localStorage.setItem("arr", JSON.stringify(array));
    setArr(array);
}
};

return (
<div className="card">
    {/* En cada card deberan mostrar en name - username y el id */}

    <Link key={id} to={`/dentist/${id}`} >

    <div>
        <img className="card-img"  src="/images/doctor.jpg" alt="Doctor" width={200}/>
        <h4>{cardname}</h4>
        <h3>{username}</h3>
    </div>

    </Link>

    {/* No debes olvidar que la Card a su vez servira como Link hacia la pagina de detalle */}
    {/* Ademas deberan integrar la logica para guardar cada Card en el localStorage */}
    {showButton ?
        <button onClick={addFav} className="favButton">
        Añadir a favoritos
        </button> :
        <button onClick={removeCard} className="favButton">
        Eliminar de favoritos
        </button>
    }
</div>
);
};

export default Card;