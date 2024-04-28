// List.js
import React, { useState } from "react";
import Timer from "../Timer/Timer";

const List = (props) => {
    const [isDestroyed, setIsDestroyed] = useState(false);

    const deleteTask = () => {
        setIsDestroyed(true);
    }

    return (
        <>
            {!isDestroyed && (
                <li key={props.key} className="shadow p-4 my-2 rounded-3xl w-full">
                    <div className="flex items-center">
                        <span className="font-semibold">{props.title}</span>
                        <a
                            className="fa-solid fa-trash ml-auto px-3 text-red-400 hover:text-white transition-colors duration-300"
                            onClick={() => {props.handleDelete(); deleteTask();}}
                        ></a>
                    </div>
                    <div>
                        <Timer deadline={props.deadline} />
                    </div>
                </li>
            )}
        </>
    );
}

export default List;
