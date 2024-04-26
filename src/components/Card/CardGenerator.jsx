import React, { useState } from "react";
import '../../index.css'
import Card from "../../Card";
const CardGenerator = () =>{
    const [actualCards, setActualCards] = useState([]);
    const [isFormVisible, setIsFormVisible] = useState(false);
    const [newCardText, setNewCardText] = useState("");
    const handleAddCard = () => {
        setIsFormVisible(true);
      };
    
      const handleInputChange = (e) => {
        setNewCardText(e.target.value);
      };
    
      const handleSubmit = (e) => {
        e.preventDefault();
        setActualCards([...actualCards, newCardText]);
        setNewCardText("");
        setIsFormVisible(false);
      };
    return(
        <>
        <div className="flex gap-10">
            {actualCards.map((element,index) => {
                return <Card key={index} id={index} title={element}/>
            })}
            {isFormVisible ? (
          <form onSubmit={handleSubmit}>
            <input
              type="text"
              value={newCardText}
              onChange={handleInputChange}
              placeholder="Enter card text"
            />
            <button type="submit">Add Card</button>
          </form>
        ) : (
          <button onClick={handleAddCard}>Add new card +</button>
        )}
        </div>
        </>
    )
}
export default CardGenerator;