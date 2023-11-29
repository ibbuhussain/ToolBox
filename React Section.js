/*------------------------------------------------------------------------------------------------------------------
¬¬¬¬Create a React App¬¬¬¬¬¬¬¬¬¬¬¬¬¬
npx create-react-app NameofReactApp
cd NameofReactApp
npm start
¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬
npm create vite@latest
folderName
react
js+SWC
npm install
npm run dev
¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬
------------------------------------------------------------------------------------------------------------------*/
/* ¬¬¬¬¬¬¬ A L L   N O T E S   H E R E   F O R   R E A C T ¬¬¬¬¬¬¬¬¬¬¬
1. <React.StrictMode> //React performs a set of checks and warnings during the rendering process.
2. :: nameConvention for components: CAPITAL TAG with description
3. :: nameConvention for arrow function: first letter lowercase all others UPPERCASE.  
4. :: nameConvention for props:  while passing props add to suffix (1,2,3 etc) based on no. times its been passed.
5.  function handleSubmit(e) { e.preventDefault() }  -- Prevents refresh of page on Submit.
*/
//############################################ MAIN FILE ##########################################################
import React from "react"
import ReactDOM from "react-dom/client"
import App from "./App"

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode> //React performs a set of checks and warnings during the rendering process.
    <App />
  </React.StrictMode>
) //renderClose
//######################################## END OF MAIN FILE ##################################################
//_______________App.jsx_________________________
import { useEffect, useState } from "react"
import "./styles.css"
/*NOTES:: nameConvention for components: CAPITAL TAG with description*/
import {FORMoftodo} from "./components/FORMoftodo"
import { ULtodo } from "./components/ULlis"

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
  /*NOTES:: nameConvention for arrow function: first letter lowercase all others UPPERCASE*/  
return setTask((cURRENTTASK) => {   
      return [...cURRENTTASK,
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
    setTask(cURT=>{
      return cURT.map(tODD=>{
        if(tODD.id === id) return{ ...tODD,completed}
        return tODD
      }) //map close
    }) //setTask close  
  } // toggleTodo close
//------------------------------------------------------------------------
/*_______________ B E L O W - I S - J S X - c o d e______________________/
NOTES :: nameConvention for props :  while passing props add to suffix (1,2,3 etc)
          based on no. times its been passed.
//_______________________________________________________________________*/  
  return <>  //frangment tag to wrap multiple tags under one
  /*NOTES:: nameConvention for components : CAPITAL TAG with description*/
<FORMoftodo addTodo1 = {addTodo}/>  
    <h1 className="header"> Todo List </h1>
<ULtodo  task1 ={task}  toogleTodo1 ={toggleTodo} deleteTodo1 ={deleteTodo}/>
// Fragment tag close
    </>
} //App() CLOSE

