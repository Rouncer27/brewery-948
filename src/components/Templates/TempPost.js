import React from "react"

import FeaturedImage from "../PageComponents/Post/FeaturedImage"
import Wysiwyg from "../PageComponents/Post/Wysiwyg"
import Title from "../PageComponents/Post/Title"

const TempPost = ({ post, prevPost, nextPost }) => {
  console.log("POST", post)
  return (
    <>
      <FeaturedImage image={post.acfPost.featuredImage} />
      <Title title={post.title} date={post.date} />
      <Wysiwyg wysiwyg={post.acfPost.mainContent} />
    </>
  )
}

export default TempPost
