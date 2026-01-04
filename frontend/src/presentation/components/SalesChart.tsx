import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, ActivityIndicator, Dimensions } from 'react-native';
import { BarChart } from 'react-native-chart-kit';
import { GetSalesDataUseCase } from '../../domain/usecases/GetSalesDataUseCase';
import { ProductRepository } from '../../data/repositories/ProductRepository';
import { ApiClient } from '../../data/api/ApiClient';
import { SalesData } from '../../domain/entities/Product';

const SalesChart: React.FC = () => {
  const [data, setData] = useState<SalesData[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const apiClient = new ApiClient();
  const productRepository = new ProductRepository(apiClient);
  const getSalesDataUseCase = new GetSalesDataUseCase(productRepository);

  useEffect(() => {
    loadSalesData();
  }, []);

  const loadSalesData = async () => {
    setIsLoading(true);
    setError(null);
    try {
      const salesData = await getSalesDataUseCase.execute();
      setData(salesData);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Failed to load sales data');
    } finally {
      setIsLoading(false);
    }
  };

  if (isLoading) {
    return (
      <View style={styles.container}>
        <Text style={styles.title}>Sales by Category Chart</Text>
        <ActivityIndicator size="large" color="#007AFF" style={styles.loader} />
      </View>
    );
  }

  if (error) {
    return (
      <View style={styles.container}>
        <Text style={styles.title}>Sales by Category Chart</Text>
        <Text style={styles.error}>{error}</Text>
      </View>
    );
  }

  if (data.length === 0) {
    return (
      <View style={styles.container}>
        <Text style={styles.title}>Sales by Category Chart</Text>
        <Text style={styles.emptyText}>No sales data available</Text>
      </View>
    );
  }

  const chartData = {
    labels: data.map(item => item.category),
    datasets: [{
      data: data.map(item => item.total_sales)
    }]
  };

  const screenWidth = Dimensions.get('window').width;

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Sales by Category Chart</Text>
      <BarChart
        data={chartData}
        width={screenWidth - 48}
        height={220}
        yAxisLabel="$"
        yAxisSuffix=""
        chartConfig={{
          backgroundColor: '#ffffff',
          backgroundGradientFrom: '#4A90E2',
          backgroundGradientTo: '#357ABD',
          decimalPlaces: 2,
          color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
          labelColor: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
          style: {
            borderRadius: 16
          },
          propsForDots: {
            r: '6',
            strokeWidth: '2',
            stroke: '#ffa726'
          }
        }}
        style={{
          marginVertical: 8,
          borderRadius: 16
        }}
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
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 16,
    color: '#333',
  },
  loader: {
    marginVertical: 20,
  },
  error: {
    color: '#d32f2f',
    textAlign: 'center',
    marginVertical: 20,
  },
  emptyText: {
    color: '#666',
    textAlign: 'center',
    marginVertical: 20,
    fontSize: 16,
  },
});

export default SalesChart;


