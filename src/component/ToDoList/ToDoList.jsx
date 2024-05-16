import FormAddToDo from"./FormAddToDo"
import Filter from "./InputSearch";
import StatusFilter from "./StatusFilter";
import CreateTodo from "./CreateToDo/CreateTodo";
import styles from "./ToDoList.module.css"

function ToDoList() {
    return (
      <div className={styles.Root_box}>
        <FormAddToDo></FormAddToDo>
        <Filter></Filter>
        <StatusFilter></StatusFilter>
        <CreateTodo></CreateTodo>
      </div>
    );
  }
  
  export default ToDoList;