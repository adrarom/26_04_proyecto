import React, { useState } from "react";
import Timer from "../Timer/Timer";

const List = ({ id, title, handleDelete, deadline }) => {
    const [isDestroyed, setIsDestroyed] = useState(false);

    const deleteTask = () => {
        setIsDestroyed(true);
    }

    return (
        <>
            {!isDestroyed && (
                <li key={id} className="shadow p-4 my-2 rounded-3xl w-full">
                    <div className="flex items-center">
                        <span className="font-semibold">{title}</span>
                        <a
                            className="fa-solid fa-trash ml-auto px-3 text-red-400 hover:text-white transition-colors duration-300"
                            onClick={() => { handleDelete(id); deleteTask(); }}
                        ></a>
                    </div>
                    <div>
                        <Timer deadline={deadline} />
                    </div>
                </li>
            )}
        </>
    );
}

export default List;
