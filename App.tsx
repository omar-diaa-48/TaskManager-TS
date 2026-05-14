import React, { useState } from 'react';
import {
  FlatList,
  Keyboard,
  KeyboardAvoidingView,
  ListRenderItem,
  Platform,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View
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

  // 3. Define the Render Function with Types
  const renderTaskItem: ListRenderItem<ITask> = ({ item }) => (
    <View style={styles.item}>
      <TouchableOpacity style={styles.itemTextContainer} onPress={() => toggleComplete(item.id)}>
        <Text style={[styles.itemText, item.completed && styles.completedText]}>
          {item.text}
        </Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={() => deleteTask(item.id)}>
        <Text style={styles.deleteBtn}>Delete</Text>
      </TouchableOpacity>
    </View >
  );

  return (
    <View style={styles.container}>
      <View style={styles.tasksWrapper}>
        <Text style={styles.sectionTitle}>Today's Tasks (TS)</Text>

        <FlatList data={taskList} renderItem={renderTaskItem} keyExtractor={(item) => item.id} contentContainerStyle={{ paddingBottom: 100 }} />
      </View>

      <KeyboardAvoidingView
        behavior={Platform.OS === "ios" ? "padding" : "height"}
        style={styles.writeTaskWrapper}
      >
        <TextInput
          style={styles.input}
          placeholder="Write a task"
          value={task}
          onChangeText={(text) => setTask(text)}
        />

        <TouchableOpacity onPress={handleAddTask}>
          <View style={styles.addWrapper}>
            <Text style={styles.addText}>+</Text>
          </View>
        </TouchableOpacity>
      </KeyboardAvoidingView >
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
  item: {
    backgroundColor: '#FFF',
    padding: 15,
    borderRadius: 10,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 20,
    elevation: 3,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
  },
  itemTextContainer: {
    flex: 0.8,
  },
  itemText: {
    fontSize: 16,
    color: '#333',
  },
  completedText: {
    textDecorationLine: 'line-through',
    color: '#AAA',
  },
  deleteBtn: {
    color: '#FF5252',
    fontWeight: 'bold',
  },
  writeTaskWrapper: {
    position: 'absolute',
    bottom: 40,
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    paddingHorizontal: 10,
  },
  input: {
    paddingVertical: 15,
    paddingHorizontal: 15,
    backgroundColor: '#FFF',
    borderRadius: 60,
    borderColor: '#C0C0C0',
    borderWidth: 1,
    width: 250,
  },
  addWrapper: {
    width: 60,
    height: 60,
    backgroundColor: '#55BCF6',
    borderRadius: 60,
    justifyContent: 'center',
    alignItems: 'center',
  },
  addText: {
    fontSize: 30,
    color: '#FFF',
  },
});