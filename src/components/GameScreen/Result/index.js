import React, {Component} from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import {USER_FIGURE, AI_FIGURE, DRAW} from '../Game/constants';
import AsyncStorage from "@react-native-async-storage/async-storage";
const name = AsyncStorage.getItem('name');
export default class Result extends Component {
    _getResultMessage() {
        const {result} = this.props;

        switch (result) {
            case USER_FIGURE:
                return `${name._z ? name._z : 'তুমি'} জিতেছ !`;
            case AI_FIGURE:
                return 'শুভ স্যার জিতেছেন !';
            case DRAW:
                return 'ড্র হয়েছে';
        }
    }

    render() {
        const {onRestartGameBtnClick} = this.props;

        return (<View>
            <Text style={styles.result}>{this._getResultMessage()}</Text>
            <TouchableOpacity onPress={onRestartGameBtnClick}>
                <Text style={styles.instructions}>পুনরায় খেলতে চাইলে এখানে ক্লিক করুন</Text>
            </TouchableOpacity>
        </View>);
    }
}

const styles = StyleSheet.create({
    result: {
        fontSize: 24, margin: 18, textAlign: 'center',
    }, instructions: {
        textAlign: 'center', color: 'grey',
    },
});
