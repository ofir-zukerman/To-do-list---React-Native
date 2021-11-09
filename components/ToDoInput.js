import React, { useState } from 'react';
import { View, TextInput, Button, StyleSheet, Modal } from 'react-native';

const ToDoInput = props => {
    const [enteredToDo, setEnteredToDo] = useState('');

    const toDoInputHandler = enteredText => {
        setEnteredToDo(enteredText);
    };

    const addToDoHandler = () => {
        props.onAddToDo(enteredToDo);
        setEnteredToDo('');
    };

    return (
        <Modal visible={props.visible} animationType="slide">
            <View style={styles.inputContainer}>
                <TextInput
                    placeholder="What do you need to do today?"
                    style={styles.input}
                    onChangeText={toDoInputHandler}
                    value={enteredToDo}
                />
                <View style={styles.buttonContainer}>
                    <View style={styles.button}>
                        <Button title="CANCEL" color="red" onPress={props.onCancel} />
                    </View>
                    <View style={styles.button}>
                        <Button title="ADD" onPress={addToDoHandler} />
                    </View>
                </View>
            </View>
        </Modal>
    );
};

const styles = StyleSheet.create({
    inputContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    input: {
        width: '80%',
        borderColor: 'black',
        borderWidth: 1,
        padding: 10,
        marginBottom: 10
    },
    buttonContainer: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        width: '60%'
    },
    button: {
        width: '40%'
    }
});

export default ToDoInput;
