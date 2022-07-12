import {useState, useEffect} from "react";
import {getFetch, postFetch} from "./FetchMethods";
import List from "./List";
import WithLoadingList from "./WithLoadingList";

const Forms = (props) => {
    const LoadingList = WithLoadingList(List);

    const [appStateLoading, setAppStateLoading] = useState(false)
    const [appStateObject, setAppStateObject] = useState(null)
    const [appStateObject2, setAppStateObject2] = useState(null)

    const [name, setName] = useState("");
    const [description, setDescription] = useState("");
    const [message, setMenssage] = useState("");

    const [refresh, setRefresh] = useState(true);

    useEffect(() => {
        if(refresh){
          setAppStateLoading(true);
          getFetch("contents").then(val => setAppStateObject(val))
          getFetch("special_contents").then(val => setAppStateObject2(val))
          setAppStateLoading(false);
          setRefresh(false);
        }
      }, [setAppStateLoading, setAppStateObject, refresh])


    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
          postFetch("contents", {name: name, description: description }).then(() => {
            setName("");
            setDescription("");
            setMenssage("Creado correctamente");
            setRefresh(true);
          });
        } catch (err) {
          console.log(err)
        }
      }

    return(
        <div>
            <br />
                <form onSubmit={handleSubmit}>
                    <input
                        type="text"
                        value={name}
                        placeholder="Nombre del contenido"
                        onChange={(e) => setName(e.target.value)}
                        style={{width: "300px", size: 30}}
                    />
                    <br />
                    <input
                        type="text"
                        value={description}
                        placeholder="Descripción contenido"
                        onChange={(e) => setDescription(e.target.value)}
                        style={{width: "300px", size: 30}}
                    />

                    <div className="Component-Message">{message ? <p>{message}</p> : null}</div>
                    <button type="submit" size="30">Crear</button>
                </form>
        </div>
    )
}
export default Forms;