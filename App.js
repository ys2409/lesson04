/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';

import moment from 'moment-timezone';

import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
} from 'react-native';

import {
  Header,
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';


const Welcome = () => {
  return (
    <Text>Welcome to C308 Web Frameworks</Text>
  );
}

class First extends React.Component {
  render() {
    return <Text>My first React Native app</Text>;
  }
}

const SemModule = (props) => {
  return (
    <Text>
      {props.day} - {props.modCode}
    </Text>
  );
}

class Eats extends React.Component{
  render(): React$Node {
    return <Text>{this.props.name}{'\n'}{this.props.location}{'\n'}</Text>
  }
}

class Clock extends React.Component {
  render() {
    return <Text>{this.props.name}</Text>
  }
}

const WorldClock = (props) => {
  const city = moment().tz(props.city).format('HH:MM Z');
  return <Text>{city}</Text>;
};

const App: () => React$Node = () => {
  console.log('Listing semester modules and recommended eats');
  return (
    <>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView>
        <ScrollView
          contentInsetAdjustmentBehavior="automatic"
          style={styles.scrollView}>
          <Header />
          {global.HermesInternal == null ? null : (
            <View style={styles.engine}>
              <Text style={styles.footer}>Engine: Hermes</Text>
            </View>
          )}
          <View style={styles.body}>
            <View style={styles.sectionContainer}>
              <Welcome/>
              <First/>
              <Text>{'\n'}</Text>
              <Text>My Modules for this Semester</Text>
              <SemModule day = "Monday" modCode = "C273"/>
              <SemModule day = "Tuesday" modCode = "C308"/>
              <Text>{'\n'}</Text>
              <Text>Recommended Eats @RP</Text>
              <Eats name="Sweet Tooth Waffles" location="W6 Level 1, E-canteen"/>
              <Text>{'\n'}</Text>
              <Text>World Clock</Text>
              <Clock name="Europe/London"/>
              <WorldClock name="Europe/London"/>
            </View>
          </View>
        </ScrollView>
      </SafeAreaView>
    </>
  );
};

const styles = StyleSheet.create({
  scrollView: {
    backgroundColor: Colors.lighter,
  },
  engine: {
    position: 'absolute',
    right: 0,
  },
  body: {
    backgroundColor: Colors.white,
  },
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
    color: Colors.black,
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
    color: Colors.dark,
  },
  highlight: {
    fontWeight: '700',
  },
  footer: {
    color: Colors.dark,
    fontSize: 12,
    fontWeight: '600',
    padding: 4,
    paddingRight: 12,
    textAlign: 'right',
  },
});

export default App;
