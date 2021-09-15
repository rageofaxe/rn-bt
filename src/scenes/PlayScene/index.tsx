import React, { useEffect } from "react";
import { View } from "react-native";

import Field from "../../components/Field";
import Hud from "../../components/Hud";
import { useStore } from "effector-react";
import { $isNextLevel, $levelId, $mode, setLevel } from "../../models/field";
import { ContainerCentered } from "../../components/styled";

const PlayScene = () => {
    const isNextLevel = useStore($isNextLevel);
    const levelId = useStore($levelId);
    const mode = useStore($mode)

    useEffect(() => {
        if (isNextLevel && levelId !== 0) {
            setLevel(levelId + 1)
        }
    }, [isNextLevel]);

    return (
        <ContainerCentered>
            <Hud />
            <Field mode={mode} />
            <View />
        </ContainerCentered>
    );
};

export default PlayScene;
