import { useState } from "react";

interface TaskProps {
    text: string;
    done: boolean;
}

const initialTasks: TaskProps[] = [
    { text: "zadanie1", done: false },
    { text: "zadanie2", done: false },
    { text: "zadanie3", done: false },
];

function App() {
    const [tasks, setTasks] = useState(initialTasks);

    const changeTaskStatus = (text: string) => {
        setTasks((currentTasks) =>
            currentTasks.map((task) =>
                task.text === text ? { ...task, done: !task.done } : task
            )
        );
    }

    const unfinishedCount = tasks.filter((task) => !task.done).length;

    return (
        <main>
            <p>Niewykonane zadania: {unfinishedCount}</p>
            <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3">
                {tasks.length > 0 ? (
                    tasks.map((task) => (
                        <div key={task.text}>
                            <input
                                type="checkbox"
                                id={task.text}
                                checked={task.done}
                                onChange={() => changeTaskStatus(task.text)}
                            />
                            <label htmlFor={task.text}>{task.text}</label>
                        </div>
                    ))) 
                    : (
                    <p>Brak zadań</p>
                )}
            </div>
        </main>
    );
}

export default App;