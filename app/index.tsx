import React from 'react';
import { SafeAreaView } from 'react-native';
import ToDoList from '../component/ToDoList';
import ToDoForm from '../component//ToDoForm';

const App = () => {
  return (
    <SafeAreaView>
      <ToDoList />
      <ToDoForm />
    </SafeAreaView>
  );
};

export default App;
