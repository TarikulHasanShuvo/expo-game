import React, {Component, useEffect} from 'react';
import {createAppContainer} from 'react-navigation';
import AppNavigator from './src/components/AppNavigator';


const AppContainer = createAppContainer(AppNavigator);

export default function App(props) {
    return <AppContainer/>;
}
