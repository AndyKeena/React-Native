// import React, { useEffect } from 'react';
// import { Text } from 'react-native';
// import { NavigationContainer } from '@react-navigation/native';
// import ViewEmployees from "./ViewEmployees";
// import EmployeeForm from './EmployeeForm';
// import { createStackNavigator } from '@react-navigation/stack';
// import { createNativeStackNavigator } from '@react-navigation/native-stack';
// import DeleteEmployee from './DeleteEmployee';
// import messaging from '@react-native-firebase/messaging';



// const Stack = createNativeStackNavigator();

// const App: React.FC = () => {

// return (

//     <NavigationContainer>
//       <Stack.Navigator>
//         <Stack.Screen name="Employee Details" component={ViewEmployees}/>
//         <Stack.Screen name="Employee Form" component={EmployeeForm} />
//         <Stack.Screen name="Delete Employee Details" component={DeleteEmployee} />
//       </Stack.Navigator>
//     </NavigationContainer>
//   );
// };

// export default App;

import React, { useEffect } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import messaging from '@react-native-firebase/messaging';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import ViewEmployees from "./ViewEmployees";
import EmployeeForm from './EmployeeForm';
import DeleteEmployee from './DeleteEmployee';

const Stack = createNativeStackNavigator();

const App: React.FC = () => {

  useEffect(() => {
    const registerAppWithFCM = async () => {
      await messaging().registerDeviceForRemoteMessages();
      const token = await messaging().getToken();
      console.log('Device Token:', token);
    };

    registerAppWithFCM();

    // Optional: Listen for token refresh
    const unsubscribe = messaging().onTokenRefresh((token) => {
      console.log('Device Token Refreshed:', token);
    });

    return unsubscribe;
  }, []);

  return (
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
