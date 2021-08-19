import React from 'react';
import { Text, View } from 'react-native';
import useAuth from '../../hooks/useAuth';
import styles from './index.styles';

/**
 * ProfileScreen displays the auth status (Connecté or Déconnecté)
 */
const ProfileScreen: React.FC = () => {
  const { authenticated } = useAuth();

  return (
    <View style={styles.container}>
      <Text style={styles.label}>
        {authenticated ? 'Connecté' : 'Non connecté'}
      </Text>
    </View>
  );
};

export default ProfileScreen;
