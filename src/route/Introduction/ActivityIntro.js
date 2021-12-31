import React from "react";
import Android from "./images/android.png";
import Arduino from "./images/arduino.png";
import C from "./images/c.png";
import Python from "./images/python.png";
import ReactImg from "./images/react.png";
import Unity from "./images/unity.png";

import "./ActivityIntro.css";

const ActivityIntro = () => {
    return (
        <div id="activity">
            <div>
                <div id="activityMain">
                    [ 세콤에서는 어떤 활동을 진행하나요? ]<br/>
                </div>
            </div>
            <div>
                <div id="activityMentor">
                    <span>MENTORING</span><br/>
                    <hr/><br/>
                    프로그래밍에 익숙한 고인물들이 뉴비의 멘토가 되어 멘토링을 진행합니다.<br/>
                    배우고자 하는 마음가짐만 있다면 누구든 참여할 수 있습니다!<br/>
                    <>
                        <img src={Arduino} alt="Arduino"/>
                        <img src={C} alt="c"/>
                        <img src={Python} alt="python"/>
                        <img src={Unity} alt="unity"/>
                    </>
                    Arduino · C · Python · Unity (2021-2 기준)
                </div>
                <div id="activityProject">
                    <span>PROJECT</span><br/>
                    <hr/><br/>
                    원하는 프로젝트에 참여하여 직접 프로그래밍을 경험해 볼 수 있습니다.<br/>
                    학기마다 계획되는 프로젝트는 상이할 수 있습니다.<br/>
                    <>
                        <img src={Android} alt="android"/>
                        <img src={Arduino} alt="arduino"/>
                        <img src={Python} alt="python"/>
                        <img src={ReactImg} alt="Web"/>
                    </>
                    Android · Arduino · Python · Web (2021-2 기준)
                </div>
            </div>
        </div>
    );
}

export default ActivityIntro;