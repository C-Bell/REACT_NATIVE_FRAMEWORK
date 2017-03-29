import React from 'react';
// import { View, Text, StyleSheet } from 'react-native';
import { Container, Content, Button, Text, Header, Left, Right, Icon, Body, Title } from 'native-base';
import { Col, Row, Grid } from 'react-native-easy-grid';
import { Actions } from 'react-native-router-flux';
import GoogleMap from 'react-native-maps';

export default class Home extends React.Component {
  render() {
    return (
      <Container>
        <Header>
          <Left>
            <Button onPress={() => { Actions.launch(); }} transparent>
              <Icon name="arrow-back" />
            </Button>
          </Left>
          <Body>
            <Title>Track them</Title>
          </Body>
          <Right>
            <Button transparent>
              <Icon ios="ios-pizza-outline" android="md-pizza" style={{ color: '#ffc125' }} />
            </Button>
          </Right>
        </Header>
        <Content style={{ backgroundColor: 'black' }}>
          {/* <Button onPress={Actions.pop} success block>
            <Text style={{ transform: [{ rotate: '10 deg' }] }}>Spin</Text>
          </Button> */}
          <GoogleMap
            style={{ height: 400, width: 200 }}
            cameraPosition={{ auto: true, zoom: 10 }}
            showsUserLocation
            scrollGestures
            zoomGestures
            tiltGestures
            rotateGestures
            consumesGesturesInView
            compassButton
            myLocationButton
            indoorPicker
            allowScrollGesturesDuringRotateOrZoom
          />
        </Content>
      </Container>
    );
  }
}
