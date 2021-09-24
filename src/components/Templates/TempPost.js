import React from "react"

import FeaturedImage from "../PageComponents/Post/FeaturedImage"
import Wysiwyg from "../PageComponents/Post/Wysiwyg"
import Title from "../PageComponents/Post/Title"
import PostNav from "../PageComponents/Post/PostNav"

const TempPost = ({ post, prevPost, nextPost }) => {
  return (
    <>
      <FeaturedImage image={post.acfPost.featuredImage} />
      <Title title={post.title} date={post.date} author={post.acfPost.author} />
      <Wysiwyg wysiwyg={post.acfPost.mainContent} />
      <PostNav prevPost={prevPost} nextPost={nextPost} />
    </>
  )
}

export default TempPost
