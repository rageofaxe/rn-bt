import React, { useRef, useCallback } from "react";
import { Container, Text, Graphics } from "@inlet/react-pixi";

import { HEIGHT, WIDTH } from "../../utils";
import { $levelId, setLevel } from "../../models/field";
import { useStore } from "effector-react";
import { changeRoute } from "../../models/routing";

const NextLevelScene = () => {
    const levelId = useStore($levelId);
    const graphicRef = useRef(null);
    const incLevel = useCallback(() => {
        // setLevel(levelId + 1)
        changeRoute("menu")
    }, [levelId])

    return (
        <Container ref={graphicRef}>
            <Graphics width={WIDTH} height={HEIGHT}  >
                <Text
                    text="Next level"
                    anchor={0.5}
                    position={[WIDTH / 2, HEIGHT / 2]}
                    style={{ fontSize: 32 }}
                    interactive={true}
                    pointerdown={incLevel}
                />
            </Graphics>
        </Container>
    );
};

export default NextLevelScene;
