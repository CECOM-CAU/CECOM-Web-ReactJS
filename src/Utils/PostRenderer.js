import React from "react"; 
import styled from "styled-components";

import {Prism as SyntaxHighlighter} from "react-syntax-highlighter";
import {darcula} from 'react-syntax-highlighter/dist/esm/styles/prism'

const PostRenderer = (postID, postType) => {
    return {
        a: ({children, ...props}) =>{
            if(postType !== "About"){
                return(
                    <a target="_blank" {...props}>
                        <AContainer>
                            <p className="postLinkTitle">{children}</p>
                            <p className="postLinkURL">{props.href}</p>
                        </AContainer>
                    </a>
                )
            }else{
                return(
                    <A target="_blank" {...props}>{children}</A>
                )
            }
        },
        
        code: ({inline, className, children, ...props}) => {
            const match = /language-(\w+)/.exec(className || '');
            return !inline && match 
                ? <SyntaxHighlighter style={darcula} language={match[1]} children={String(children).replace(/\n$/, '')} {...props}/>
                : <code className={className} {...props}/>;
        },

        img: ({src, width, ...props}) =>
            <img src={require(`../Post/${postType}/${postID}/${src}`)} width={width} {...props} />,

        strong: ({children, ...props}) =>
            <Strong {...props}>{children}</Strong>,
        
        ul: ({children, ...props}) =>
            <Ul {...props}>{children}</Ul>,
    }
}

export default PostRenderer;

const A = styled.a`
    color: #164EAB;
    font-weight: 900;
    text-decoration: none;
    transition: color .3s;
    &:hover {
        color: #0b2b5e;
    }
`

const AContainer = styled.div`
    height: 100px;
    width: 450px;

    margin-left: auto;
    margin-right: auto;

    display: flex;
    flex-direction: column;

    align-items: center;
    justify-content: center;

    border: 1px #EEEEEE solid;
    border-radius: 15px;
    box-shadow: 0 1px 2px rgba(0,0,0,0.15);

    transition: box-shadow .3s;

    &:hover {
        box-shadow: 0 5px 15px rgba(0,0,0,0.3);
    }

    .postLinkTitle{
        color: #164EAB;
        font-size: 17px;
        font-weight: 900;
        margin: 0px;
        max-width: 90%;
        overflow: hidden;
        text-decoration: none;
        white-space: nowrap;
    }

    .postLinkURL{
        color: #777777;
        font-size: 15px;
        font-weight: 500;
        margin: 0px;
        max-width: 90%;
        overflow: hidden;
        text-decoration: none;
        white-space: nowrap;
    }

    @media screen and (max-width: 1400px){
        width: 100%;
    }
`

const Strong = styled.strong`
    background-color: #EEEEEE;
    color: #164EAB;
    font-weight: 500;
    padding: 4px;
`

const Ul = styled.ul`
    margin-left: auto;
    margin-right: auto;
    text-align: left;
    width: 500px;

    @media screen and (max-width: 1400px){
        width: auto;
    }
`