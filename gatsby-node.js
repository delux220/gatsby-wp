/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

// You can delete this file if you're not using it
const path = require(`path`)
const slash = require(`slash`)

// Implement the Gatsby API “createPages”. This is
// called after the Gatsby bootstrap is finished so you have
// access to any information necessary to programmatically
// create pages.
// Will create pages for WordPress pages (route : /{slug})
// Will create pages for WordPress posts (route : /post/{slug})
exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions

  // The “graphql” function allows us to run arbitrary
  // queries against the local Gatsby GraphQL schema. Think of
  // it like the site has a built-in database constructed
  // from the fetched data that you can run queries against.
  const result = await graphql(`
    {
     
    
    allWordpressWpInterests {
        edges {
          node {
            id
            slug
            content
            featured_media {
              id
              source_url
            }
            acf {
            	image_1 {
                wordpress_id
                title
                filename
                filesize
                url
                link
                alt
                author
                description
                caption
                name
                status
                uploaded_to
                date
                modified
                width
                height
              } 
              image_2 {
                wordpress_id
                title
                filename
                filesize
                url
                link
                alt
                author
                description
                caption
                name
                status
                uploaded_to
                date
                modified
                width
                height
              } 
              image_3 {
                wordpress_id
                title
                filename
                filesize
                url
                link
                alt
                author
                description
                caption
                name
                status
                uploaded_to
                date
                modified
                width
                height
              } 
            }
            title
            status
            template
          }
        }
      }
  }
  `)

  // Check for any errors
  if (result.errors) {
    throw new Error(result.errors)
  }

  // Access query results via object destructuring
  //const { allWordpressPage, allWordpressPost, allWordpressWpInterests } = result.data
  const { allWordpressWpInterests } = result.data

  /*const pageTemplate = path.resolve(`./src/templates/post.js`)
  // We want to create a detailed page for each
  // page node. We'll just use the WordPress Slug for the slug.
  // The Page ID is prefixed with 'PAGE_'
  allWordpressPage.edges.forEach(edge => {
  	//console.log(edge); 
    // Gatsby uses Redux to manage its internal state.
    // Plugins and sites can use functions like "createPage"
    // to interact with Gatsby.
    createPage({
      // Each page is required to have a `path` as well
      // as a template component. The `context` is
      // optional but is often necessary so the template
      // can query data specific to each page.
      path: `/${edge.node.slug}/`,
      component: slash(pageTemplate),
      context: {
        id: edge.node.id,
      },
    })
  })

  
  // We want to create a detailed page for each
  // post node. We'll just use the WordPress Slug for the slug.
  // The Post ID is prefixed with 'POST_'
  allWordpressPost.edges.forEach(edge => {
  	console.log(edge); 
    createPage({
      path: `/${edge.node.slug}/`,
      component: slash(postTemplate),
      context: {
        id: edge.node.id,
      },
    })
  })*/
  const postTemplate = path.resolve(`./src/templates/post.js`)

  allWordpressWpInterests.edges.forEach(edge => {
  	console.log(edge); 
    createPage({
      path: `/${edge.node.slug}/`,
      component: slash(postTemplate),
      title: edge.node.title,
      content: edge.node.content,
      featured_media: edge.node.featured_media,
      context: {
        id: edge.node.id,
      },
    })
  })
}