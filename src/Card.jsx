import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './output.css'
import './App.css'
import ListConstructor from './components/List/ListConstructor';

const data = [
  {
    title: "Learn React",
    completed: false
  },
  {
    title: "Build a todo app",
    completed: true
  },
  {
    title: "Add styling to the app",
    completed: false
  }
];

function Card(props) {
const [inputState,setInputState] = useState("");

const [listState, setListState] = useState([]);

const [filteredListState,setFilteredListState] = useState([]);

const [newInputText,setNewInputText] = useState("");
useEffect(() => {setListState(data)},[]);
useEffect(() => {
  const filterList = listState.filter((listItem) => {return listItem.title.toLowerCase().includes(inputState.toLocaleLowerCase())});
  inputState === '' ?
  setFilteredListState(listState) :
  setFilteredListState(filterList);
},[listState,inputState]);
const addNewMember = () =>{
  if(newInputText !== ''){
    setListState([...listState,{title : newInputText , completed: false}]);
    setNewInputText("");
  }
  
}
  return (
    <>
      <div className="max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 flex flex-col justify-center items-center">
        <div className='flex flex-col'>
          {props.title}
        <input type="text" name="" id="" onChange={(event) => {setNewInputText(event.target.value)}} value={newInputText} />
        <button onClick={addNewMember} className=' m-0 p-0'>Add</button>
        </div>
      <input type='text' placeholder={ inputState === '' &&
        'puedes filtrar con este input'} value={inputState} onChange={(e) => setInputState(e.target.value)}>

      </input>
      
      <ListConstructor data={filteredListState} />
      </div>
    </>
  )
}

export default Card
