import React from 'react';
import { ScrollView, View, StyleSheet } from 'react-native';
import DataInput from '../components/DataInput';
import SalesChart from '../components/SalesChart';

const HomeScreen: React.FC = () => {
  return (
    <ScrollView style={styles.container}>
      <View style={styles.content}>
        <DataInput />
        <SalesChart />
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
  },
  content: {
    padding: 16,
  },
});

export default HomeScreen;


