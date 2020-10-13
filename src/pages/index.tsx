import React from "react"
import { useStaticQuery, graphql, Link } from "gatsby"
import Img from "gatsby-image"
import { documentToReactComponents } from "@contentful/rich-text-react-renderer"
import Layout from "../components/Layout"
import "./Home.css"
import Button from "@material-ui/core/Button"
import { GlobalContext } from "../context/GlobalProvider"
import { useContext } from "react"
import { useNavigate } from "@reach/router"

export default function Home() {
  const navigate = useNavigate()

  const [{ viewed }, dispatch]: any = useContext(GlobalContext)
  console.log(viewed)
  const data = useStaticQuery(graphql`
    {
      allContentfulPost {
        nodes {
          title
          author
          slug
          thumbnail {
            fluid {
              ...GatsbyContentfulFluid
            }
          }
          content {
            json
          }
        }
      }
    }
  `)
  const options = {
    renderNode: {
      "embedded-asset-block": node => {
        const alt = node.data.target.fields.title["en-US"]
        const url = node.data.target.fields.file["en-US"].url
        return <img alt={alt} src={url} />
      },
    },
  }

  return (
    <Layout>
      <div className="home">
        {data.allContentfulPost.nodes.map((node, index) => (
          <div className="home__blog" key={index}>
            <h1 className="home__blog__title">{node.title}</h1>

            <p className="home__blog__author">
              By <span> {node.author}</span>
            </p>
            <br />

            <Img
              className="featured"
              fluid={node.thumbnail.fluid}
              alt={node.title}
            />

            <br />
            <div className="rich">
              {" "}
              {documentToReactComponents(node.content.json, options)}
            </div>
            <br />

            <Button
              color="primary"
              disabled={viewed >= 3 ? true : false}
              variant="contained"
              onClick={() => navigate(`${node.slug}`)}
            >
              Read More
            </Button>
          </div>
        ))}
      </div>
    </Layout>
  )
}
