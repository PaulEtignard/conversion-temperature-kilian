import React from 'react';
import Convertisseur from './component/input/convertisseur';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';

const App = () => {
  return (
    <SafeAreaProvider>
      <SafeAreaView>
        <Convertisseur />
      </SafeAreaView>
    </SafeAreaProvider>
   
  );
}

export default App;
