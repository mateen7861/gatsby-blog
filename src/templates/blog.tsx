import { documentToReactComponents } from "@contentful/rich-text-react-renderer"
import { Button } from "@material-ui/core"
import { graphql } from "gatsby"
import React, { useContext, useEffect } from "react"
import "./blog.css"
import Img from "gatsby-image"
import Layout from "../components/Layout"
export const query = graphql`
  query($slug: String!) {
    contentfulPost(slug: { eq: $slug }) {
      title
      author
      thumbnail {
        fluid {
          ...GatsbyContentfulFluid
        }
      }
      childContentfulPostContentRichTextNode {
        json
      }
    }
  }
`
const options = {
  renderNode: {
    "embedded-asset-block": node => {
      const alt = node.data.target.fields.title["en-US"]
      const url = node.data.target.fields.file["en-US"].url
      return (
        <div
          style={{
            width: "100%",
            display: "flex",
            justifyContent: "center",
            margin: "1rem 0rem",
          }}
          className="blog__container__content__container"
        >
          <img className="blog__container__content__img" alt={alt} src={url} />
        </div>
      )
    },
  },
}
const Blog = ({ data }) => {

  return (
    <Layout>
      <div className="blog">
        <div className="blog__container">
          <h1 className="blog__container__title">
            {data.contentfulPost.title}
          </h1>

          <p className="blog__container__author">
            By <span> {data.contentfulPost.author}</span>
          </p>
          <br />

          <Img
            className="blog__container__thumbnail"
            fluid={data.contentfulPost.thumbnail.fluid}
            alt={data.contentfulPost.title}
          />

          <br />

          <div className="blog__container__content">
            {documentToReactComponents(
              data.contentfulPost.childContentfulPostContentRichTextNode.json,
              options
            )}
          </div>

          <br />
        </div>
      </div>
    </Layout>
  )
}

export default Blog
