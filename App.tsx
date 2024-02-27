import React from 'react';
import { Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import  ViewEmployees from "./ViewEmployees";
import EmployeeForm from './EmployeeForm';

const App: React.FC = () => {
  return (
    <>
        <NavigationContainer>

    <ViewEmployees /> 
      </NavigationContainer>
    </>
      
  );
};

export default App;
