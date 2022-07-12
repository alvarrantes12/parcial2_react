import React from "react";

function WithLoadingList(Component) {
    return function WithLoadingList({ isLoading, ...props }) {
        if (!isLoading) return <Component {...props} />

        return (
            <p>Wait for the information</p>
        );
    };
};

export default WithLoadingList;