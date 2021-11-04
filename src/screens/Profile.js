import React from 'react';
import {Text, View} from 'react-native';
const Profile = ({navigation, route}) => {
  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Text>Profile</Text>
      <Text>{JSON.stringify(route.params, null, 2)}</Text>
    </View>
  );
};

export default Profile;
