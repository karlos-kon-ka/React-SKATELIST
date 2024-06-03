import { useEffect, useState } from 'react';
import './App.css';
import Creadortrucos from './components/Creadortrucos';
import {Tasktable} from './components/Tasktable';
import { Visibiliti } from './components/Visibiliti';
import Logo from './components/Logo';
import {Footer} from './components/Footer';

function App() {
  const [taskItems, setTaskItems] = useState([]);
  const [showCompleted, setShowCompleted] = useState(false )

  function createNewTask(taskName) {
    if (!taskItems.find(task => task.name === taskName)) {
      setTaskItems([...taskItems, { name: taskName, done: false }]);
    }
  }
  const toggleTask = task  => {
    setTaskItems(
      taskItems.map((t) => (t.name === task.name) ?  {...t, done: !t.done }: t)

    )
  }

  
  useEffect(() => {
    let data =localStorage.getItem ('task')
    if(data) {
      setTaskItems(JSON.parse(data))
    }
  }, [ ])



  const cleanTask = () => {
    setTaskItems(taskItems.filter(task => !task.done))
    setShowCompleted(false)
  }

  useEffect(() => {
    localStorage.setItem("task", JSON.stringify(taskItems))
  }, [ taskItems])

  return (
    <main className="App">
      <div className="container p-4 col-md-4 offset-md-4   ">
      <Logo />
      
      <Creadortrucos className="Creador" createNewTask={createNewTask} />
      <Tasktable toggleTask={toggleTask} tasks={taskItems} /  >
      <Visibiliti
       isChecked={showCompleted}  
        setShowCompleted={(checked) => setShowCompleted(checked)}
      cleanTask={cleanTask}  />
        
      {
        showCompleted === true && (
          <Tasktable  tasks={taskItems}  toggleTask={toggleTask} showCompleted={showCompleted} /  >
            

        )
      }
      <Footer    />
      </div>
      
      
    </main>
  );
}

export default App;
