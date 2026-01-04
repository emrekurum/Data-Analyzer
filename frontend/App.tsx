import React from 'react';
import { StatusBar } from 'expo-status-bar';
import HomeScreen from './src/presentation/screens/HomeScreen';

const App: React.FC = () => {
  return (
    <>
      <StatusBar style="auto" />
      <HomeScreen />
    </>
  );
};

export default App;
