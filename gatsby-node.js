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
              id
            }
          }
        }

        posts: allWpPost {
          edges {
            node {
              id
              slug
              uri
            }
          }
        }

        beers: allWpOurBeer {
          edges {
            node {
              id
              slug
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
            id: node.id,
          },
        })
      } else if (node.template.templateName === "Home") {
        createPage({
          path: `/${node.slug}`,
          component: path.resolve(`./src/templates/home.js`),
          context: {
            id: node.id,
          },
        })
      } else if (node.template.templateName === "Taproom") {
        createPage({
          path: `/${node.slug}`,
          component: path.resolve(`./src/templates/taproom.js`),
          context: {
            id: node.id,
          },
        })
      } else if (node.template.templateName === "Contact") {
        createPage({
          path: `/${node.slug}`,
          component: path.resolve(`./src/templates/contact.js`),
          context: {
            id: node.id,
          },
        })
      } else if (node.template.templateName === "Beers") {
        createPage({
          path: `/${node.slug}`,
          component: path.resolve(`./src/templates/beers.js`),
          context: {
            id: node.id,
          },
        })
      } else if (node.template.templateName === "News") {
        createPage({
          path: `/${node.slug}`,
          component: path.resolve(`./src/templates/news.js`),
          context: {
            id: node.id,
          },
        })
      } else if (node.template.templateName === "Default") {
        createPage({
          path: `/${node.slug}`,
          component: path.resolve(`./src/templates/defaultPage.js`),
          context: {
            id: node.id,
          },
        })
      }
    })

    const beers = data.beers.edges
    beers.forEach(({ node }, index) => {
      createPage({
        path: `/our-beers/${node.slug}/`,
        component: path.resolve("./src/templates/beer.js"),
        context: {
          id: node.id,
          slug: node.slug,
          next: index === 0 ? null : beers[index - 1].node.slug,
          prev: index === beers.length - 1 ? null : beers[index + 1].node.slug,
        },
      })
    })

    const posts = data.posts.edges
    posts.forEach(({ node }, index) => {
      createPage({
        path: `/news-and-events/${node.slug}/`,
        component: path.resolve("./src/templates/post.js"),
        context: {
          id: node.id,
          slug: node.slug,
          next: index === 0 ? null : posts[index - 1].node.slug,
          prev: index === posts.length - 1 ? null : posts[index + 1].node.slug,
        },
      })
    })
  } catch (err) {
    console.log("Error retrieving WordPress data", err)
  }
}
