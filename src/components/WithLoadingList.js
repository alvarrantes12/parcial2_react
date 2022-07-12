import React from "react";

function WithLoadingList(Component){
    return function WithLoadingList({isLoading, ...props}) {
        if(!isLoading) return <Component {...props}/>

        return (
            <p>Espere, estamos cargando los contenidos</p>
        );
    };
}
export default WithLoadingList;