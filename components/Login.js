import React from 'react';
// import { View, Text, StyleSheet } from 'react-native';
import { Container, Content, Button, Text, Header, Left, Right, Icon, Body, Title } from 'native-base';
// import Button from 'react-native-button';
import { Actions } from 'react-native-router-flux';

export default class Login extends React.Component {
  render() {
    return (
      <Container>
        <Header>
          <Left>
            <Button onPress={Actions.pop} transparent>
              <Icon name="arrow-back" />
            </Button>
          </Left>
          <Body>
            <Title>Spin The Wheel</Title>
          </Body>
          <Right>
            {/* <Button transparent>
              <Icon name="menu" />
            </Button> */}
          </Right>
        </Header>
        <Content>
          <Button onPress={Actions.pop} light block>
            <Text>Back</Text>
          </Button>
        </Content>
      </Container>
    );
  }
}
