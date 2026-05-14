import React, { useState } from 'react';
import {
  FlatList,
  Keyboard,
  ListRenderItem,
  StyleSheet,
  Text,
  View
} from 'react-native';
import { AddTaskEditor } from './src/components/tasks/AddTaskEditor';
import { TaskItem } from './src/components/tasks/TaskItem';
import { ITask } from './src/utils/interfaces';


export default function App() {
  const [taskList, setTaskList] = useState<ITask[]>([]);

  const handleAddTask = (text: string): void => {
    if (text.trim().length === 0) return;

    const newTask: ITask = {
      id: Date.now().toString(),
      text,
      completed: false,
    };

    setTaskList([...taskList, newTask]);
    Keyboard.dismiss();
  };

  const handleDeleteTask = (id: string): void => {
    setTaskList(taskList.filter((item) => item.id !== id));
  };

  const handleToggleComplete = (id: string): void => {
    setTaskList(
      taskList.map((item) =>
        item.id === id ? { ...item, completed: !item.completed } : item
      )
    );
  };

  // 3. Define the Render Function with Types
  const renderTaskItem: ListRenderItem<ITask> = ({ item }) => (
    <TaskItem item={item} handleDeleteTask={handleDeleteTask} handleToggleComplete={handleToggleComplete} />
  );

  return (
    <View style={styles.container}>
      <View style={styles.tasksWrapper}>
        <Text style={styles.sectionTitle}>Today's Tasks (TS)</Text>

        <FlatList data={taskList} renderItem={renderTaskItem} keyExtractor={(item) => item.id} contentContainerStyle={{ paddingBottom: 100 }} />
      </View>

      <AddTaskEditor handleAddTask={handleAddTask} />
    </View >
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5F5F5',
  },
  tasksWrapper: {
    paddingTop: 80,
    paddingHorizontal: 20,
    flex: 1,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 30,
  },
});