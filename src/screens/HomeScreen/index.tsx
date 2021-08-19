import React from 'react';
import { FlatList, Image, Text, TouchableOpacity, View } from 'react-native';
import useAuth from '../../hooks/useAuth';
import styles from './index.styles';

/**
 * HomeScreen displays a button and a list of image as horizontal screen.
 * It is also the default screen app
 */
const HomeScreen: React.FC = () => {
  const { authenticated, signIn, signOut } = useAuth();

  /** Change Auth status depending on authenticated value */
  const authChangeStatus = (): void => {
    if (authenticated) {
      signOut();
    } else {
      signIn();
    }
  };

  /** Render item image */
  const renderItem = ({ item }: { item: any }) => (
    <Image
      key={`${item}`}
      source={{ uri: 'https://source.unsplash.com/random/300x200' }}
      style={styles.image}
    />
  );

  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.button} onPress={authChangeStatus}>
        <Text style={styles.label}>
          {authenticated ? 'Déconnexion' : 'Connexion'}
        </Text>
      </TouchableOpacity>

      <FlatList
        horizontal
        showsHorizontalScrollIndicator={false}
        keyExtractor={(_item: any, index: number) => `${index}`}
        data={Array(10)}
        renderItem={renderItem}
      />
    </View>
  );
};

export default HomeScreen;
