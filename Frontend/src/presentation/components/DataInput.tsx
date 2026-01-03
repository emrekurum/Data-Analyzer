import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, Alert } from 'react-native';
import { Picker } from '@react-native-picker/picker';
import { AddProductUseCase } from '../../domain/usecases/AddProductUseCase';
import { ProductRepository } from '../../data/repositories/ProductRepository';
import { ApiClient } from '../../data/api/ApiClient';

const DataInput: React.FC = () => {
  const [productName, setProductName] = useState('');
  const [price, setPrice] = useState('');
  const [quantity, setQuantity] = useState('');
  const [category, setCategory] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const apiClient = new ApiClient();
  const productRepository = new ProductRepository(apiClient);
  const addProductUseCase = new AddProductUseCase(productRepository);

  const handleSubmit = async () => {
    if (!productName.trim() || !price || !quantity || !category) {
      Alert.alert('Error', 'Please fill in all fields');
      return;
    }

    setIsLoading(true);
    try {
      await addProductUseCase.execute({
        name: productName.trim(),
        price: parseFloat(price),
        quantity: parseInt(quantity, 10),
        category: category,
      });

      Alert.alert('Success', 'Product added successfully');
      setProductName('');
      setPrice('');
      setQuantity('');
      setCategory('');
    } catch (error) {
      Alert.alert('Error', error instanceof Error ? error.message : 'Failed to add product');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.header}>E-Commerce Data Input</Text>
      
      <Text style={styles.label}>Product Name:</Text>
      <TextInput 
        style={styles.input}
        value={productName}
        onChangeText={setProductName}
        placeholder="Enter product name"
      />
      
      <Text style={styles.label}>Price:</Text>
      <TextInput 
        style={styles.input}
        value={price}
        keyboardType="numeric"
        onChangeText={setPrice}
        placeholder="Enter price"
      />
      
      <Text style={styles.label}>Quantity:</Text>
      <TextInput 
        style={styles.input}
        value={quantity}
        keyboardType="numeric"
        onChangeText={setQuantity}
        placeholder="Enter quantity"
      />
      
      <Text style={styles.label}>Category:</Text>
      <Picker
        selectedValue={category}
        onValueChange={setCategory}
        style={styles.picker}
      >
        <Picker.Item label="Select a category" value="" />
        <Picker.Item label="Electronics" value="Electronics" />
        <Picker.Item label="Clothing" value="Clothing" />
        <Picker.Item label="Home & Garden" value="Home & Garden" />
        <Picker.Item label="Other" value="Other" />
      </Picker>

      <Button 
        title={isLoading ? "Sending..." : "Submit Data"} 
        onPress={handleSubmit}
        disabled={isLoading}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 20,
    backgroundColor: '#ffffff',
    borderRadius: 8,
    marginBottom: 20,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 20,
    color: '#333',
  },
  label: {
    fontSize: 16,
    fontWeight: '600',
    marginBottom: 8,
    color: '#333',
  },
  input: {
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 4,
    padding: 12,
    marginBottom: 16,
    fontSize: 16,
    backgroundColor: '#fff',
  },
  picker: {
    height: 50,
    marginBottom: 20,
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 4,
  },
});

export default DataInput;

