import React from "react";
import List from "./List";


  
const ListConstructor = ({data}) =>{

    return(
        <>
        <ul>
        {data.map((element,index) => {
            return <List key={index} title={element.title} completed={element.completed}/>
        })}
        </ul>
        </>
        
)}
  export default ListConstructor;
  