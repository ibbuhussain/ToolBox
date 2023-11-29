//Create a React App
npx create-react-app NameofReactApp
cd NameofReactApp
npm start
######################################### MAIN FILE #####################################################
import React from "react"
import ReactDOM from "react-dom/client"
import App from "./App"

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
)
######################################## END OF MAIN FILE ##################################################
//_______________App.jsx_________________________
import { useEffect, useState } from "react"
import "./styles.css"
/*NOTES :: nameConvention :  CAPITAL TAG with description*/
import {FORMoftodo} from "./components/FORMoftodo"
import { ULTodo } from "./components/ULlis"

export default function App() {  
//---------------------------------------
//______-_ H O O K S   B E L O W _-______
  const [task, setTask] = useState(() => {

  const localValue = localStorage.getItem("ITEMS")
  if (localValue == null) return []
  return JSON.parse(localValue)
})
  useEffect(()=>{
    localStorage.setItem("ITEMS", JSON.stringify(task))} , [task] )
//---------------------------------------
//____ F U N C T I O N   b e l o w ______
function addTodo(title){
return setTask((currentTask) => {   // addTodo Function in App file
      return [...currentTask,
      {
        id: crypto.randomUUID(), title,
        completed: false
      },
      ]
    }) //setTask close
  }//addTodo close
//---------------------------------------
//____ F U N C T I O N   b e l o w ______
  function toggleTodo(id,completed) {
    setTask(curT=>{
      return curT.map(todd=>{
        if(todd.id === id) return{ ...todd,completed}
        return todd
      }) //map close
    }) //setTask close  
  } // toggleTodo close
//------------------------------------------------------------------------
/*_______________ B E L O W - I S - J S X - c o d e______________________/
NOTES :: nameConvention :  while passing props add to suffix (1,2,3 etc)
          based on no. times its been passed.
//_______________________________________________________________________*/  
  return <>  //frangment tag to wrap multiple tags under one
  /*NOTES :: nameConvention : CAPITAL TAG with description*/
<FORMoftodo addTodoInTodoFOrm = {addTodo}/>  
    <h1 className="header"> Todo List </h1>
<ULTodo taskItem = {task}  toogleTodo1 = {toggleTodo} deleteTodo1 = {deleteTodo}/>
// Fragment tag close
    </>
} //App() CLOSE

