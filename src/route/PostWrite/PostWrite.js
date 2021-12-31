import React, {useState} from "react";

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
        console.log(author);
        console.log(content);
        console.log(title);

        axios.post("https://api.cecom.dev/writePost",
            {
                "postAuthor": author,
                "postContent": content,
                "postTitle": title,
            }
        ).then(
            function resultOK(response) {
                console.log(response);
            }
        ).catch(
            function resultError (error) {
                console.log(error);
            }
        );
    }

    return(
        <div>
            PostWrite {postID}
            <input onChange={onTextChange} type="text" name="postTitle" placeholder="제목" />
            <input onChange={onTextChange} type="text" name="postContent" placeholder="내용" />
            <input onChange={onTextChange} type="text" name="postAuthor" placeholder="작성자" />
            <button onClick={onUploadClick}>업로드</button>
        </div>
    )
}

export default PostWrite;