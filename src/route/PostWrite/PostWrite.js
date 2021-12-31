import React from "react";

import "./PostWrite.js"

const PostWrite = (props) => {
    let postID = props.match.params.postType;

    return(
        <div>
            PostWrite {postID}
            <input type="text" placeholder="제목" />
            <input type="text" placeholder="내용" />
            <input type="text" placeholder="작성자" />
            <input type="password" placeholder="비밀번호" />
            <button>업로드</button>
        </div>
    )
}

export default PostWrite;