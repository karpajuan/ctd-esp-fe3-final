import Card from "../Components/Card";
import { useGlobalContext } from "../Components/utils/global.context";

//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context


const Favs = () => {  
  const {setArr} = useGlobalContext()
  const favourites =  JSON.parse(localStorage.getItem("arr"))

  const clearFav = () =>{setArr(localStorage.setItem("arr", JSON.stringify([])))}
  return (
    <div className="fav vista">
      <button onClick={clearFav} >🗑️</button>
      <h1>Dentistas favoritos</h1>
      <div className="card-grid">
        {/* este componente debe consumir los destacados del localStorage */}
        {/* Deberan renderizar una Card por cada uno de ellos */}
        {favourites.map((favourites) => 
        <Card key={favourites.id} name={favourites.name} username={favourites.username} id={favourites.id} showButton={false}/>
    )}
      </div>
    </div>
  );
};

export default Favs;