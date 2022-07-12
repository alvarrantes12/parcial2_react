import React, { useState, useEffect } from "react";
import { postFecth, getFetch} from "./FetchMethods";

import List from "./List";
import WithLoadingList from "./WithLoadingList";

const Post = () => {

    const [message1, setMessage1] = useState("");
    const [name, setName] = useState("");
    const [description, setDescription] = useState("");
    const [AppStateLoading, setAppStateLoading] = useState(false);
    const [appStateObject, setAppstateObject] = useState(null);
    const [refresh, setRefresh] = useState(true);
    const LoadingList = WithLoadingList(List);
    useEffect(() => {
      
        if (refresh) {
            setAppStateLoading(true);
            getFetch("contents").then(val => setAppstateObject(val));
            setAppStateLoading(false);
            setRefresh(false);

            setTimeout(() => {
             setMessage1("");
            }, 1000);
        }
    }, [setAppstateObject, setAppStateLoading, refresh])
    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            postFecth("contents", { name: name, description: description }).then(() => {
                setName("");
                setDescription("");
                setMessage1("It's create");
                setRefresh(true);
  
            })

        } catch (error) {
            console.log(error);
        }
    }
    return (
        <><div>
             <LoadingList isLoading={AppStateLoading} contents={appStateObject} nam1={"Table of contents"} />
            </div><h2>Add</h2>

            <form onSubmit={handleSubmit}>

                <input
                  
                    value={name}
                    placeholder="Content"
                    onChange={(e) => setName(e.target.value)}
                />
                <br></br>
                <input
             
                    value={description}
                    placeholder="Description"
                    onChange={(e) => setDescription(e.target.value)}
                />



                <div>
                    {message1 ? <p>{message1}</p> : null}
                </div>
              
                <button type="submit" > Create</button>
            </form>
        </>
    )

}

export default Post;