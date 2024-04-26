import React from "react";

const List = (props) => {
    return(
    <li key={props.key}>
        {props.title} {props.completed.toString()}
    </li>)
}
export default List;