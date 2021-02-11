
import { Component } from 'react';
import './App.css';
import AddTask from './AddTask';

import TaskList from './TaskList';

class App extends Component {

  
  state={
    tasks: [
      {
        id: 0,
        name: "fryzjer",
        date: "2020-10-03",
        important: true,
        done: false,
        finishDate: null
      },
      {
        id: 1,
        name: "zagrac w gre",
        date: '2018-20-02',
        important: false,
        done: false,
        finishDate: null
      },
      {
        id: 2,
        name: "praca",
        date: "2020-10-03",
        important: true,
        done: false,
        finishDate: null
      },
      {
        id: 3,
        name: "szkola",
        date: '2018-20-02',
        important: true,
        done: false,
        finishDate: null
      },
      {
        id: 4,
        name: "lekarz",
        date: "2020-10-03",
        important: true,
        done: false,
        finishDate: null
      },
      {
        id: 5,
        name: "odwiedziny",
        date: '2018-20-02',
        important: false,
        done: false,
        finishDate: null
      }
    ]
  }
  counter = this.state.tasks.length;
  doneCounter=6;

  doTask =(id)=>{ 
    let taskTable = [...this.state.tasks];
    let number = taskTable.findIndex(task=>task.id===id);
    console.log(number);
    taskTable[number].done = true;
    taskTable[number].finishDate = new Date().getTime();
    console.log(taskTable[number].finishDate);

    this.setState({
        tasks: taskTable
    })
    this.doneCounter++;

    /*
    const tasks = Array.from(this.state.tasks);
    tasks.forEach(task=> {
      if (task.id === id)
      task.done=true;
    })
    setState

    */

  }

  deleteTask=(id)=>{
    let taskTable = [...this.state.tasks];
    let number = taskTable.findIndex(task=>task.id===id);
    // taskTable = taskTable.filter(task => task.id !== id)
    taskTable.splice(number,1);
    this.setState({
      tasks: taskTable
    })
    
    
  }

  addTask = (name, date, important)=>{
    const task = {
      id: this.counter,
      name,
      date,
      important,
      done: false,
      finishDate: null
    }
   //ważne!!! dodawanie elementu do tablicy 
    this.setState((prevState)=>({
      tasks: [...prevState.tasks, task]
    }))
    this.counter++;
    return true;
  }



  render(){
    return (
      <div className="App">
        <AddTask add={this.addTask}/>
        <TaskList counter={this.doneCounter} tasks={this.state.tasks} doTask={this.doTask} deleteTask={this.deleteTask}/>
      </div>
    );
  }
  
}

export default App;
