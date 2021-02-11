import "./Task.css";
//komponent z pojedynczymi zadaniami na liscie 
const Task = (props)=>{

    const {important, name, done, date, id, finishDate} =props.task;
    return (
    <div >
        <h4 className={important?"important":""}>{name}</h4> 
        {!done?"- do"+date: "(zrobić do "+date+")" }
        {done? <span>- potwierdzenie wykonania {new Date(finishDate).toLocaleString()}</span>:""}
        {!done?<button onClick={()=>props.do(id)}>Zostało zrobione</button>:""}
        <button onClick={()=>props.delete(id)}>X</button>
    </div>
    )
}

export default Task;