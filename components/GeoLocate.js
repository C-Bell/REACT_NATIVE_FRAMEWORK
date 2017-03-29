/* eslint no-console: 0 */


const React = require('react');
const ReactNative = require('react-native');

const {
  StyleSheet,
  Text,
  View,
  navigator,
} = ReactNative;

exports.framework = 'React';
exports.title = 'Geolocation';
exports.description = 'Examples of using the Geolocation API.';

exports.examples = [
  {
    title: 'navigator.geolocation',
    render(): React.Element<any> {
      return <GeolocationExample />;
    },
  },
];

const styles = StyleSheet.create({
  title: {
    fontWeight: '500',
  },
});

class GeolocationExample extends React.Component {
  state = {
    initialPosition: 'unknown',
    lastPosition: 'unknown',
  };


  componentDidMount() {
    navigator.geolocation.getCurrentPosition(
      (position) => {
        const initialPosition = JSON.stringify(position);
        this.setState({ initialPosition });
      },
      error => alert(JSON.stringify(error)),
      { enableHighAccuracy: true, timeout: 20000, maximumAge: 1000 },
    );
    this.watchID = navigator.geolocation.watchPosition((position) => {
      const lastPosition = JSON.stringify(position);
      this.setState({ lastPosition });
    });
  }

  componentWillUnmount() {
    navigator.geolocation.clearWatch(this.watchID);
  }

  watchID: ?number = null;

  render() {
    return (
      <View>
        <Text>
          <Text style={styles.title}>Initial position: </Text>
          {this.state.initialPosition}
        </Text>
        <Text>
          <Text style={styles.title}>Current position: </Text>
          {this.state.lastPosition}
        </Text>
      </View>
    );
  }
}
