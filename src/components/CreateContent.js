import React, {useState} from 'react'
import { postFetch } from "./FetchMethods"

const CreateContent = ({ setRefresh }) => {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      postFetch("contents", { name: name, description: description }).then(() => {
        setName("");
        setDescription("");
        setMessage("Creado correctamente");
        setRefresh(true);
      })
    } catch (err) {
      console.log(err)
    }
  }

  return (
    <form onSubmit={handleSubmit}>
        <input
          type="text"
          className="css-input"
          value={name}
          placeholder="Content name"
          onChange={(e) => setName(e.target.value)}
          style={{ width: "400px" }}
        />
        <br />
        <input
          type="text"
          className="css-input"
          value={description}
          placeholder="Description"
          onChange={(e) => setDescription(e.target.value)}
          style={{ width: "400px" }}
        />
        <br />
        <div className="user-message">{message ? <p>{message}</p> : null}</div>
        <button type="submit" className="create-button">Crear</button>
      </form>
  );
}

export default CreateContent;