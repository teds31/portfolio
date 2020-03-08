import React from "react"
import { jsx } from "theme-ui"

const Post = () => {
  return (
    <section>
      <article>
        <h1>blog post title</h1>
        <h4>By: Teddy Stanowski</h4>
        <h5>Published: {Date(Date.now()).toString()}</h5>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero
          fugiat, similique, perspiciatis porro aut nihil nemo perferendis eius
          molestiae doloremque sit molestias velit iusto ab facere nulla a odit
          cupiditate.
        </p>
      </article>
    </section>
  )
}

export default Post
