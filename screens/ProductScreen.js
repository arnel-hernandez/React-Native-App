import React from 'react';
import {
  Image,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import { WebBrowser } from 'expo';

import { MonoText } from '../components/StyledText';

export default class HomeScreen extends React.Component {
  static navigationOptions = {
    header: null,
  };

  render() {
    return (
      <View>
        <ScrollView>
        <Image source={require('../assets/images/Corei7.jpg')} style={styles.welcomeImage}/>
        <Text style={styles.getStartedText}>Core i7</Text>
        <TouchableOpacity onPress={this._handleHelpPress}>
          <Text style={styles.helpLinkText}>See Specification</Text>
        </TouchableOpacity>
        </ScrollView>
      </View>
    );
  }

  //FUNCTIONS
  _handleHelpPress = () => {
    WebBrowser.openBrowserAsync(
      'https://www.amazon.com/Intel-i7-8700K-Desktop-Processor-Unlocked/dp/B07598VZR8/ref=sr_1_1_sspa?crid=UND4G942HFO4&keywords=core+i7&qid=1559061919&s=gateway&sprefix=core+i%2Caps%2C375&sr=8-1-spons&psc=1w3schools.com/css/css_align.asp'
    );
  };
}

const styles = StyleSheet.create({
  getStartedText: {
    fontSize: 17,
    color: 'rgba(96,100,109, 1)',
    lineHeight: 24,
    textAlign: 'center',
  },
  welcomeImage: {
    width: 150,
    height: 200,
    resizeMode: 'contain',
    marginTop: 30,
    marginLeft: 120,
  },
  helpLinkText: {
    fontSize: 14,
    color: '#2e78b7',
    textAlign: 'center',
  },
});