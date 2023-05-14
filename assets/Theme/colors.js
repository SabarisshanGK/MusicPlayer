import { Dimensions } from 'react-native';

const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height;

const colors = {
  primaryColor: '#0C081C',
  lightBlack: '#1B1B1B',
  grey: '#23262B',
  blue: '#7952F4',
  lightBlue: '#3160F0',
  white: '#ffffff',
};

export { colors, width, height };
