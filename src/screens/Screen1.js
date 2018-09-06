import React from 'react';
import styled from 'styled-components';
import { Text, View } from 'react-native';
import EnvConfig from '../modules/EnvConfig';

const Container = styled.View`
  flex: 1;
`;

class Screen1 extends React.PureComponent {
  render() {
    const { navigation } = this.props;
    return (
      <Container>
        <Text>
          screen1
        </Text>
        <Text onPress={() => navigation.navigate('Screen2')}>Go Screen 2</Text>
        <Text>{EnvConfig.ENV}</Text>
      </Container>
    );
  }
}

export default Screen1;
