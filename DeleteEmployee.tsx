import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';

const DeleteEmployee: React.FC = () => {
    const [id, setIdToDelete] = useState('');

    const handleDelete = async () => { //does not block the other part of the code 
        try {
            if (!id.trim()) { //remove whitesapce of a string in both sides 
                console.error('Please enter an Employee ID to delete');
                return;
            }

            console.log(`http://10.0.2.2:8080/api/employees/delete/${id}`);
            
            const response = await fetch(`http://10.0.2.2:8080/api/employees/delete/${id}`, {
                method: 'DELETE',
                headers: {
                    'Content-Type': 'application/json',
                },
            });

            if (response.ok) {
                console.log('Employee deleted successfully');
            } else {
                console.log(response);
                
                console.error('Failed to delete employee');
            }
        } catch (error) {
            console.error('Error deleting employee:', error);
        }
    };

    return (
        <View style={styles.container}>
            <Text style={styles.label}>Enter id:</Text>
            <TextInput
                style={styles.input}
                value={id}
                onChangeText={setIdToDelete}
                // keyboardType="numeric" 
            />
            <Button title="Delete Employee" onPress={handleDelete} />
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

export default DeleteEmployee;
