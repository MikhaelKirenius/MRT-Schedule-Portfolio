import React from "react";

const DataRender = ({ error, isLoading, isFetching, children }: { error: any, isLoading: any, isFetching: any, children: any }) => {
    if (isLoading) return <div>Loading...</div>;
    if (error) return <div>Error: {error.message}</div>;
    if (isFetching) return <div>Fetching...</div>;

    return <>{children}</>; 
};

export default DataRender;