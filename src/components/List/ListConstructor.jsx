// ListConstructor.js
import React from "react";
import List from "./List";
import Timer from "../Timer/Timer";

const ListConstructor = ({ data, handleDelete }) => {
    return (
        <>
            <ul className="w-56 even">
                {data.map((element, index) => {
                    return <>
                            <List key={index} title={element.title} completed={element.completed} handleDelete={handleDelete} deadline={element.deadline}/>
                        </>;
                })}
            </ul>
        </>
    );
}

export default ListConstructor;
