import React from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';
import ViewEmployees from './ViewEmployees';

const EmployeeForm: React.FC = () => {
  const [id, setid] = React.useState('');
  const [firstName, setFirstName] = React.useState('');
  const [lastName, setLastName] = React.useState('');
  const [NIC, setNIC] = React.useState('');
  const [yearJoined, setYearJoined] = React.useState('');
  const [departmentId, setDepartmentId] = React.useState('');

  const handleSubmit = () => {
    console.log('Form submitted:', {
      id,
      firstName,
      lastName,
      NIC,
      yearJoined,
      departmentId,
    });

    setid('');
    setFirstName('');
    setLastName('');
    setNIC('');
    setYearJoined('');
    setDepartmentId('');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.label}>Id:</Text>
      <TextInput
        style={styles.input}
        value={firstName}
        onChangeText={setid}
      />

      <Button title="Submit" onPress={handleSubmit} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#fff',
  },
  label: {
    fontSize: 16,
    marginBottom: 5,
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 4,
    padding: 10,
    marginBottom: 20,
  },
});

export default EmployeeForm;
