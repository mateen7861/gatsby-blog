const path = require("path")
exports.createPages=async ({graphql,actions})=>{
    const {createPage}=actions
    const response=await graphql(`
    {
        allContentfulPost {
          nodes {
            slug
          }
        }
      }`)
      response.data.allContentfulPost.nodes.forEach(node => {
          createPage({
              path:`/${node.slug}`,
              component:path.resolve("./src/templates/blog.tsx")
              ,
              context:{
                  slug:node.slug
              }
          })
          
      });
}