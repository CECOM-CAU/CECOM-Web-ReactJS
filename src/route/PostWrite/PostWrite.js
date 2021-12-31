import React from "react";

import "./PostWrite.js"

const PostWrite = (props) => {
    let postID = props.match.params.postType;

    return(
        <div>
            PostWrite {postID}
            <input type="text" name="postTitle" placeholder="제목" />
            <input type="text" name="postContent" placeholder="내용" />
            <input type="text" name="postAuthor" placeholder="작성자" />
            <button>업로드</button>
        </div>
    )
}

export default PostWrite;