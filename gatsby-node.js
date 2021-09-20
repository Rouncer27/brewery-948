const path = require(`path`)
exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions
  try {
    const { data } = await graphql(`
      {
        pages: allWpPage {
          edges {
            node {
              template {
                templateName
              }
              slug
              databaseId
              uri
            }
          }
        }
      }
    `)

    const pages = data.pages.edges
    pages.forEach(({ node }) => {
      if (node.slug === "home") {
        createPage({
          path: `/`,
          component: path.resolve(`./src/pages/index.js`),
        })
      } else if (node.template.templateName === "About") {
        createPage({
          path: `/${node.slug}`,
          component: path.resolve(`./src/templates/about.js`),
          context: {
            id: node.databaseId,
          },
        })
      } else if (node.template.templateName === "Home") {
        createPage({
          path: `/${node.slug}`,
          component: path.resolve(`./src/templates/home.js`),
          context: {
            id: node.databaseId,
          },
        })
      } else if (node.template.templateName === "Default") {
        createPage({
          path: `/${node.slug}`,
          component: path.resolve(`./src/templates/defaultPage.js`),
          context: {
            id: node.databaseId,
          },
        })
      }
    })
  } catch (err) {
    console.log("Error retrieving WordPress data", err)
  }
}
