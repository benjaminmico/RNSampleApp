import { ImageStyle } from 'react-native';
import { StyleSheet, TextStyle, ViewStyle } from 'react-native';

interface IStyles {
  container: ViewStyle;
  button: ViewStyle;
  label: TextStyle;
  image: ImageStyle;
}

const styles = StyleSheet.create<IStyles>({
  container: {
    alignItems: 'center',
  },
  button: {
    width: 200,
    height: 40,
    marginTop: 80,
    backgroundColor: '#000',
    justifyContent: 'center',
    alignItems: 'center',
  },
  label: {
    color: '#FFF',
  },
  image: {
    marginLeft: 20,
    marginTop: 80,
    width: 200,
    height: 200,
    resizeMode: 'cover',
  },
});

export default styles;
