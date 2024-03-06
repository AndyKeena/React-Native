// import React, { useEffect, useState } from 'react';
// import { NavigationContainer } from '@react-navigation/native';
// import messaging from '@react-native-firebase/messaging';
// import { createNativeStackNavigator } from '@react-navigation/native-stack';
// import ViewEmployees from "./ViewEmployees";
// import EmployeeForm from './EmployeeForm';
// import DeleteEmployee from './DeleteEmployee';

// const Stack = createNativeStackNavigator();

// const App: React.FC = () => {
//   const [remoteMessage, setRemoteMessage] = useState<any>(null);

//   useEffect(() => {
//     const registerAppWithFCM = async () => {
//       await messaging().registerDeviceForRemoteMessages();
//       const token = await messaging().getToken();
//       console.log('Device Token:', token);
//     };

//     registerAppWithFCM();

//     const backgroundMessageHandler = async (remoteMessage: any) => {
//       console.log('Message handled in the background!', remoteMessage);
//     };

//     messaging().setBackgroundMessageHandler(backgroundMessageHandler);

//     const unsubscribe = messaging().onTokenRefresh((token) => {
//       console.log('Device Token Refreshed:', token);
//     });

//     const foregroundMessageHandler = async (remoteMessage: any) => {
//       console.log('Message received in foreground:', remoteMessage);
//       setRemoteMessage(remoteMessage);
//     };

//     const unsubscribeForeground = messaging().onMessage(foregroundMessageHandler);

//     return () => {
//       unsubscribe();
//       unsubscribeForeground();
//     };
//   }, []);

//   return (
//     <NavigationContainer>
//       <Stack.Navigator>
//         <Stack.Screen name="Employee Details" component={ViewEmployees}/>
//         <Stack.Screen name="Employee Form" component={EmployeeForm} />
//         <Stack.Screen name="Delete Employee Details" component={DeleteEmployee} />
//       </Stack.Navigator>
//     </NavigationContainer>
//   );
// };



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

    const backgroundMessageHandler = async (remoteMessage: any) => {
      console.log('Message handled in the background!', remoteMessage);
      // Handle the message here
    };

    messaging().setBackgroundMessageHandler(backgroundMessageHandler);

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
