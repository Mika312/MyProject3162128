import {useState} from 'react';
import auth from '@react-native-firebase/auth';

export const useAuthentication = () => {
  // Set an initializing state whilst Firebase connects
  const [initializing, setInitializing] = useState(true);
  const [user, setUser] = useState<any>();

  // Handle user state changes
  function onAuthStateChanged(user: any) {
    setUser(user);
    if (initializing) setInitializing(false);
  }
  const logout = () => {
    auth()
      .signOut()
      .then(() => console.log('User signed out!'));
  };

  return {
    initializing,
    setInitializing,
    user,
    setUser,
    onAuthStateChanged,
    logout,
  };
};
