import {
  TouchableOpacity,
  KeyboardAvoidingView,
  Platform,
  UIManager,
  TextInput,
} from 'react-native';
import { BigNumber } from 'bignumber.js';

Platform.OS === 'android' &&
  UIManager.setLayoutAnimationEnabledExperimental &&
  UIManager.setLayoutAnimationEnabledExperimental(true);

TouchableOpacity.defaultProps.activeOpacity = 0.8;
KeyboardAvoidingView.defaultProps.behavior =
  Platform.OS === 'ios' ? 'padding' : null;
// KeyboardAvoidingView.defaultProps.keyboardVerticalOffset = Platform.OS === 'ios' ? 60 : null;
TextInput.defaultProps.autoCapitalize = 'none';
TextInput.defaultProps.autoCorrect = false;

BigNumber.config({
  FORMAT: {
    // the decimal separator
    decimalSeparator: ',',
    // the grouping separator of the integer part
    groupSeparator: '.',
    // the primary grouping size of the integer part
    groupSize: 3,
    // the secondary grouping size of the integer part
    secondaryGroupSize: 0,
    // the grouping separator of the fraction part
    fractionGroupSeparator: ' ',
    // the grouping size of the fraction part
    fractionGroupSize: 0,
  },
});
