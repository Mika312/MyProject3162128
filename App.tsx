import React, {useEffect} from 'react';
import {Button, SafeAreaView, StyleSheet, Text} from 'react-native';
import {GoogleSignin} from '@react-native-google-signin/google-signin';
import auth from '@react-native-firebase/auth';
import {onGoogleButtonPress} from './ios/src/authentication/googleSignin';
import {useAuthentication} from './ios/src/authentication/authentication';

GoogleSignin.configure({
  webClientId:
    '930529132291-tqud7m980o335grs9gj1djge17hbs6j3.apps.googleusercontent.com',
});
export const App = () => {
  const {initializing, user, onAuthStateChanged, logout} = useAuthentication();

  useEffect(() => {
    const subscriber = auth().onAuthStateChanged(onAuthStateChanged);
    return subscriber; // unsubscribe on unmount
  }, []);

  if (initializing) return <Text>Loading</Text>;

  return (
    <SafeAreaView style={styles.safeAreaView}>
      <Text>MyProject {user?.displayName}</Text>
      <Button
        title="Google Sign-In"
        onPress={() =>
          onGoogleButtonPress().then(() =>
            console.log('Signed in with Google!'),
          )
        }
      />
      <Button title="Logout" onPress={logout} />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safeAreaView: {
    flex: 1,
  },
});
