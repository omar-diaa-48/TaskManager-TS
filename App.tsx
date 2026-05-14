import { useState } from 'react';
import {
  Keyboard
} from 'react-native';
import { ITask } from './src/utils/interfaces';


export default function App() {
  const [task, setTask] = useState<string>('');
  const [taskList, setTaskList] = useState<ITask[]>([]);

  const handleAddTask = (): void => {
    if (task.trim().length === 0) return;

    const newTask: ITask = {
      id: Date.now().toString(),
      text: task,
      completed: false,
    };

    setTaskList([...taskList, newTask]);
    setTask('');
    Keyboard.dismiss();
  };

  const deleteTask = (id: string): void => {
    setTaskList(taskList.filter((item) => item.id !== id));
  };

  const toggleComplete = (id: string): void => {
    setTaskList(
      taskList.map((item) =>
        item.id === id ? { ...item, completed: !item.completed } : item
      )
    );
  };

  return null
}

