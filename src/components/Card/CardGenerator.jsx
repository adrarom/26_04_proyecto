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
        <div className="flex gap-10 justify-start items-start m-4">
            {actualCards.map((element,index) => {
                return <Card key={index} id={index} title={element}/>
            })}
          <div className=" h-20">
            {isFormVisible ? (
          <form 
            onSubmit={handleSubmit}
            className="p-6 rounded-lg shadow flex flex-col glass">
            <input
              type="text"
              value={newCardText}
              onChange={handleInputChange}
              placeholder="Enter card title"
              className='rounded-full p-3'
              
            />
            <button type="submit" className='rounded-full w-full py-3 mt-4'>Add Card</button>
          </form>
        ) : (
          <button onClick={handleAddCard} className="w-56 rounded-full">Add new card +</button>
        )}
          </div>
        </div>
        </>
    )
}
export default CardGenerator;