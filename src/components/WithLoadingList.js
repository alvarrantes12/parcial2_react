import React from "react";

function WithLoadingList(Component) {
    return function WithLoadingList({isLoading, ...props}) {
        if (!isLoading) return <Component {...props} />

        return(
            <p>Cargando información...</p>
        );
    };
}
export default WithLoadingList;