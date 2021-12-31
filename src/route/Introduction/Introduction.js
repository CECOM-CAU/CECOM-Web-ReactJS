import React from "react";
import SimpleIntro from "./SimpleIntro";
import ActivityIntro from "./ActivityIntro";
import Register from "./Register";

import "./Introduction.css";

const Introduction = () => {
    return(
        <div id="container">
            <SimpleIntro/>
            <ActivityIntro/>
            <Register/>
        </div>
    )
}

export default Introduction;