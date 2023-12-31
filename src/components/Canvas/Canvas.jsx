import { useState, useEffect, useCallback } from "react";
import { Unity, useUnityContext } from "react-unity-webgl";
import { ProgressBar, Aside } from "components";

const Canvas = () => {
    const {
        unityProvider,
        isLoaded,
        loadingProgression,
        sendMessage,
        addEventListener,
        removeEventListener,
    } = useUnityContext({
        loaderUrl: "unity/Web.loader.js",
        dataUrl: "unity/Web.data",
        frameworkUrl: "unity/Web.framework.js",
        codeUrl: "unity/Web.wasm",
    });

    const [name, setName] = useState();
    const [isEnd, setIsEnd] = useState(false);

    // We'll round the loading progression to a whole number to represent the
    // percentage of the Unity Application that has loaded.
    const loadingPercentage = Math.round(loadingProgression * 100);

    const setColor = useCallback(
        (event) => {
            const { color } = event.detail;
            console.log("color: ", color);
            if (name) sendMessage("GameController", "setColor", JSON.stringify({ name, color }));
        },
        [sendMessage, name]
    );

    const setTexture = useCallback(
        (event) => {
            const { texture } = event.detail;
            console.log("texture: ", texture);
            console.log(
                "JSON.stringify({ name, texture: texture.name }): ",
                JSON.stringify({ name, texture })
            );
            if (name)
                sendMessage("GameController", "setTexture", JSON.stringify({ name, texture }));
        },
        [sendMessage, name]
    );

    useEffect(() => {
        document.body.addEventListener("color", setColor);
        document.body.addEventListener("texture", setTexture);
        addEventListener("picker", setName);
        return () => {
            document.body.removeEventListener("color", setColor);
            document.body.removeEventListener("texture", setTexture);
            removeEventListener("picker", setName);
        };
    }, [setColor, setTexture, sendMessage, addEventListener, removeEventListener, setName]);

    useEffect(() => {
        if (isLoaded) setTimeout(() => setIsEnd(true), 2000);
    }, [isLoaded]);

    console.log("isEnd: ", isEnd);
    return (
        <>
            {!isLoaded && <ProgressBar percent={loadingPercentage} />}
            {isEnd && <Aside name={name} />}
            <Unity unityProvider={unityProvider} />
        </>
    );
};

export default Canvas;
