import React, { useEffect } from "react";
import styled from "styled-components/native";
import { View } from "react-native";

import Field from "../../components/Field";
import Hud from "../../components/Hud";
import { useStore } from "effector-react";
import { $isNextLevel, $levelId, setLevel } from "../../models/field";
import { changeRoute } from "../../models/routing";

const PlayScene = () => {
    const isNextLevel = useStore($isNextLevel);
    const levelId = useStore($levelId);

    useEffect(() => {
        if(isNextLevel) {
            changeRoute("play")
            // setLevel(levelId + 1)
        }
    }, [isNextLevel])

    return (
        <Container>
            <Hud />
            <Field />
            <View />
        </Container>
    );
};

const Container = styled.View`
    justify-content: space-between;
    flex: 1;
`

export default PlayScene;
