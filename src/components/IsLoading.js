import React, { Component } from "react";

function IsLoading(Component) {
    return function IsLoading({IsLoading, ...props}) {
        if (!IsLoading) return <Component {...props} />

        return(
            <p>Espere, Cargando la informacion</p>
        );
    };

}

export default IsLoading;