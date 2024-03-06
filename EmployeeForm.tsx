import React from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';

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

    fetch('http://192.168.128.91:8080/api/employees/add', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json', // body of the request type
      },
      body: JSON.stringify({ id, firstName, lastName, NIC, yearJoined, departmentId }),    })
    .then(response => {
      if (response.ok) {
        console.log('Form submitted successfully');
        setid('');
        setFirstName('');
        setLastName('');
        setNIC('');
        setYearJoined('');
        setDepartmentId('');
      } else {
        console.error('Failed to submit form');
      }
    })
    .catch(error => {
      console.error('Error submitting form:', error);
    });
  };

  return (
    <View style={styles.container}>
      <Text style={styles.label}>Id:</Text>
      <TextInput style={styles.input} value={id} onChangeText={setid} />
      <Text style={styles.label}>First Name:</Text>
      <TextInput style={styles.input} value={firstName} onChangeText={setFirstName} />
      <Text style={styles.label}>Last Name:</Text>
      <TextInput style={styles.input} value={lastName} onChangeText={setLastName} />
      <Text style={styles.label}>NIC:</Text>
      <TextInput style={styles.input} value={NIC} onChangeText={setNIC} />
      <Text style={styles.label}>Year Joined:</Text>
      <TextInput style={styles.input} value={yearJoined} onChangeText={setYearJoined} />
      <Text style={styles.label}>Department Id:</Text>
      <TextInput style={styles.input} value={departmentId} onChangeText={setDepartmentId} />

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
    color:'black'

  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 4,
    padding: 10,
    marginBottom: 20,
    color:'black'

  },
});

export default EmployeeForm;
