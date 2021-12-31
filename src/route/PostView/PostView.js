import React, {useEffect, useState} from "react";

import axios from "axios";
import ReactMarkdown from "react-markdown";
import RehypeRaw from "rehype-raw";
import RemarkGFM from "remark-gfm";

import PostRenderer from "../../Util/PostRenderer";

import "./PostView.js"

const PostView = (props) => {
    let postID = props.match.params.postID;

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
                        </div>
                    )
                })
            }
        </>
    )
}

export default PostView;