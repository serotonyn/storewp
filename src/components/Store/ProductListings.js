import React from 'react';
// import Client from 'shopify-buy';
import { graphql, StaticQuery } from 'gatsby';
import styled from 'react-emotion';
import ProductPreview from '../ProductPreview/ProductPreview';

const Previews = styled('div')`
  margin-top: 2rem;

  @media (min-width: 480px) {
    align-items: flex-start;
    display: flex;
    flex-wrap: wrap;
    justify-content: flex-start;
  }
`;

// export default () => (
//   <Previews>
//     <ProductPreview key={123} />
//   </Previews>
// );
// export default () => (
//   <StaticQuery
//     query={graphql`
//       query ProductListingsQuery {
//         products: allShopifyProduct {
//           edges {
//             node {
//               id
//               title
//               description
//               productType
//               variants {
//                 shopifyId
//                 title
//                 price
//                 availableForSale
//               }
//               images {
//                 id
//                 localFile {
//                   childImageSharp {
//                     fluid(maxWidth: 910, maxHeight: 910) {
//                       ...GatsbyImageSharpFluid_withWebp
//                     }
//                   }
//                 }
//               }
//             }
//           }
//         }
//       }
//     `}
//     render={({ products }) => (
//       <Previews>
//         {products.edges.map(({ node: product }) => (
//           <ProductPreview key={product.id} product={product} />
//         ))}
//       </Previews>
//     )}
//   />
// );

export default () => (
  <StaticQuery
    query={graphql`
      query hommesPosts {
        hommesImages: allWordpressPost(
          filter: { categories: { elemMatch: { name: { eq: "hommes" } } } }
        ) {
          edges {
            node {
              id
              content
              title
              categories {
                name
              }
              featured_media {
                localFile {
                  childImageSharp {
                    fixed {
                      ...GatsbyImageSharpFixed
                    }
                  }
                }
              }
            }
          }
        }
      }
    `}
    render={({ hommesImages: { edges = [] } = {} }) => (
      <Previews>
        {console.log('edges', edges)}
        {edges.map(edge => {
          console.log(edge.node.title);
          return <ProductPreview key={edge.node.id} product={edge.node} />;
        })}
      </Previews>
    )}
  />
);
