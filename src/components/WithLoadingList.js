import React, { Component } from "react";
function WithLoadingList(Component){
    return function WithLoadingList({isLoading, ...props}){
        if (!isLoading) return <Component {...props}/>

        return (
            <p>Is Loading the files...</p>
        );
    }; 
}
export default WithLoadingList;