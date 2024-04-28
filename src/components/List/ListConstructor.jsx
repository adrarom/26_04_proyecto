import React from "react";
import List from "./List";

const ListConstructor = ({ data, handleDelete }) => {
    return (
        <>
            <ul className="w-56">
                {data.map((element) => (
                    <List
                        key={element.title}
                        id={element.title}
                        title={element.title}
                        handleDelete={handleDelete}
                        deadline={element.deadline}
                    />
                ))}
            </ul>
        </>
    );
}

export default ListConstructor;
