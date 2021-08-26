import * as React from 'react';
import {SafeAreaView, Text, View, StyleSheet} from 'react-native';

const App = () => {
  return (
    <SafeAreaView>
      <View style={styles.wrapper}>
        <Text style={styles.text}>Hello</Text>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    alignItems: 'center',
  },
  text: {
    fontSize: 24,
  },
});

export default App;
