import React from "react";
import { PostPreview } from "../PostPreview/PostPreview";


export const PostPreviewList = (props) => {

    const PostPreviewItems = props.posts.map((post) => 
        <PostPreview key={post.id} post={post} />
    )

    return (
        <>
         {PostPreviewItems}
        </>

    )
}