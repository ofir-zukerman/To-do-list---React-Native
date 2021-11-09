import React, { useState } from 'react';
import { StyleSheet, View, Button, FlatList } from 'react-native';

import ToDoItem from './components/ToDoItem';
import ToDoInput from './components/ToDoInput';

const App = () => {
  const [toDo, setToDo] = useState([]);
  const [isAddMode, setIsAddMode] = useState(false);

  const addToDoHandler = toDoTitle => {
    setToDo(currentToDo => [
      ...currentToDo,
      { id: Math.random().toString(), value: toDoTitle }
    ]);
    setIsAddMode(false);
  };

  const removeToDoHandler = toDoId => {
    setToDo(currentToDo => {
      return currentToDo.filter(goal => goal.id !== toDoId);
    });
  };

  const cancelToDoAdditionHandler = () => {
    setIsAddMode(false);
  };

  return (
    <View style={styles.screen}>
      <Button title="To do list" onPress={() => setIsAddMode(true)} />
      <ToDoInput
        visible={isAddMode}
        onAddToDo={addToDoHandler}
        onCancel={cancelToDoAdditionHandler}
      />
      <FlatList
        keyExtractor={(item, index) => item.id}
        data={toDo}
        renderItem={itemData => (
          <ToDoItem
            id={itemData.item.id}
            onDelete={removeToDoHandler}
            title={itemData.item.value}
          />
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    padding: 50
  }
});

export default App;