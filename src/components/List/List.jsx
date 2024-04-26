import React from "react";

const List = (props) => {
    return(
    <li key={props.key}>
        {props.title}
        <input type="checkbox" checked={props.completed}></input>
    </li>)
}
export default List;