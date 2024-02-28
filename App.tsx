import React from 'react';
import { Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import ViewEmployees from "./ViewEmployees";
import EmployeeForm from './EmployeeForm';
import { createStackNavigator } from '@react-navigation/stack';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import DeleteEmployee from './DeleteEmployee';


const Stack = createNativeStackNavigator();

const App: React.FC = () => {
  return (
    // <NavigationContainer>
    //   {/* <ViewEmployees /> */}
    //   <EmployeeForm />
    // </NavigationContainer>

    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Employee Details" component={ViewEmployees}/>
        <Stack.Screen name="Employee Form" component={EmployeeForm} />
        <Stack.Screen name="Delete Employee Details" component={DeleteEmployee} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
