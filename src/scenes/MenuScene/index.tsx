import React, { useCallback,  } from "react";
import { Text, View } from 'react-native';
import { changeRoute } from "../../models/routing";

const MenuScene = () => {
    const changeRouteCb = useCallback<(route: Route) => void>(route => {
        changeRoute(route)
    }, [])

    console.log("render")

    return (
        <View>
                <Text onPress={changeRouteCb.bind(this, "play")}>Play</Text>
                <Text onPress={changeRouteCb.bind(this, "menu")}>About</Text>
        </View>
    );
};

export default MenuScene;
