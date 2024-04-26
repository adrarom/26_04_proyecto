import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
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

function App() {
const [inputState,setInputState] = useState("");

const [listState, setListState] = useState([]);

const [filteredListState,setFilteredListState] = useState([]);

const [newInputText,setNewInputText] = useState("");
useEffect(() => {setListState(data)},[]);
useEffect(() => {
  console.log("hola");
  const filterList = listState.filter((listItem) => {return listItem.title.toLowerCase().includes(inputState.toLocaleLowerCase())});
  inputState === '' ?
  setFilteredListState(listState) :
  setFilteredListState(filterList);
},[listState,inputState]);
const addNewMember = () =>{
  setListState([...listState,{title : newInputText , completed: false}]);
}
  return (
    <>
      <div>
        <input type="text" name="" id="" onChange={(event) => {setNewInputText(event.target.value)}} value={newInputText} />
        <button onClick={addNewMember}>Add</button>
      </div>
      <input type='text' placeholder={ inputState === '' &&
        'puedes filtrar con este input'} value={inputState} onChange={(e) => setInputState(e.target.value)}>

      </input>
        
        <ListConstructor data={filteredListState} />
    </>
  )
}

export default App
