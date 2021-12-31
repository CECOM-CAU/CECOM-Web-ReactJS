import React from "react";

import "./SimpleIntro.css";

const SimpleIntro = () => {
    return (
        <div id="simpleIntro">
            <div>
                <hr/>
                <div id="simpleIntroTitle">
                    중앙대학교 중앙동아리<br/><span>CECOM</span>
                </div>
                <div id="simpleContentMain">
                    안녕하세요, 중앙대학교 중앙동아리 세콤입니다.<br/>
                    세콤은 하드웨어와 소프트웨어 전반을 다루는 하드웨어 동아리로,<br/>
                    다양한 활동을 진행하고 있습니다.
                </div>
            </div>
        </div>
    );
}

export default SimpleIntro;