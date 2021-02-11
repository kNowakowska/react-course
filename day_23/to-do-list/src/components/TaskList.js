import Task from "./Task";
import "./TaskList.css";
//komponent z lista zadan 
const TaskList = (props) => {
    const activeTasks = props.tasks.filter(task=> !task.done).map(task=><Task key={task.id} task={task} do={props.doTask} delete={props.deleteTask}/>)
    const doneTasks = props.tasks.filter(task=> task.done).map(task=><Task key={task.id} task={task} do={props.doTask} delete={props.deleteTask}/>)

    return ( 
            <div>
        
        <div className="active">
            <h1>Zadania do zrobienia</h1>
            {activeTasks.length > 0 ? activeTasks : <p> Brak zadan </p>}
        </div>
        <div className="done">
            <h2>Zadania zrobione {props.counter?"("+props.counter+")":"(0)"}</h2>
            {doneTasks.length>5 && <small>Wyświetlono tylko 5 ostatnich</small>}
            {doneTasks.length > 0 ? doneTasks.slice(0,5) : <p> Brak zadan </p>}
        </div>
        
    </div>
 );
}
 
export default TaskList;
