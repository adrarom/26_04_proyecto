import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './output.css'
import './App.css'
import ListConstructor from './components/List/ListConstructor';

const data = [
  {
    title: "Learn React",
    completed: false,
    deadline: "2024-05-01"
  },
  {
    title: "Build a todo app",
    completed: true,
    deadline: "2024-05-05"
  },
  {
    title: "Add styling to the app",
    completed: false,
    deadline: "2024-05-10"
  }
];


function Card(props) {
const [inputState,setInputState] = useState("");

const [listState, setListState] = useState([]);

const [filteredListState,setFilteredListState] = useState([]);

const [isFormVisible,setFormVisible] = useState(false);

const [newInputText,setNewInputText] = useState("");

const [deletedTasks,setDeletedTasks] = useState(0);

const [deadline,setDeadline] = useState("");


useEffect(() => {setListState(data)},[]);
useEffect(() => {
  const filterList = listState.filter((listItem) => {return listItem.title.toLowerCase().includes(inputState.toLocaleLowerCase())});
  inputState === '' ?
  setFilteredListState(listState) :
  setFilteredListState(filterList);
},[listState,inputState]);

const addNewMember = () =>{
  if(newInputText !== ''){
    setListState([...listState,{title : newInputText , completed: false , deadline: deadline}]);
    setNewInputText("");
    setFormVisible(false);
  } 
}
const handleDelete = () => {
  setDeletedTasks(deletedTasks + 1);
  console.log("hola");
}

  return (
    <>
      <div className="glass max-w-sm p-6 rounded-lg shadow flex flex-col items-start">
        <div className='flex flex-col font-semibold text-2xl text-left self-start p-4 py-2'>
          {props.title}
          <p className='text-lg font-light'>{listState.length - deletedTasks + " pending tasks"}</p>
        </div>
      <input type='text'
             placeholder='Filter' 
             value={inputState} onChange={(e) => setInputState(e.target.value)}
             className='rounded-full p-3'>

      </input>
      
      <ListConstructor data={filteredListState} handleDelete = {handleDelete} />
      {isFormVisible ? (
          <form onSubmit={addNewMember}>
            
            <div className='flex items-center'>
            <input
              type="text"
              value={newInputText}
              onChange={(event) => {setNewInputText(event.target.value)}}
              className='rounded-l-full py-3 pl-3 h-full my-2'
              placeholder="Enter card text"
            />  
            <button type='submit' className=' rounded-l-none m-0 h-full'>Add</button>
            </div>
            <input
              type="date"
              value={deadline}
              onChange={(event) => {setDeadline(event.target.value)}}
              className='rounded-full p-1 pl-3 w-full'
              placeholder="Enter deadline"
            />
           
          </form>
        ) : (
          <button onClick={() => {setFormVisible(true)}}
                  className='rounded-full w-full py-3 mt-4'>Add new task +</button>
        )}
      </div>
    </>
  )
}

export default Card
