import { useState } from "react";
import { KeyboardAvoidingView, Platform, StyleSheet, Text, TextInput, TouchableOpacity, View } from "react-native";

interface AddTaskProps {
    handleAddTask: (text: string) => void
}

export const AddTaskEditor: React.FC<AddTaskProps> = (props) => {
    const { handleAddTask } = props

    const [text, setText] = useState<string>('');

    const addTask = () => {
        handleAddTask(text)
        setText('')
    }

    return (
        <KeyboardAvoidingView
            behavior={Platform.OS === "ios" ? "padding" : "height"}
            keyboardVerticalOffset={Platform.OS === "ios" ? 100 : 0}
            style={styles.writeTaskWrapper}
        >
            <TextInput
                style={styles.input}
                placeholder="Write a task"
                value={text}
                onChangeText={(text) => setText(text)}
            />

            <TouchableOpacity onPress={addTask}>
                <View style={styles.addWrapper}>
                    <Text style={styles.addText}>+</Text>
                </View>
            </TouchableOpacity>
        </KeyboardAvoidingView >
    )
}

const styles = StyleSheet.create({
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