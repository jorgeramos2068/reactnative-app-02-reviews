import React, { useState } from 'react';
import { AppLoading } from 'expo';
import * as Fonts from 'expo-font';
import Navigator from './routes/HomeStack';

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
      <Navigator />
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
