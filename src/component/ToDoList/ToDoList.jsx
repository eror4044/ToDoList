import FormAddToDo from"./FormAddToDo"
import Filter from "./InputSearch";
import StatusFilter from "./StatusFilter";
import CreateTodo from "./CreateTodo";


function ToDoList() {
    return (
      <div>
        <FormAddToDo></FormAddToDo>
        <Filter></Filter>
        <StatusFilter></StatusFilter>
        <CreateTodo></CreateTodo>
      </div>
    );
  }
  
  export default ToDoList;