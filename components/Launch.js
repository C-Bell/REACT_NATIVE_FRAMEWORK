import React from 'react';
// import TextInput from 'react-native';
import { Col, Row, Grid } from 'react-native-easy-grid';
import { H1, H3, InputGroup, Input, Container, Content, Button, Text, Header, Left, Right, Icon, Body, Title } from 'native-base';
import { Actions } from 'react-native-router-flux';
//
// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//     backgroundColor: 'transparent',
//     // borderWidth: 2,
//     // borderColor: 'red',
//   },
// });

class Launch extends React.Component {
  render() {
    return (
      <Container {...this.props}>
        <Header>
          <Body>
            <Title>Hunter</Title>
          </Body>
          <Right>
            {/* <Button transparent>
              <Icon ios="ios-pizza-outline" android="md-pizza" style={{ color: '#ffc125' }} />
            </Button> */}
          </Right>
        </Header>
        <Content>
          <Grid>
            <Row size={2} >
              <H1 style={{ textAlign: 'center' }}>Its time to hunt...</H1>
            </Row>
            <H3 style={{ textAlign: 'center' }} />
            <Row>
              <Col />
              <Col style={{ width: 200 }}>
                <InputGroup borderType="underline" >
                  <Icon ios="ios-pizza-outline" android="md-pizza" size={27} />
                  <Input placeholder="e.g. RG24 9AF" />
                </InputGroup>
              </Col>
              <Col />
            </Row>
            <Row>
              <Col />
              <Col style={{ width: 180 }}>
                <Button onPress={() => Actions.home()}><Text>Find a Restaurant</Text></Button>
              </Col>
              <Col />
            </Row>
          </Grid>
        </Content>
      </Container>
    );
  }
}

module.exports = Launch;
