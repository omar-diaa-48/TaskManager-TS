import Checkbox from "expo-checkbox";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { ITask } from "../../utils/interfaces";

interface TaskItemProps {
    item: ITask
    handleToggleComplete: (id: string) => void
    handleDeleteTask: (id: string) => void
}

export const TaskItem: React.FC<TaskItemProps> = (props) => {
    const { item, handleToggleComplete, handleDeleteTask } = props

    return (
        <View style={styles.item}>
            <TouchableOpacity style={styles.itemTextContainer} onPress={() => handleToggleComplete(item.id)}>
                <Checkbox value={item.completed} />

                <Text style={[styles.itemText, item.completed && styles.completedText]}>
                    {item.text}
                </Text>
            </TouchableOpacity>

            <TouchableOpacity onPress={() => handleDeleteTask(item.id)}>
                <Text style={styles.deleteBtn}>Delete</Text>
            </TouchableOpacity>
        </View >
    )
}

const styles = StyleSheet.create({
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
        gap: 8,
        flexDirection: 'row'
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
});