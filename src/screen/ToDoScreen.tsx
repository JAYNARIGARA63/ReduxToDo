import React, {useState} from 'react';
import {
  View,
  Text,
  TextInput,
  Button,
  FlatList,
  TouchableOpacity,
} from 'react-native';
import {useSelector, useDispatch} from 'react-redux';
import {AppDispatch, RootState} from '../store/Store';
import {addTodo, deleteTodo, editTodo, toggleTodo} from '../store/ToDoSlice';

export default function TodoScreen() {
  const [text, setText] = useState<string>('');
  const [editId, setEditId] = useState<number | null>(null);
  const todos = useSelector((state: RootState) => state.todos);
  const dispatch: AppDispatch = useDispatch();

  const handleAddOrEdit = () => {
    if (text.trim()) {
      if (editId !== null) {
        dispatch(editTodo({id: editId, newText: text}));
        setEditId(null);
      } else {
        dispatch(addTodo(text));
      }
      setText('');
    }
  };

  return (
    <View style={{padding: 20}}>
      <TextInput
        placeholder="Enter todo..."
        value={text}
        onChangeText={setText}
        style={{borderWidth: 1, padding: 10, marginBottom: 10}}
      />
      <Button
        title={editId !== null ? 'Update Todo' : 'Add Todo'}
        onPress={handleAddOrEdit}
      />

      <FlatList
        data={todos}
        keyExtractor={item => item.id.toString()}
        renderItem={({item}: {item: any}) => (
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              padding: 10,
              borderBottomWidth: 1,
            }}>
            <TouchableOpacity onPress={() => dispatch(toggleTodo(item.id))}>
              <Text
                style={{
                  textDecorationLine: item.completed ? 'line-through' : 'none',
                }}>
                {item.text}
              </Text>
            </TouchableOpacity>
            <View style={{flexDirection: 'row', gap: 10}}>
              <Button
                title="✏️"
                onPress={() => {
                  setText(item.text);
                  setEditId(item.id);
                }}
              />
              <Button
                title="❌"
                onPress={() => dispatch(deleteTodo(item.id))}
              />
            </View>
          </View>
        )}
      />
    </View>
  );
}
