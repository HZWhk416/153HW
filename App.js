import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { Button, StyleSheet, Text, View, Image } from 'react-native';
import Home from './components/Home'
import CovidDemo from './components/CovidDemo';
import ValueProvider from './components/ValueContext';


export default function App() {
  const background = {bgurl: 'https://cdn.wallpapersafari.com/98/93/GefbNz.jpg'}
  return (
    <ValueProvider value={background}>
      <Home />
    </ValueProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'stretch',
    justifyContent: 'center',
    flexDirection: 'column'
  },
});