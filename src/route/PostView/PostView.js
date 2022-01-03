import React, {useEffect, useState} from "react";

import axios from "axios";
import ReactMarkdown from "react-markdown";
import RehypeRaw from "rehype-raw";
import RemarkGFM from "remark-gfm";

import PostRenderer from "../../Util/PostRenderer";

import "./PostView.css"

const PostView = (props) => {
    let postID = props.match.params.postID;

    useEffect(() => {
        axios.post("https://api.cecom.dev/getPost",
            {
                "postID": postID
            }
        ).then(
            function resultOK(response) {
                setPostData(response);
            }
        ).catch(
            function resultError (error) {
                console.log(error);
            }
        );
    }, []);

    const [postData, setPostData] = useState({
        "RESULT": {
            "RESULT_CODE": 100,
            "RESULT_MSG": "NOT LOADED"
        },
        "DATA": {
            "author": "",
            "content": "",
            "title": "게시글을 불러오는 중입니다..."
        }
    });
    const [password, setPassword] = useState("제목");

    const onTextChange = (e) => {
        setPassword(e.target.value);
    }

    const onDeleteClick = () => {
        axios.post("https://api.cecom.dev/deletePost",
                {
                    "postID": postID,
                    "postPassword": password
                }
            ).then(
                function resultOK(response) {
                    if(response.data.RESULT.RESULT_CODE == 0){
                        alert("게시글 삭제가 완료되었습니다.");
                        window.location.href = "https://cecom.dev/board"
                    }else{
                        alert("비밀번호가 올바르지 않습니다.")
                    }
                }
            ).catch(
                function resultError(error) {
                    alert(`오류가 발생하였습니다. 다시 시도해주세요. ${error}`);
                }
            );
    }

    return(
        <>
            {
                Object.entries(postData).map((item) => {
                    let postAuthor = "";
                    let postContent = "";
                    let postDate = postID;
                    let postTitle = "";

                    if(item[0] == "data" && item[1].RESULT.RESULT_CODE == 0){
                        postAuthor = item[1].DATA.author;
                        postContent = item[1].DATA.content;
                        postTitle = item[1].DATA.title;
                    }else{
                        return;
                    }

                    return(
                        <div align="center" className="PostContainer">
                            <div className="PostTitle">
                                <h2>{postTitle}</h2>

                                <div className="PostAuthorDate">
                                    <p>written by {postAuthor}</p>
                                    <p>|</p>
                                    <p>{postDate}</p>
                                </div>
                            </div>

                            <hr className="PostSeperator"/>

                            <div className="PostViewContent">
                                <div className="markdown-body">
                                    <ReactMarkdown
                                        children={postContent}
                                        components={PostRenderer(postID)}
                                        rehypePlugins={[RehypeRaw]}
                                        remarkPlugins={[RemarkGFM]} />
                                </div>
                            </div>

                            <div className="PostManage">
                                <input onChange={onTextChange} id="inputPW" type="password" name="postPW" placeholder="비밀번호" />
                                <button onClick={onDeleteClick} id="inputDelet  e">삭제</button>
                            </div>
                        </div>
                    )
                })
            }
        </>
    )
}

export default PostView;