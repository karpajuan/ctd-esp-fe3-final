import React, { useState } from "react";

const Form = () => {

  // Aquí se definen las expresiones regulares para la validación de inputs
  const EMAIL_REGEX = /^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/;
  const NAME_REGEX = /^[a-zA-Z]+$/;

  // Aquí se definen los estados iniciales del formulario
  const [formData, setFormData] = useState({
    name: "",
    email: ""
  });

  const [successMessage, setSuccessMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  // Función que se llama cada vez que cambia el valor de los inputs del formulario
  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

  // Función que se llama cuando se envía el formulario
  const handleSubmit = (event) => {
    event.preventDefault();
    
    // Se valida la información ingresada en los inputs
    if (
      formData.name.indexOf(" ") !== 0 &&
      NAME_REGEX.test(formData.name) &&
      formData.name.length > 5 &&
      EMAIL_REGEX.test(formData.email)
    ) {
      setSuccessMessage(`¡Gracias ${formData.name}! Te contactaremos cuanto antes vía mail`);
      setErrorMessage("");
      setFormData({ name: "", email: "" });
    } else {
      setErrorMessage("Por favor verifique su información nuevamente");
      setSuccessMessage("");
    }
  };

  return (
    <div className="contenedor-formulario">
      <form className="formulario" onSubmit={handleSubmit}>
        <div className="input">
          <label htmlFor="name">Ingrese su nombre</label>
          <input 
            type="text" 
            id="name" 
            name="name" 
            placeholder="Name" 
            value={formData.name} 
            onChange={handleInputChange}
          />
        </div>

        <div className="input">
          <label htmlFor="email">Por favor, ingrese su mail </label>
          <input 
            type="text" 
            id="email" 
            name="email" 
            placeholder="myemail@email.com"
            value={formData.email} 
            onChange={handleInputChange}
          />
        </div>
        
        <button class="favButton contactBtn" type="submit">Enviar</button>

      </form>
      {errorMessage && <h3>{errorMessage}</h3>}
      {successMessage && <h3>{successMessage}</h3>}
    </div>
  );
};

export default Form;
