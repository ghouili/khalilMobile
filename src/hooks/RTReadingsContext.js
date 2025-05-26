import { useState } from "react";
import io from "socket.io-client";
const socket = io("http://192.168.1.101:4000");

const RTReadingsProvider = ({ children }) => {
    const [Tempature, settempature] = useState()

    socket.on("connect", () => console.log("WS connected"));
    socket.on("sensor:update", data => {
        console.log("Live sensor:", data);
        // update state/UI…
    });

    return <RTReadingsContext.Provider value={{}}>{children}</RTReadingsContext.Provider>

}

export { RTReadingsContext, RTReadingsProvider }