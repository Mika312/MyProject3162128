import React from 'react';
import {SafeAreaView, StyleSheet, Text} from 'react-native';

export const App = () => {
  return (
    <SafeAreaView style={styles.safeAreaView}>
      <Text>MyProject</Text>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safeAreaView: {
    flex: 1,
  },
});
