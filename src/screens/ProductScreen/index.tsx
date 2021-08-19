import React, { useState } from 'react';
import { useEffect } from 'react';
import { FlatList, Text, View } from 'react-native';
import getCar from '../../api/getCar';
import useAuth from '../../hooks/useAuth';
import { ICar } from '../../types/car';
import styles from './index.styles';

/**
 * ProductScreen displays the auth status (Connecté or Déconnecté)
 * and a list of car specs loaded from API when screen mounted
 */
const ProductScreen: React.FC = () => {
  const { authenticated } = useAuth();
  const [car, setCar] = useState<ICar | null>(null);

  /* Async function to load car informations */
  const loadCar = async (): Promise<void> => {
    const loadedCar = await getCar();
    console.log('loadedCar', loadedCar);
    if (loadedCar?.data) {
      setCar(loadedCar.data);
    }
  };

  /* Load car informations when screen is mounting */
  useEffect(() => {
    loadCar();
  }, []);

  /** Array Item */
  const arrayItem = ({ item }: { item: keyof ICar }) => {
    return (
      <>
        {car && !!car[item] && (
          <View style={styles.arrayItemContainer}>
            <View style={styles.arrayCell}>
              <Text numberOfLines={1} style={styles.arrayLabel}>
                {item}
              </Text>
            </View>
            <View style={styles.arrayCell}>
              <Text numberOfLines={1} style={styles.arrayLabel}>
                {car[item]}
              </Text>
            </View>
          </View>
        )}
      </>
    );
  };

  /* Car informations specs to display */
  const carFields: (keyof ICar)[] = [
    'make_and_model',
    'color',
    'transmission',
    'fuel_type',
    'doors',
    'kilometrage',
    'license_plate',
  ];

  console.log('car', car);

  return (
    <View style={styles.container}>
      <Text style={styles.label}>
        {authenticated ? 'Connecté' : 'Non connecté'}
      </Text>
      <View style={styles.arrayContainer}>
        <FlatList
          showsHorizontalScrollIndicator={false}
          keyExtractor={(item: any, _index: number) => `${item}`}
          data={carFields}
          renderItem={arrayItem}
        />
      </View>
    </View>
  );
};

export default ProductScreen;
