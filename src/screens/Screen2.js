import React from 'react';
import styled from 'styled-components';
import { Text } from 'react-native';

const Container = styled.View`
  flex: 1;
`;

class Screen2 extends React.PureComponent {
  render() {
    return (
      <Container>
        <Text>
          screen2
        </Text>
      </Container>
    );
  }
}

export default Screen2;
