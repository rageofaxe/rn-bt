import React, { useEffect } from "react";

import Field from "../../components/Field";
import Hud from "../../components/Hud";
import { useStore } from "effector-react";
import { $isNextLevel, $levelId, setLevel } from "../../models/field";
import { changeRoute } from "../../models/routing";
import { View, Text } from "react-native";

const PlayScene = () => {
    const isNextLevel = useStore($isNextLevel);
    const levelId = useStore($levelId);

    useEffect(() => {
        if(isNextLevel) {
            changeRoute("play")
            setLevel(levelId + 1)
        }
    }, [isNextLevel])

    return (
        <View>
            <Hud />
            <Field />
        </View>
    );
};

export default PlayScene;
