import React from "react";

function WithLoadingList(Component) {
    return function WithLoadingList({isLoading, ...props}){
        if (!isLoading) return <Component {...props} />

        return (
            <p>Loading...</p>
        )
    }

}
export default WithLoadingList;