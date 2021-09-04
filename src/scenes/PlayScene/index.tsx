import React, { useEffect } from "react";
import styled from "styled-components/native";
import { View } from "react-native";

import Field from "../../components/Field";
import Hud from "../../components/Hud";
import { useStore } from "effector-react";
import { $isNextLevel, $levelId, setLevel } from "../../models/field";
import { changeRoute } from "../../models/routing";
import { ContainerCentered } from "../../components/styled";

const PlayScene = () => {
    const isNextLevel = useStore($isNextLevel);
    const levelId = useStore($levelId);

    useEffect(() => {
        if (isNextLevel) {
            changeRoute("play");
            // setLevel(levelId + 1)
        }
    }, [isNextLevel]);

    return (
        <ContainerCentered>
            <Hud />
            <Field />
            <View />
        </ContainerCentered>
    );
};

export default PlayScene;
