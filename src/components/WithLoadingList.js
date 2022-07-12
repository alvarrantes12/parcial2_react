import React from "react";

function WithLoadingList(Component) {
    return function WithLoadingList({WithLoadingList, ...props}){
        if (!WithLoadingList) return <Component {...props}/>

        return(
            <p>Espere, estamos cargando la información...</p>
        );
    };
}

export default WithLoadingList;