import React, {useEffect, useState} from "react";

import axios from "axios";

import BoardItem from "./BoardItem";
import "./Board.css";

const Board = () => {
    const [postList, setPostList] = useState({
        "RESULT": {
            "RESULT_CODE": 100,
            "RESULT_MSG": "NOT LOADED"
        },
        "DATA": {
            "": {
                "author": "",
                "content": "",
                "title": "게시글 목록을 불러오는 중입니다..."
            }
        }
    });

    useEffect(() => {
        axios.post("https://api.cecom.dev/getPostList"
        ).then(
            function resultOK(response) {
                setPostList(response.data);
            }
        ).catch(
            function resultError (error) {
                console.log(error);
            }
        );
    }, []);

    const onBtnNewClick = () => {
        window.location.href = "https://cecom.dev/postwrite/new";
    }

    return(
        <div id="divBoard">
            <div id="divBoardContainer">
                <div id="divBoardNew">
                    <button onClick={onBtnNewClick} id="buttonNew">새 글</button>
                </div>
                <div id="divBoardTitle">
                    <div id="divBoardTitleText">
                        <p class="pBoardPostTitle">제목</p>
                        <p class="pBoardPostAuthor">작성자</p>
                        <p class="pBoardPostDate">날짜</p>
                    </div>
                    <div id="divBoardTitleDivider"></div>
                </div>
                <div id="divBoardItemContainer">
                    {
                        Object.entries(postList.DATA).reverse().map(postData => {
                            return(
                                <BoardItem
                                    author={postData[1].author}
                                    date={postData[0]}
                                    title={postData[1].title} />
                            )
                        })
                    }
                </div>
            </div>
        </div>
    )
}

export default Board;