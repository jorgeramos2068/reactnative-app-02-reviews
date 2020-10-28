import React, { useState } from 'react';
import { AppLoading } from 'expo';
import * as Fonts from 'expo-fonts';
import Home from './screens/Home';

const getFonts = () => {
  return Fonts.loadAsync({
    'nunito-regular': require('./assets/fonts/Nunito-Regular.ttf'),
    'nunito-bold': require('./assets/fonts/Nunito-Bold.ttf'),
  });
};

const App = () => {
  const [loadedFonts, setLoadedFonts] = useState(false);

  if (loadedFonts) {
    return (
      <Home />
    );
  }
  else {
    return (
      <AppLoading
        startAsync={getFonts}
        onFinish={() => setLoadedFonts(true)}
      />
    )
  }
}

export default App;
