//  Created by react-native-create-bridge

import { NativeModules } from 'react-native'

const { EnvConfig } = NativeModules;

export default {
  ENV: EnvConfig.ENV
}
