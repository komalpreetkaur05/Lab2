// Mobile App Dev - Lab Assignment 2
// Student Name: Komalpreet Kaur
// Date: 17 June, 2025


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
