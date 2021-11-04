import React from 'react';
import {Text, TouchableOpacity, View} from 'react-native';

import {useNavigation} from '@react-navigation/core';
const Splash = () => {
  const navigation = useNavigation();
  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <TouchableOpacity onPress={() => navigation.navigate('Home')}>
        <Text>Splash</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Splash;
