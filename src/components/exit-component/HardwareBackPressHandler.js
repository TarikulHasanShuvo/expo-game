import React, {useEffect} from 'react';
import { BackHandler} from "react-native";

const HardwareBackPressHandler = (props,routeName = null) =>
    useEffect(() => {
        const backAction = () => {
            routeName == null ?  props.navigation.pop() : props.navigation.navigate(routeName)
            return true;
        };
        const backHandler = BackHandler.addEventListener('hardwareBackPress', backAction);

        return () => backHandler.remove();
    }, []);


export default HardwareBackPressHandler;
