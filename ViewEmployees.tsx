import React, { useState, useEffect } from 'react';
import { View, Text, FlatList, StyleSheet, Button, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';


interface Employee {
  id: number;
  firstName: string;
  lastName: string;
  NIC: string;
  yearJoined: number;
  departmentId: number;
}


  

const ViewEmployees = ({navigation}) => {
  const [employees, setEmployees] = useState<Employee[]>([]);
  // const navigation = useNavigation();

  

  useEffect(() => {
    fetchEmployees();
  }, []);

  const fetchEmployees = async () => {
    try {
      const response = await fetch('http://10.0.2.2:8080/api/employees');
      const data = await response.json();
      setEmployees(data);
    } catch (error) {
      console.error('Error fetching employees:', error);
    }
  };

  const renderHeading = () => (
    <View style={styles.headingRow}>
      <Text style={styles.headingCell}>Id</Text>
      <Text style={styles.headingCell}>First Name</Text>
      <Text style={styles.headingCell}>Last Name</Text>
      <Text style={styles.headingCell}>NIC</Text>
      <Text style={styles.headingCell}>Year Joined</Text>
      <Text style={styles.headingCell}>Department ID</Text>
    </View>
  );
  const renderEmployee = ({ item }: { item: Employee }) => (
    <View style={styles.employeeRow}>
      <Text style={[styles.cell, { width: 50 }]}>{item.id}</Text>
      <Text style={[styles.cell, { width: 100 }]}>{item.firstName}</Text>
      <Text style={[styles.cell, { width: 100}]}>{item.lastName}</Text>
      <Text style={[styles.cell, { width: 200 }]}>{item.NIC}</Text>
      <Text style={[styles.cell, { width: 50 }]}>{item.yearJoined}</Text>
      <Text style={[styles.cell, { width: 50 }]}>{item.departmentId}</Text>
    </View>
  );

  return (
    <View style={styles.container}>
     
      <FlatList
        data={employees}
        renderItem={renderEmployee}
        keyExtractor={(item) => item.id.toString()}
        ListHeaderComponent={renderHeading}
      />
       <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Employee Form')}>
        <Text style={styles.buttonText}>Add Employee</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>Delete Employee</Text>
      </TouchableOpacity>
    </View>
  );
  
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 5,
    paddingTop: 20,
    backgroundColor: '#fff',
  },
  headingRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 10,
    paddingVertical: 10,
    paddingHorizontal: 10,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 4,
    backgroundColor: 'pink',
  },
  employeeRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 10,
    paddingVertical: 10,
    paddingHorizontal: 10,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 4,
  },
  headingCell: {
    flex: 1,
    textAlign: 'center',
    fontWeight: 'bold',
  },
  cell: {
    flex: 1,
    textAlign: 'center',
  },
  button: {
    backgroundColor: 'yellow',
    paddingVertical: 10,
    paddingHorizontal: 5,
    marginVertical: 5,
    marginHorizontal:5,
    borderRadius: 5,
  },
  buttonText: {
    color: 'black',
    fontSize: 16,
  },
});

export default ViewEmployees;
