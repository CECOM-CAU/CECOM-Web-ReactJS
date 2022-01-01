import React, {useState} from "react";

import axios from "axios";

import "./PostWrite.css"

const PostWrite = (props) => {
    let postID = props.match.params.postType;

    const [author, setAuthor] = useState("작성자");
    const [content, setContent] = useState("내용");
    const [password1, setPW1] = useState("비밀번호");
    const [password2, setPW2] = useState("비밀번호 확인");
    const [title, setTitle] = useState("제목");

    const onTextChange = (e) => {
        switch(e.target.name){
            case "postAuthor":
                setAuthor(e.target.value);
                break;
            case "postContent":
                setContent(e.target.value);
                break;
            case "postPW1":
                setPW1(e.target.value);
                break;
            case "postPW2":
                setPW2(e.target.value);
                break;
            case "postTitle":
                setTitle(e.target.value);
                break;
        }
    }

    const onUploadClick = () => {
        if(password1 == password2){
            axios.post("https://api.cecom.dev/writePost",
                {
                    "postAuthor": author,
                    "postContent": content,
                    "postPassword": password1,
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
        }else{
            alert("비밀번호 확인이 일치하지 않습니다.")
        }
    }

    return(
        <div className="divPostWrite">
            <input onChange={onTextChange} id="inputPostTitle" type="text" name="postTitle" placeholder="제목" />
            <input onChange={onTextChange} id="inputPostAuthor" type="text" name="postAuthor" placeholder="작성자" />
            <textarea onChange={onTextChange} id="inputPostContent" type="text" name="postContent" placeholder="내용" />
            <input onChange={onTextChange} id="inputPostPW" type="text" name="postPW1" placeholder="비밀번호" />
            <input onChange={onTextChange} id="inputPostPW" type="text" name="postPW2" placeholder="비밀번호 확인" />
            <button onClick={onUploadClick} id="inputUpload">업로드</button>
        </div>
    )
}

export default PostWrite;