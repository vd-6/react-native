import React from 'react';
import {Text, View} from 'react-native';
const Home = ({navigation, route}) => {
  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Text>Home</Text>
      <Text>{JSON.stringify(route.params, null, 2)}</Text>
    </View>
  );
};

export default Home;
