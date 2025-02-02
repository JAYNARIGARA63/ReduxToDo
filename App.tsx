import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {store} from './src/store/Store';
import {Provider} from 'react-redux';
import TodoScreen from './src/screen/ToDoScreen';

const App = () => {
  return (
    <Provider store={store}>
      <TodoScreen />
    </Provider>
  );
};

export default App;

const styles = StyleSheet.create({});
