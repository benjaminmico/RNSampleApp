import { StyleSheet, TextStyle, ViewStyle } from 'react-native';

interface IStyles {
  container: ViewStyle;
  arrayContainer: ViewStyle;
  arrayItemContainer: ViewStyle;
  arrayCell: ViewStyle;
  label: TextStyle;
  arrayLabel: TextStyle;
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
    marginTop: 30,
  },
  arrayContainer: {
    marginTop: 30,
    marginBottom: 30,
  },
  arrayItemContainer: {
    flexDirection: 'row',
  },
  arrayCell: {
    width: 150,
    height: 80,
    borderWidth: 1,
    borderColor: '#000',
    justifyContent: 'center',
    alignItems: 'center',
    paddingLeft: 16,
    paddingRight: 16,
  },
  arrayLabel: {
    color: '#000',
    fontSize: 12,
  },
});

export default styles;
