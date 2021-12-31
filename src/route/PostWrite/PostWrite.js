import React, {useState} from "react";

import axios from "axios";

import "./PostWrite.js"

const PostWrite = (props) => {
    let postID = props.match.params.postType;

    const [author, setAuthor] = useState("작성자");
    const [content, setContent] = useState("내용");
    const [title, setTitle] = useState("제목");

    const onTextChange = (e) => {
        switch(e.target.name){
            case "postAuthor":
                setAuthor(e.target.value);
                break;
            case "postContent":
                setContent(e.target.value);
                break;
            case "postTitle":
                setTitle(e.target.value);
                break;
        }
    }

    const onUploadClick = () => {
        axios.post("https://api.cecom.dev/writePost",
            {
                "postAuthor": author,
                "postContent": content,
                "postTitle": title,
            }
        ).then(
            function resultOK() {
                alert("게시글 등록이 완료되었습니다.");
                window.location.href = "https://cecom.dev/board"
            }
        ).catch(
            function resultError(error) {
                alert(`오류가 발생하였습니다. 다시 시도해주세요. ${error}`);
            }
        );
    }

    return(
        <div className="divPostWrite">
            <input onChange={onTextChange} id="inputPostTitle" type="text" name="postTitle" placeholder="제목" />
            <input onChange={onTextChange} id="inputPostContent" type="text" name="postContent" placeholder="내용" />
            <input onChange={onTextChange} id="inputPostAuthor" type="text" name="postAuthor" placeholder="작성자" />
            <button onClick={onUploadClick}>업로드</button>
        </div>
    )
}

export default PostWrite;