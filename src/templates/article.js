import React, { Component } from 'react';
// import Image from 'gatsby-image';
import { graphql } from 'gatsby';
// import styled from 'styled-components';

// import Header from '../components/header';
// import Footer from '../components/indexComponents/footer';
// import Cart from '../components/categorie/cart';

export default class Article extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedImageId: props.data.images
        ? props.data.images.edges[0].node.id
        : ''
      // counter: 1,
      // isCartOpen: false
    };
  }
  handleThumbnailClick = id => {
    this.setState({ selectedImageId: id });
  };
  // incrementCounter = () => {
  //   this.setState({
  //     counter: ++this.state.counter,
  //   })
  // }
  // decrementCounter = () => {
  //   this.setState({
  //     counter: this.state.counter === 0 ? 0 : --this.state.counter,
  //   })
  // }
  handleOpenCart = () => {
    this.setState({ isCartOpen: true });
  };
  closeCart = () => {
    this.setState({ isCartOpen: false });
  };
  render() {
    const {
      data: { post, images }
    } = this.props;
    const selectedImage = images.edges.filter(
      x => x.node.id === this.state.selectedImageId
    )[0];
    return (
      <div>
        {/* <Cart
          post={post}
          image={images.edges[0].node}
          isCartOpen={this.state.isCartOpen}
          closeCart={this.closeCart}
        /> */}
        article
        {/* <Header />
        <ThreePanes>
          <ArticleWrapper>
            <ArticleImageWrapper>
              <Image
                fluid={selectedImage.node.localFile.childImageSharp.fluid}
              />
            </ArticleImageWrapper>
          </ArticleWrapper>

          <ArticleDetails>
            <ArticleMiniatures>
              {images.edges.map(x => (
                <Miniature
                  key={x.node.id}
                  onClick={() => this.handleThumbnailClick(x.node.id)}
                  style={{
                    opacity: this.state.selectedImageId === x.node.id ? 1 : 0.3
                  }}
                >
                  <Image fixed={x.node.localFile.childImageSharp.fixed} />
                </Miniature>
              ))}
            </ArticleMiniatures>

            <Details>
              <h2>Vestes & Qqch</h2>
              <h3>{post.title.replace(/^\d+__/g, '')}</h3>
              <p>{post.content.match(/(?<=<p>).*?(?=<\/p>)/g)[0]}</p>
              <div className='horizontalSep' />
              <AddToCart>
                <p className='articlePrice'>{`${
                  post.content.match(/(?<=<p>).*?(?=<\/p>)/g)[1]
                } DA`}</p>
                <button
                  onClick={this.handleOpenCart}
                  className='addToCart__button'
                >
                  Ajouter au panier
                </button>
              </AddToCart>
            </Details>

          </ArticleDetails>
        </ThreePanes>
        <Footer /> */}
      </div>
    );
  }
}
// $wordpress_id: Int!
export const query = graphql`
  query currentPost($id: String!, $seekWpMediaByTitleNum: String) {
    post: wordpressPost(id: { eq: $id }) {
      id
      content
      title
      # featured_media {
      #   localFile {
      #     childImageSharp {
      #       fluid {
      #         ...GatsbyImageSharpFluid
      #       }
      #     }
      #   }
      # }
    }
    images: allWordpressWpMedia(
      filter: { title: { glob: $seekWpMediaByTitleNum } }
    ) {
      edges {
        node {
          id
          localFile {
            childImageSharp {
              fluid {
                ...GatsbyImageSharpFluid
              }
              fixed(width: 80) {
                ...GatsbyImageSharpFixed
              }
            }
          }
        }
      }
    }
  }
`;

// const ThreePanes = styled.div`
//   display: flex;
//   justify-content: center;
//   padding: 0 5vw;
//   max-width: 1280px;
//   margin: 0 auto;
//   @media screen and (max-width: 860px) {
//     flex-direction: column;
//   }
// `;
// const ArticleWrapper = styled.div`
//   background-color: #f3f1f1;
//   flex-basis: 65%;
//   max-width: calc(10% + 400px);
//   padding: 80px;
//   margin: 0 auto;
//   height: 620px;
//   width: 100%;
//   margin-bottom: 3em;
//   @media screen and (max-width: 860px) {
//     max-height: 100%;
//     height: auto;
//   }
// `;
// const ArticleImageWrapper = styled.figure``;
// const ArticleDetails = styled.div`
//   flex-basis: 35%;
//   padding: 0 1em;
//   h2,
//   h3,
//   p {
//     font-family: Avenir, Arial, Helvetica, sans-serif;
//   }
//   h2 {
//     font-weight: 400;
//   }
//   @media screen and (max-width: 860px) {
//     flex-direction: column;
//     align-items: center;
//     text-align: center;
//   }
// `;
// const ArticleMiniatures = styled.div`
//   display: flex;
//   margin-bottom: 2em;
//   @media screen and (max-width: 860px) {
//     justify-content: center;
//   }
// `;
// const Miniature = styled.div`
//   overflow: hidden;
//   max-height: 84px;
//   background: #f3f1f1;
//   transition: opacity 900ms;
//   & + & {
//     margin-left: 0.4em;
//   }
// `;
// const Details = styled.div`
//   .horizontalSep {
//     margin: 2em 0;
//     border: 0.9px solid lightgrey;
//   }
// `;
// const AddToCart = styled.div`
//   display: flex;
//   justify-content: space-between;
//   align-items: center;
//   .articlePrice {
//     font-family: Dosis;
//     font-size: 1.2rem;
//     font-weight: 500;
//     margin: 1em;
//   }
//   .addToCart__button {
//     background: #fa7268;
//     color: white;
//     text-transform: uppercase;
//     font-weight: 500;
//     padding: 7px 30px;
//     white-space: nowrap;
//   }

//   @media screen and (max-width: 1200px) {
//     flex-direction: column;
//   }
// `;
