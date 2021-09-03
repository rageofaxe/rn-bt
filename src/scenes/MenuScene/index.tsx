import React from "react";
import { Text, View } from 'react-native';

const MenuScene = ({navigation}) => {
    return (
        <View>
                <Text onPress={() => navigation.navigate('Play')}>Play</Text>
                <Text onPress={() => navigation.navigate('Menu')}>About</Text>
        </View>
    );
};

export default MenuScene;
