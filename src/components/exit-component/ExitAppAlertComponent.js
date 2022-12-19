import React from 'react';
import {Alert, BackHandler} from "react-native";

const ExitAppAlertComponent = () => {
    const backHandler = BackHandler.addEventListener('hardwareBackPress', BackPressExitAppAlert);
    return () => backHandler.remove();
}


export default ExitAppAlertComponent;

export const BackPressExitAppAlert = () => {
    Alert.alert('','Are you sure you want to exit?', [
        {
            text: 'Cancel',
            onPress: () => null,
            style: 'cancel',
        },
        { text: 'YES', onPress: () => BackHandler.exitApp() },
    ]);
    return true;
};
