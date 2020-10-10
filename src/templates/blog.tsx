import { documentToReactComponents } from "@contentful/rich-text-react-renderer"
import { Button } from "@material-ui/core"
import { graphql } from "gatsby"
import React from "react"
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
        >
          <img
            style={{ width: "100%", objectFit: "contain" }}
            alt={alt}
            src={url}
          />
        </div>
      )
    },
  },
}
const Blog = ({ data }) => {
  console.log(data)
  return (
    <Layout>
      <div className="home">
        <div className="home__blog">
          <h1 className="home__blog__title">{data.contentfulPost.title}</h1>

          <p className="home__blog__author">
            By <span> {data.contentfulPost.author}</span>
          </p>
          <br />

          <Img
            className="featured"
            fluid={data.contentfulPost.thumbnail.fluid}
            alt={data.contentfulPost.title}
          />

          <br />

          {documentToReactComponents(
            data.contentfulPost.childContentfulPostContentRichTextNode.json,
            options
          )}

          <br />
        </div>
      </div>
    </Layout>
  )
}

export default Blog
