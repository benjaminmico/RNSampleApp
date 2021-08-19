import { StyleSheet, TextStyle, ViewStyle } from 'react-native';

interface IStyles {
  container: ViewStyle;
  label: TextStyle;
}

const styles = StyleSheet.create<IStyles>({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  label: {
    color: '#000',
    fontSize: 18,
  },
});

export default styles;
