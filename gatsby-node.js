// exports.onCreatePage = async ({ page, actions: { createPage } }) => {
//   /*
//    * The dashboard (which lives under `/account`) is a client-only route. That
//    * means that we don’t want to build it server-side because it depends on data
//    * that we won’t have until a user logs in. By using `matchPath`, we’re able
//    * to specify the entire `/account` path as a client-only section, which means
//    * Gatsby will skip any `/account/*` pages during the build step.
//    *
//    * Take a look at `src/pages/account.js` for more details.
//    */
//   if (page.path.match(/^\/account/)) {
//     page.matchPath = '/account/*';

//     createPage(page);
//   }
// };

// exports.onCreateWebpackConfig = ({ stage, loaders, actions }) => {
//   if (stage === 'build-html') {
//     /*
//      * During the build step, `auth0-js` will break because it relies on
//      * browser-specific APIs. Fortunately, we don’t need it during the build.
//      * Using Webpack’s null loader, we’re able to effectively ignore `auth0-js`
//      * during the build. (See `src/utils/auth.js` to see how we prevent this
//      * from breaking the app.)
//      */
//     actions.setWebpackConfig({
//       module: {
//         rules: [
//           {
//             test: /auth0-js/,
//             use: loaders.null(),
//           },
//         ],
//       },
//     });
//   }
// };
/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

// You can delete this file if you're not using it

// exports.onCreateNode = ({ node }) => {
//   console.log(node.internal.type)
// }
const graphql = require('gatsby');
const path = require('path');

exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions;
  return new Promise((resolve, reject) => {
    const blogPostTemplate = path.resolve(`src/templates/article.js`);
    // Query for markdown nodes to use in creating pages.
    resolve(
      graphql(
        `
          {
            allWordpressPost {
              edges {
                node {
                  id
                  slug
                  wordpress_id
                  categories {
                    name
                  }
                }
              }
            }
          }
        `
      ).then(result => {
        if (result.errors) {
          reject(result.errors);
        }
        console.log(JSON.stringify(result, null, 4));

        // Create blog post pages.
        result.data.allWordpressPost.edges.forEach(edge => {
          createPage({
            path: `${edge.node.categories[0].name}/${edge.node.id}`, // required
            component: blogPostTemplate,
            context: {
              // Add optional context data. Data can be used as
              // arguments to the page GraphQL query.
              //
              // The page "path" is always available as a GraphQL
              // argument.
              id: `${edge.node.id}`,
              seekWpMediaByTitleNum: `${edge.node.wordpress_id}__*`
            }
          });
        });

        return;
      })
    );
  });
};
