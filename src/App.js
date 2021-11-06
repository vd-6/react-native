import React, {useEffect, useRef} from 'react';
import {SafeAreaView, StyleSheet} from 'react-native';
import StackNavigator from './navigator/StackNavigator';

import NetInfo from '@react-native-community/netinfo';
import DeviceInfo from 'react-native-device-info';
import PushNotification from 'react-native-push-notification';
import {senderID} from './Config';
// import {useNavigation} from '@react-navigation/core';

window.consolejson = json => console.log(JSON.stringify(json, null, 2));
const App = () => {
  // const navigation = useNavigation();
  const navRef = useRef();
  useEffect(() => {
    // const netInfoSubscribe = NetInfo.addEventListener(state =>
    //   store.dispatch(actions.SetNetInfo(state)),
    // );
    PushNotification.configure({
      onRegister: ({token}) => {
        // console.log('firebase_token : ', token);
        consolejson({token});
        // store.dispatch(
        //   actions.SetDeviceInfo({
        //     id: DeviceInfo.getDeviceId(),
        //     token: token.toString(),
        //     model: DeviceInfo.getModel(),
        //     os: Platform.OS,
        //   }),
        // );
      },

      onNotification: notification => {
        console.log('notification');

        const {
          data,
          userInteraction,
          foreground,
          id,
          channelId,
          title = 'default',
          message = 'default',
        } = notification;

        // consolejson({notification});
        if (userInteraction && data?.type === 'navigate') {
          const {screen, params} = data;
          navRef.current.navigate(screen, JSON.parse(params));
          return;
        }
        const localNotification = {
          id,
          channelId,
          title,
          message,
          data,
        };
        if (foreground) {
          PushNotification.localNotification(localNotification);
        }
      },
      onAction: function (notification) {
        console.log('ACTION:', notification.action);
        console.log('NOTIFICATION:', notification);

        // process the action
      },
      onRegistrationError: function (err) {
        console.error(err.message, err);
      },
      permissions: {
        alert: true,
        badge: true,
        sound: true,
      },
      senderID,
      popInitialNotification: true,
      requestPermissions: true,
    });
    return () => {
      // netInfoSubscribe();
    };
  }, []);

  return <StackNavigator ref={navRef} />;
};

const styles = StyleSheet.create({});

export default App;
