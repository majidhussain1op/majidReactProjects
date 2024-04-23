import AddTodo from "./component/AddTodo";
import AppName from "./component/AppName";
import TodoItems from "./component/TodoItems";
import './App.css'

function App() {

  const todoItems = [{
    name: "Buy Milk",
    dueDate: "04/21/2024"
  },
  {
    name:"goto Collage",
    dueDate: "04/21/2024"
  },
  {
    name: "Subscribe",
    dueDate:"Right Now"
  }

]


  return (<center className='todo-container'>
    <AppName/>
    <AddTodo/>
    <TodoItems todoItems={todoItems}></TodoItems>
    
  </center>

);

}

export default App
