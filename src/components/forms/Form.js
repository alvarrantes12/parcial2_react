import React, { useState, useEffect } from "react";
import { postFetch } from "../FetchMethods";
const Form = () => {
	const [name, setName] = useState("");
	const [description, setDescription] = useState("");
  
	const [message1, setMessage1] = useState("");
	const [refresh, setRefresh] = useState(true);

	const handleSubmit = async (e) => {
		e.preventDefault();
		try {
		  postFetch("contents", { name: name, description: description }).then(() => {
			setName("");
			setDescription("");
			setMessage1("Creado correctamente");
			setRefresh(true);
			window.location.replace('');
		  });
		} catch (err) {
		  console.log(err)
		}
	  }

	  return(
		<div>
		  <form onSubmit={handleSubmit}>
		    <input
			  type="text"
			  value={name}
			  placeholder="Nombre del Contenido"
			  onChange={(e) => setName(e.target.value)}
			  style={{width: "400px"}}
			/>
			<input
			  type="text"
			  value={description}
			  placeholder="Descripcion"
			  onChange={(e) => setDescription(e.target.value)}
			  style={{width: "400px"}}
			/>
			<div>{message1 ? <p>{message1}</p> : null}</div>
			<button type="submit">Crear</button>
	       </form>
		</div>
	  );
}

export default Form;

